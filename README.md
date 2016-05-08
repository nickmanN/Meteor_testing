# Meteor_testing
Please follow this steps to run tests.

* First you need to install [Meteor] (https://www.meteor.com/install).

* Then you should have [Node.js](https://nodejs.org/en/download/package-manager/) to be installed. It should be v.4+ but not 6.

* Next, install [Chimp](https://chimp.readme.io/docs/installation). You should have [Oracle JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) v1.8+ installed in your system.

`$ npm install -g chimp`

* Copy "tests" folder to root directory of your project (It should be *starter-kit-react* project).

* Add special Meteor package to your project:
`$ meteor add xolvio:backdoor`

To run exact scenario plase change tag `@some-text` to `@watch` in a appropreate `*.feature`file.

In **first** terminal tab run `$ meteor` in **second** tab run `$ chimp --ddp=http://localhost:3000 --watch --path=tests`

