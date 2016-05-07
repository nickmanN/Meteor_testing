module.exports = function () {  
 'use strict';
 var name = 'Peter';
 var pass = 1;

	  this.Given(/^I am on the site$/, function () {
	    browser.url('http://localhost:3000');
	  });

	  this.When(/^I click on "([^"]*)" button$/, function (arg1) {
	    browser.click('//*[@id="react-root"]/div/header/nav/ul/li[3]/a');
	  });

	  this.When(/^see "([^"]*)"$/, function (arg1) {
	  	var text = 'h2=Almost there, just sign up';
	  	browser.waitForVisible(text);
	    expect(browser.getText(text)).toEqual(arg1);
	  });

	  this.Then(/^I click on input field "([^"]*)"$/, function (arg1) {
	    //browser.click('//*[@id="react-root"]/div/div[3]/div/div[1]/form/input[1]');
		browser.click('input[placeholder="Your username/email"]');

	  });

	  this.Then(/^enter my username or email$/, function () {
	    browser.setValue('input[placeholder="Your username/email"]', name);
		//browser.timeouts('implicit', 5000);
	  });

	  this.Then(/^enter password$/, function () {
	    browser.setValue('input[placeholder="Your password"]', pass);
	  });

	  this.Then(/^enter same password again$/, function () {
	    browser.setValue('input[placeholder="Confirm your password"]', pass);
	  });
	 

	   this.Then(/^I click on "([^"]*)" button to submit form$/, function (arg1) {
	    browser.click('//*[@id="react-root"]/div/div[3]/div/div[1]/form/a');
 	  });


	  this.Then(/^"([^"]*)" and "([^"]*)" and "([^"]*)" buttons appear$/, function (arg1, arg2, arg3) {
	    var button1 = 'a*=Dashboard', button2 = 'a*=Admin', button3 = 'a*=Sign Out', button4 = '*=sometext';
		//	could be error "Username already exists. [403]"
		//	//*[@id="react-root"]/div/div[3]/div/div[1]/span/div
		browser.waitForVisible(button3);

	    expect(browser.isExisting(button1)).toEqual(true);
	    expect(browser.isExisting(button2)).toEqual(true);
	    expect(browser.isExisting(button3)).toEqual(true);
	  });


};

// /tests/features/register-new-user.js