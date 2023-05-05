# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

.navigation {
height: 60px;
width: 100%;
display: flex;
align-items: center;
position: relative;
padding: 0.5rem 0rem;
background-color: rgba($color: #000000, $alpha: 0.7);
color: black;
box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
z-index: 10;
}

.searchinput {
padding: 4px 10px;
border-radius: 6px;
border: navajowhite;
color: white;
background-color: rgba($color: #000000, $alpha: 0.5);
}

.navigation button {
text-transform: uppercase;
padding: 4px 14px;
border: navajowhite;
color: white;
background-color: rgb(40, 148, 203, 0.9);
}

.brand-name {
text-decoration: none;
color: lightblue;
font-size: 1.3rem;
margin-left: 1rem;
font-size: 25px;
}

.navigation-menu {
margin-left: auto;
}

.navigation-menu ul {
display: flex;
padding: 0;
}

.navigation-menu li {

    list-style-type: none;
    margin: 0 1rem;

}

.navigation-menu li a {

    text-decoration: none;
    display: block;
    width: 100%;
    color: lightcyan;

}

.hamburger {

    width: 40px;

    cursor: pointer;

    position: absolute;
    top: 50%;
    right: 25px;
    transform: translateY(-50%);
    display: none;

}

// @media screen and (max-width: 768px) {
// .hamburger {
// display: block;
// }

// .navigation-menu ul {
// display: none;

// }

// .navigation-menu ul {
// // navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
// position: absolute;
// top: 60px;
// left: 0;
// // stacks the li tags vertically
// flex-direction: column;
// // makes menu span full height and width
// width: 100%;
// height: calc(100vh - 77px);
// // background-color: white;
// border-top: 1px solid black;
// background-color: black;

// }

// .navigation-menu li {
// // centers link text and strips off margin
// text-align: center;
// margin: 0;

// }

// .navigation-menu li a {
// color: black;
// // increases the surface area of the anchor tag to span the full width of the menu
// width: 100%;
// padding: 1.5rem 0;
// color: white;
// }

// .navigation-menu li:hover {
// background-color: #111111;
// }
// }

@media screen and (max-width: 768px) {
.navigation-menu ul {
// navigation menu is positioned to start 60px from the top of the document (which is directly below the navbar)
position: absolute;
top: 60px;
left: 0;
// stacks the li tags vertically
flex-direction: column;
// makes menu span full height and width
width: 100%;
height: calc(100vh - 77px);
background-color: white;
border-top: 1px solid black;
}

    .navigation-menu li {
        // centers link text and strips off margin
        text-align: center;
        margin: 0;
    }

    .navigation-menu li a {
        color: black;
        // increases the surface area of the anchor tag to span the full width of the menu
        width: 100%;
        padding: 1.5rem 0;
    }

    .navigation-menu li:hover {
        background-color: #eee;
    }

}

@media screen and (max-width: 768px) {
.navigation-menu ul {
/_ previous styles _/
display: none;
}
}

@media screen and (max-width: 768px) {
.navigation-menu.expanded ul {
display: block;
}
}
