# Expenses dashboard

``` How long did it take? ```
 It took me approx. 26 hours.

```Which part was the hardest to implement?```
 To come up with a design to display data in a "meaningful" way.

```What functionalities are you most proud of?```
 I am happy that I was able to solve the technical challenges. I am also happy that I had time to come up with my own design for the dashboard.

## Overview
This project consists of the following parts:
* Front-end is a single page application implemented with React and based on [react-create-app](https://create-react-app.dev/). Placed in `client/` folder with main entry [index.js](./client/src/index.js)
* Server side is a fork of [Pleo's frontend challenge](https://github.com/pleo-io/frontend-challenge) repo. Placed in `pleo-code` folder as dependency with Git subtree of [my fork](https://github.com/odGit/frontend-challenge), with the following modifications:
  - Express server is running on PORT 5000, because PORT 3000 is used by react-create-app's scripts
  - Added watch functionality to the server with [chokidar](https://github.com/paulmillr/chokidar)
  - Modified `route.post('/:id', ...)` to be able delete a comment. 
  ![git diff](https://user-images.githubusercontent.com/1571406/74107120-302d1200-4b6d-11ea-8ec8-a62f6576f926.png)
  For more details see this [diff](https://github.com/pleo-io/frontend-challenge/commit/8bb5afe6338b8a0eb250088e509ef04dd8d115df#diff-207fd77a94bbacd4bca19c659e83d4c9R52)
  
## Scripts

The server is running on [http://localhost:5000](http://localhost:5000) and client on [http://localhost:3000](http://localhost:3000) 
1. To install all project dependencies:
  ```
    yarn run init
  ```

2. To start both `server && client`:
  ```
    yarn run start
  ```
3. To start independently

the `server`: 
  ```
    yarn run start:api
  ```
  or the `client`:
  ```
    yarn run start:client
  ```
4. There are as well the following linting scripts:
  ```
    yarn run lint
    yarn run lint:fix
  ```
5. To remove all project installed dependencies:
  ```
    yarn run clear:all
  ```

## Technical choices

```React & React Hooks: ```  I chose these for my implementation because I enjoy using React, and after version 16.8 Redux is a part of React Hooks - useReduce for global state management. For me, this makes development very rapid and joyful.

```Radium: ``` A set of tools to manage inline styling of React elements by [Formidable](https://formidable.com/open-source/radium/).

```Code conventions: ```  Every code base needs a JavaScript style guide, linter, and formatter. To minimize setup time for prototypes, demos or projects like this, I prefer to use [Standard JS](https://standardjs.com/)

```Folder structure: ```
Inspired by [this article](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) about Fractal folder structure.


            client/
            ├── public/
            └── src/
                ├── Context.jsx
                ├── components/
                │   ├── atoms/
                │   ├── App.jsx
                │   ├── Card.jsx
                │   ├── card/
                │   ├── Collection.jsx
                │   ├── ControlsBar.jsx
                │   ├── controlsBar/
                │   ├── ReceiptModal.jsx
                │   └── receiptModal/
                ├── ducks/
                ├── enums/
                ├── index.jsx
                └── utils/




*  **public** contains _index.html_ file and `<script src>` assets. They automatically get copied to build/ by create-react-app scripts
* **src.Context.jsx** initializes the redux with useReducer and useContext.
* **src.components** contains components and a folder containing all bits and pieces for it. For example, the _Card.jsx_ component is in the _components/_ folder alongside the _card/_ folder.
* **src.components.atoms** have shared components, like Button, Label, etc.
* **src.ducks** contains state, actions and reducers.
* **src.enums** holds constants used for colors, date formating, currency rates, etc.
* **src.utils** has utilities like your API wrapper, helper functions.
* **src.index.jsx** renders the app.