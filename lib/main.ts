/// <reference path="../typings/index.d.ts" />

import * as dotenv from 'dotenv';
import * as log from 'loglevel';
import * as _ from 'lodash';
import {WalletModel} from './wallet';

if (!process.env.NODE_ENV) {
  dotenv.config(); // if running on local machine, load config vars from .env file, otherwise these come from heroku
}

log.setDefaultLevel(process.env.LOG_LEVEL || "info")

log.info(`starting with NODE_ENV ${process.env.NODE_ENV} and FIREBASE_PROJECT_ID ${process.env.FIREBASE_PROJECT_ID}`);

let fromAddress = "0x4f904265e1ee4660ec24d26e646e9db3376d6e9f";
let fromAddressSecretPhrase = "pact quick orbit squeeze flat";
let fromAddressSalt = "-KJn47TvHAlfQocDX_ES";

let toAddress = "0xd4f6af892aa766626b1bd8a7068883e723955a80";
let toAddressSecretPhrase = "hen syrup weather place rebuild";
let toAddressSalt = "-KJnRTuL8A1ZdfVvwAbv";

let userIdSalt = "xxx";

WalletModel.generate(fromAddressSecretPhrase, fromAddressSalt).then((data: any) => {
  let wallet: WalletModel = new WalletModel(data);
  if (wallet.getAddress() !== fromAddress) {
    return Promise.reject('incorrect secret phrase');
  }
  return wallet.sendRawTransaction(toAddress, 123);
}).then((urTransaction: any) => {
  log.info('sent transaction', urTransaction)
}, (error: any) => {
  log.info('unexpected error', error);
});

process.on('SIGTERM', () => {
  log.info(`Exiting...`);
  process.exit(0);
});
