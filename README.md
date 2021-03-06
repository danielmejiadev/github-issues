# Github-Issues

An application to search github issues on react repository by using autocomplete.

The autocomplete has a default debounce time to avoid multiple requests and a minimum of 3 characters to search.

Live app running on github pages [https://danielmejiadev.github.io/github-issues/](https://danielmejiadev.github.io/github-issues/)

## Considerations

The input and list are navigable using the keyboard.
  - Using `tab` and `shift+tab`, the user should be able to move focus to and from the different issues.
    - With the cursor in the input, pressing the `tab` key should move focus to the first item with the default browser focus style.
    - Subsequent presses of the "tab" key should focus the next item in the list.
    - Pressing the `shift+tab` keys should focus the previous item in the list.
    - Pressing the `shift+tab` key when the first item is focused should focus
      the input again.
    - Mousing over other list items should highlight them while the keyboard-
      focused item remains focused.

## Run Application

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn deploy`

Builds the app for production and deploy the minified files using github pages.
