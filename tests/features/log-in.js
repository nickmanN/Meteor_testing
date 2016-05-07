module.exports = function () {  
 'use strict';
 var name = 'Peter';
 var pass = 1;

	  this.When(/^I click on "([^"]*)" button to sign in$/, function (arg1) {
	    browser.click('//*[@id="react-root"]/div/header/nav/ul/li[4]/a');
	  });

	  this.When(/^see "([^"]*)" to sign in$/, function (arg1) {
	  	var text = 'h2=Just sign in';
	  	browser.waitForVisible(text);
	    expect(browser.getText(text)).toEqual(arg1);
	  });

	  this.Then(/^I click on "([^"]*)" button to submit my data$/, function (arg1) {
		    browser.click('//*[@id="react-root"]/div/div[3]/div/div[1]/form/a');
	  });


  	this.Then(/^See "([^"]*)" area with "([^"]*)" and "([^"]*)" button$/, function (arg1, arg2, arg3) {
	    var title = '.pageTitle=Dashboard', 
		userName = 'h2=' + name,
	    logOutButton = 'i.fa.fa-sign-out';
		
		browser.waitForVisible(logOutButton);

	    expect(browser.getText(title)).toEqual(arg1);
	    expect(browser.getText(userName)).toEqual(name);
	    expect(browser.isExisting(logOutButton)).toEqual(true);
  });

};

// /tests/features/create-widget_steps.js