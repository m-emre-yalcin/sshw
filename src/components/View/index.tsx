import React, { useState } from "react";
import "./style.scss";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";
import { ReactComponent as ThemeIcon } from "../../assets/icons/theme.svg";

// Components:
export const View = (props: ViewProps) => {
  return (
    <div
      className={`view-container ${
        props.header && props.aside ? "layout" : "center"
      }`}
    >
      {<header className="view-header">{props.header}</header>}

      {<aside className="view-aside">{props.aside}</aside>}

      <main className="view">{props.children}</main>
    </div>
  );
};

export const ViewAside = (props: ViewAsideProps) => {
  return (
    <>
      <ul>
        {/* Nav items */}
        {props.list.map((item, i) => (
          <li
            key={item.id}
            className={item.active ? "active" : undefined}
            onClick={() => props.onSelect(i)}
          >
            <>
              {item.icon ? item.icon : <ReactIcon />}
              <span>{item.name}</span>
            </>
          </li>
        ))}

        {/* Logout button */}
        {"onLogout" in props && (
          <li onClick={() => props.onLogout!()}>
            <LogoutIcon />
            <span>Logout</span>
          </li>
        )}
      </ul>
    </>
  );
};

export const ViewHeader = (props: ViewHeaderProps) => {
  if (props.user !== {}) {
    return (
      <>
        <div className="col">
          <div className="point">
            <img
              src="https://simplisales.com/img/integrations/logo.png"
              alt="Company icon"
              title="Simplisales logo"
              width={24}
              height={26}
            />
            <span data-suffix="Points">{props.user.points}</span>
          </div>
        </div>

        <div className="col">
          <div
            className="theme-btn center"
            onClick={() => props.onSwitchTheme()}
          >
            <ThemeIcon />
          </div>
        </div>

        <div className="col user">
          <div className="avatar">
            <img
              src={require("../../assets/icons/react.svg").default}
              alt={`${props.user.firstName}'s profile`}
              width={40}
              height={40}
            />
          </div>

          <div className="info">
            <span>
              {props.user.firstName} {props.user.lastName}
            </span>
            <span>{props.user.email}</span>
          </div>
        </div>
      </>
    );
  }

  return <></>;
};

export default View;

// Types:

// View
interface ViewProps {
  activeRoute?: string;
  header?: JSX.Element;
  aside?: JSX.Element;
  children: any;
}

// Header
interface ViewHeaderProps {
  user:
    | {
        firstName: string;
        lastName: string;
        email: string;
        profilePicture: string;
        points: number;
      }
    | {
        [name: string]: any;
      };
  onSwitchTheme: () => any;
}

// Aside
interface ViewAsideProps {
  list: Array<{
    id: number;
    name: string;
    icon?: JSX.Element;
    active?: boolean;
  }>;
  onSelect: (id: number) => void;
  onLogout?: () => void;
}
