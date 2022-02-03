lsof -i tcp:3000
kill -9 PID

        i need to be able to update user profile links
        i need user proifle to show on dashboard/profile page to be updated and artistts page 
        i need to set up auth 
        i need to know why info wont show

// use this an dauth.js in config
// use jwt review
// need to add auth stuff back in  and have done by thursday?

HOME PAGE 
---shows sample of music to download and entries of each week
---if logged in, will show band profile link, log out and view winners page at the navbar and show the homepage with the songs submitted to the comp and give you the ability to play the song and vote on the song
---if not logged in, will show band profile link to bands page, login/signup and view winners page at the navbar

LOGIN/SIGNUP
---login will ask for usenrame, password
---signup will ask for username, password, email and if an artist
---if an artist, it will ask to fill in the stuff under attist profile info and add this to a band page, you will then be lead to the homescreen where you can submit and view/play other songs

ARTISTS
---if signed in as an artist, it will show a box under the music sample on the homepage askign if you want to submit a song
---when you click this, it will ask you to upload a mp3 or wav file
---when this is added it will show on the bands page and the home page along with other entries from other artists

WINNERS
---this will show all winners of each week with info on the artist and the songs
 (this will grow as each competition ends)

QUERIES
---if i want find an artist, look up theiur name or by artist id 
if a non-musician signs up as a user, that doesnt need to be shown anywhere apart from on the backend  to see users so maybe a query for all users?
---if a musician signs up as a user, that would need to go to the artist db and get added to the artists/band profile page








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
