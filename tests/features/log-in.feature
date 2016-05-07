Feature: Log in as existed user

 As a visitor to the site,
 I can login and get to the registered users area.

 Background:
    Given I am on the site

 @log_in_user
 Scenario: Visitor login to registered area
    When I click on "Sign in" button to sign in
    And see "Just sign in" to sign in
    Then I click on input field "Your username/email" 
    And enter my username or email
    Then I click on input field "Your password"
    And enter password
    Then I click on "Sign in" button to submit my data
    And See "DASHBOARD" area with "Name" and "Log out" button


# /tests/features/log-in.feature