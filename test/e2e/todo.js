var conf = require('../../nightwatch.conf.BASIC.js')

module.exports = {
  'Demo test todo-list': function (browser) {
    browser
      .url('http://localhost:8080')   
      .waitForElementVisible('body')  
     var conf = require('../../nightwatch.conf.BASIC.js')

module.exports = {
  'Demo test todo-list': function (browser) {
    browser
      .url('http://localhost:8080')   // visit the url
      .waitForElementVisible('body') // wait for the body to be rendered
      .pause(1000)
      .setValue('#task', 'Xixi 1  todo !')
      .click('#add')
      .setValue('#task', 'Xixi 2  todo !')
      .click('#add')
      .assert.containsText('.total-items', 'contains 2')
      .pause(1000)
      .click('tbody:first-child .edit-btn')
      .setValue('tbody:first-child form input', 'edit')
      .click('tbody:first-child .save-btn')
      .pause(2000)
      .assert.containsText('.total-items', 'contains 2')
      .pause(1000)
      .click('tbody:first-child .delete-btn')
      .assert.containsText('.total-items', 'contain 1')
      .end()
  }
}

      .end()
  }
}