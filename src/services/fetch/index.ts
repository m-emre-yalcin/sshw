// Set fetch configurations
const $fetch = async (query: string, options = {} as any) => {

  // get token
  const token = localStorage.getItem('token')

  // Set options
  if (!options.method) {
    options.method = "POST"
  }

  //
  if (!options.headers) {
    options.headers = {}
  }

  // ql default content-type
  if (!("Content-Type" in options.headers)) {
    options.headers = {
      "Content-Type": "application/json",
    }
  }

  // set authorization if exists
  if (token) {
    options.headers = {
      "Authorization": `Bearer ${token}`,
    }
  }

  // convert graphql queries into json
  if (!options.body && query) {
    options.body = JSON.stringify({ query })
  }

  // log the results by defaut
  if (!("debug" in options)) {
    options.debug = true
  }

  // 
  return fetch('https://simplicityhw.cotunnel.com/graphql', options).then(async res => {
    const json = await res.json()

    if (options.debug) {
      console.log(json)
    }

    if ("errors" in json) {
      throw new Error(`Error: ${json.errors[0].message}`)
    }

    return json
  })
    .catch(err => {
      alert(err)

      throw err
    })
}

export default $fetch