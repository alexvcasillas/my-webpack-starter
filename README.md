# My Webpack Starter

http://alexvcasillas.github.io/my-webpack-starter/

**My Webpack Starter** is a ready to use entry point to start developing *Javascript* Apps with *Webpack*.

### What does My Webpack Starter is useful for?

**My Webpack Starter** is useful to watch and compile changes while you develop your App or just to build and bundle your *Javascript* files.

### How do I get started with My Webpack Starter?

First of all, it would be necessary to have (cpt. obvious' wisdom) `webpack` installed onto your computer if you still don't have it. You can make this happen running the following command in your console: `npm install webpack -g`. This will make *webpack* command to be available globaly (everywhere).

To get started using **My Webpack Starter** you only need to clone this repository and run `npm install` to fetch all the *dependencies* which are the following:

* babel-core: ^6.17.0
* babel-loader: ^6.2.5
* babel-plugin-transform-es2015-modules-commonjs: ^6.16.0
* babel-preset-es2015: ^6.16.0
* jshint: "^2.9.3
* jshint-loader: "^0.8.3
* webpack: "^1.13.2
* node-libs-browser: "^1.0.0
* strip-loader: ^0.1.2

After you have downloaded all *dependencies* you only need to run two single commands to get started:

`npm run development`: This command will run *Webpack* in development mode, watching file changes while you work and linting all possible errors in your code.

`npm run production`: This command will run *Webpack* in production mode, which means it will grab your *App's Entry Point* and start transpiling it into valid `ECMAScript5` and including all your `imports` into one single bundled file.

### How do I change my App's Entry Point?

By default, **My Webpack Starter** has the *App's Entry Point* at `app/app.js`. To change this entry point, you will have to open `webpack.config.js` and update the following line:

`entry: "./public/javascript/app.js", // Entry Point of the App`

Replace the path with your desired entry point of the App. Take note that this should be a relative position from the `webpack.config.js`.

### What if I don't want My Webpack Starter lint my files before compiling?

To achieve this (I'm not sure why wouldn't you want a not-linted code to prevent bugs or issues with new features) you will have to open `webpack.config.js` and just comment or remove (better to comment, just in case for future needs) the following code:

```
preLoaders: [
  {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jshint-loader'

  }
],
```

### What if I want to add more "cutting edge" features to my Javascript and be able to compile them?

Well, if you want this you will need to install new dependencies with `npm install --save-dev <awesome-babel-preset-package>` and then, go to `webpack.config.js` and edit the following line:

`presets: ['es2015'] // Presets for the Babel-Loader`.

This line is an `Array` of all the presets you want *Webpack* to compile with to make the transpiling magic on your code, so, for example, if we wanted `es2016` and `es2017` presets for our code, the line will look like:

`presets: ['es2015', 'es2016', 'es2017'] // Presets for the Babel-Loader`.

But that won't be all, you also need to go to the `.babelrc` file in the root of the project and modify it. The first time you open this file the code should look like (if is not, you have a problem):

`{ "presets": [ "es2015" ] }`

We need to do the same process as we did for our `webpack.config.js` and your `.babelrc` file should ended looking like this:

`{ "presets": [ "es2015", "es2016", "es2017" ] }`

And that would be everything you should now about **Adding Cutting Edge Features** to your Javascript.
