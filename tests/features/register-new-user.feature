Feature: Register new User

 As a visitor to the site,
 so that I can pass registration on website,
 And to become registered user.

 Background:
    Given I am on the site

 @register_user
 Scenario: Visitor make registration
    When I click on "Sign up" button
    And see "Almost there, just sign up"
    Then I click on input field "Your username/email" 
    And enter my username or email
    Then I click on input field "Your password"
    And enter password
    Then I click on input field "Confirm your password"
    And enter same password again
    Then I click on "Sign Up" button to submit form
    Then "Dashboard" and "Admin" and "Sign Out" buttons appear


# /tests/features/register-new-user.feature