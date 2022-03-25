# Checheza Core
This is the core library for the current Checheza app.

## Instructions on how to compile the checheza app
Abstract:
1. Download a copy of the core and the app repos.
2. Update the modules for the core project.
3. Run the webpack for the core project to create the "core.js" file
4. Copy that "core.js" file to the app project's 'www' folder.
5. Update the modules & run the webpack for the app project.
6. Use Capacitor to compile the app project.  

Detailed Build Instructions:
1. Clone a copy of the core project (https://github.com/checheza/checheza-core)
2. Clone a copy of the app project (https://github.com/checheza/checheza-app)
3. Switch to the main directory of the checheza-core project.
4. Update the used modules: Run the following command: yarn install
5. Pack the code into 1 file: npm run build.
6. This will create a "core.js" file in the root folder of the checheza-core project.  Grab this "core.js" file and copy it into the "www" folder of the checheza-app project (checheza-app/www/core.js).
7. Switch to the main directory of the checheza-app project.
8. Update the used modules. Run the following command: yarn install
9. Now you can use Capacitor to compile the project for your different needs (see below).
 
Capacitor documentation: https://ionic.zone/capacitor/cli
