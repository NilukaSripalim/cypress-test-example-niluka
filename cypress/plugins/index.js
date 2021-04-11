/*
 *   Copyright (c) 2021 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content.
 */
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  const { playwright } = require('../../config/playwright')

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'webkit' && browser.name == 'safari') {
      // auto open devtools
      launchOptions.args.push('--auto-open-devtools-for-tabs')
      const existing = launchOptions.args.find(
        arg => arg.slice(0, 23) === '--remote-debugging-port',
      )
    }
})

  on('task', {
    async openSafari() {
      return await playwright()
    },
  })
}
