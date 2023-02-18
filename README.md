# A. Introduction

![image](illus.gif)

### a.1 Usage : next.js + firebase

### a.2 Features

| I   | Features                                                             |
| --- | -------------------------------------------------------------------- |
| 1   | It's a simple to do list, to add, to edit and to delete              |
| 2   | Nevertheless, google account athorization was required               |
| 3   | So, the lists could be actually stored as reminder for the next time |

### a.3 [DEMO](https://to-do-lists-six.vercel.app/)

# B. Getting Started

| I     | SOP                                                     |
| ----- | ------------------------------------------------------- |
| dev   | `yarn` & create your own firebase account -> `yarn dev` |
| build | `yarn build`                                            |

# C. Introduction about the Structure

## file structure

- components
  - auth.js (logic for login)
  - main.js (layout and function for the main page)
- pages
  - \_app.js
  - \_document.js
  - \_index.js (<Auth/> component)
- public
  - fonts
    - ocr-a.ttf (the loading of this font family file was written in global.css)
  - ...
- styles
  - globals.css (src: url('/fonts/ocr-a.ttf') format('truetype');)
  - Home.module.css (css for main.js)
- utilis
  - firebase.js (init, auth, store)
  - firebaseAction.js (the logic to manipulate the firebase)
- .env.local
- .env.production
- jsonconfig.json (for shorting the import's path)
- nex.config.js
- ...

## Data structure in firebase

| Collections | Documents          | Fields            |
| ----------- | ------------------ | ----------------- |
| user's id   | every note in list | {id,name,checked} |
