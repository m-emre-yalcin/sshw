import React, { useState, useMemo, useEffect } from "react";
import { Orders, Restaurants, Profile, Login } from "./pages";
import { View, ViewHeader, ViewAside } from "./components/View";
import { ReactComponent as OrderIcon } from "./assets/icons/order.svg";
import { ReactComponent as RestaurantIcon } from "./assets/icons/restaurant.svg";
import { ReactComponent as ProfileIcon } from "./assets/icons/profile.svg";

import getUser from "./services/fetch/queries/getUser";

function App({ tab }: { tab?: string }) {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({});
  const [list, setList] = useState([
    {
      id: 1,
      name: "orders",
      icon: <OrderIcon />,
      view: <Orders />,
      active: true
    },
    {
      id: 2,
      name: "restaurants",
      icon: <RestaurantIcon />,
      view: <Restaurants />,
      active: false
    },
    {
      id: 3,
      name: "profile",
      icon: <ProfileIcon />,
      view: <Profile />,
      active: false
    }
  ]);
  const activeTab = useMemo(
    () => list.filter((item) => item.active)[0],
    [list]
  );
  const selectTab = (index: number) => {
    // deactivate all
    for (const i in list) {
      list[i].active = false;
    }

    // activate given index
    if (list[index]) {
      list[index].active = true;
    }

    // re-render
    setList([...list]);
  };
  const onLogout = () => {
    // deactivate all
    for (const i in list) {
      list[i].active = false;
    }

    // re-render
    setList([...list]);
  };
  const switchTheme = () => {
    const val = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", val);
    document.getElementsByTagName("html")[0].setAttribute("theme", val);
    setTheme(val);
  };

  // check for saved user credentials:
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const theme = localStorage.getItem("theme") || "light";

    document.getElementsByTagName("html")[0].setAttribute("theme", theme);
    setTheme(theme);

    if (token && user) {
      setUser(JSON.parse(user));
      selectTab(0);
    } else {
      selectTab(-1);
    }
  }, []);

  // show active page
  if (activeTab) {
    return (
      <View
        header={<ViewHeader user={user} onSwitchTheme={switchTheme} />}
        aside={
          <ViewAside list={list} onSelect={selectTab} onLogout={onLogout} />
        }
      >
        {activeTab.view}
      </View>
    );
  }

  // login page
  return (
    <View>
      <Login
        onLogin={async (uid: string) => {
          const user = await getUser(uid);
          localStorage.setItem("user", JSON.stringify(user));

          setUser(user);
          selectTab(0);
        }}
      />
    </View>
  );
}

export default App;
