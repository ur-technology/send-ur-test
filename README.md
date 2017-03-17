# ur-money-queue-processor

## Install global dependencies (skip if already installed)
`npm install -g typings node-inspector pm2`

## Install local dependencies
* Run the following:
```script
git clone git@github.com:ur-technology/send-ur-test.git
cd send-ur-test
npm install
```
* Next, you'll need to install and run go-ur locally, see https://github.com/ur-technology/go-ur

## Initial configuration
* Create local copy of environment file: `cp production.env .env`
* Edit .env and change value of NODE_ENV && FIREBASE_PROJECT_ID if desired

## Run locally under pm2
* Run this: `pm2 npm -- start`

## Debug Locally
* Run this: `npm run-script debug`

## deploy to staging or production
* TBD
