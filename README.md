## Getting Started
This plugin requires Grunt `^0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jsass --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jsass');
```

## The "jsass" task

### Overview
In your project's Gruntfile, add a section named `jsass` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jsass: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

## Options

#### jsDest
Type: `String`
Default value: same as dest but with `.scss` replaced with `.js`

If set the js output files will be saved here.

### global
Type: `String`
Default value: "sassVars"
* Global namespace in browser enviroments.

#### namespace
Type: `String`
Default value: ``

namespace to prepend to all variable names in scss file

#### prependModule
Type: `Boolean`
Default value: `false`

To prepend module name to varible names in scss file

#### headers
Type: `Boolean`
Default value: `true`

Output module names as heads in scss file

#### template
Type: `Boolean`
Default value: `true`

Path to custom template file
if true it uses the default template