Aufbau example app
==================

A simple [Aufbau](http://github.com/mhkeller/aufbau) app to show how to make app modules. You would include it in your Aufbau `apps.json` list with the following json.

````js
{
  "displayName": "Example",
  "package": {
    "aufbau-example-app": "mhkeller/aufbau-example-app"
  },
  "indexPath": "index.html"
}
````

If our package lived on npm, you would use normal npm package declaration with the version number.

````js
  // ... 
  "package": {
    "aufbau-example-app": "^1.0.0"
  },
  // ...
}
````

We've put an icon at `icons/icon.png`, so we don't have to specify one in our app declaration. If we wanted to override this icon with one we package up with Aufbau, you would put that icon in the Aufbau `icons/` folder and add a value to the app declaration with the file name such as `"icon": "new-icon.png"`.

### Testing more complex apps

If you wanted to use CommonJs modules, you'll run into the problem that your app is hard to test on its own. The easiest way I've found is to run it from within Aufbau by linking the two packages locally. Inside your app repo run `npm link`. Inside the `www/` folder in Aufbau, run: `npm link <package-name>`. The app will now appear in the `www/node_modules/` folder. Add your info to the Aufbau `apps.json` and do `npm start`.