# Checheza Core
## This is the core library for the current Checheza app.

## Instructions on how to compile the checheza app
Abstract:
* Download a copy of the core and the app repos.
* Update the modules for the core project.
* Run the webpack for the core project to create the "core.js" file
* Copy that "core.js" file to the app project's 'www' folder.
* Update the modules & run the webpack for the app project.
* Use Capacitor to compile the app project.  

Detailed Build Instructions:
* Clone a copy of the core project (https://github.com/checheza/checheza-core)
* Clone a copy of the app project (https://github.com/checheza/checheza-app)
* Switch to the main directory of the checheza-core project.
* Update the used modules: Run the following command: yarn install
* Pack the code into 1 file: npm run build.
* This will create a "core.js" file in the root folder of the checheza-core project.  Grab this "core.js" file and copy it into the "www" folder of the checheza-app project (checheza-app/www/core.js).
* Switch to the main directory of the checheza-app project.
* Update the used modules. Run the following command: yarn install
* Now you can use Capacitor to compile the project for your different needs (see below).
 
Capacitor documentation: https://ionic.zone/capacitor/cli
