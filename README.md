## Marvel Heroes App

#### Requisites
  - A public marven api key (https://developer.marvel.com/)

#### How to run
  `REACT_APP_ENV_KEYS_MARVEN={yourApiKey} yarn start`

#### Features

  - List heroes and fetch more
  - Filter heroes
  - Select and see details
  - Deep links (bookmark any hero detail)


#### Techstack
  
  - React.js
  - Redux
  - Thunk

#### Technical notes

  - There are a few comments with `@NOTE` (explanation of code) and `@TODO` (things that would be nice to have)
  - Example of the global state

  ```
  {
    nameStartsWith: '', // search text filter
    limit: 10, // Fetch limit per request
    list: {
      data: [1011334, 1011335], // Ids of the current list
      loading: false,
      error: null,
    },
    details: { // Every hero record fetched
      1011334: {
        data: { /*Hero data...*/ },
        loading: false,
        error: false
      },
      1011335: {
        data: { /*Hero data...*/ },
        loading: false,
        error: false
      }
    }
