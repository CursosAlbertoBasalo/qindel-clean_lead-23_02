# Practice

## 1 Activities and Browsing

```gherkin
Feature: Create an activity
  As an organizer
  I want to create an activity with a name, description, date, location, price, age restriction and capacity and quorum limits
  So that I can offer it to participants
Scenario: Create an activity with valid inputs
  Given I am an organizer
  When I create an activity with name "Yoga class", description "Yoga class for beginners", date "2020-01-01", location "Ghent", price "10", age restriction "18+", capacity "10", quorum "5"
  Then the activity is created

Feature: Create an activity edition
  As an organizer
  I want to create multiple editions of the same activity with different dates, locations or prices
  So that I can accommodate more participants
Scenario: Create an activity edition with valid inputs
  Given I am an organizer
  When I create an activity edition with date "2020-01-02", location "Ghent", price "10"
  Then the activity edition is created

Feature: Browse activities
  As a participant
  I want to browse activities by age restriction, location or between dates
  So that I can find something that interests me
Scenario: Browse activities by age restriction
  Given I am a participant
  When I browse activities by age restriction "18+"
  Then I see the activities with age restriction "18+" in the list
```

#### Patterns

- [ ] Prototype
- [ ] Builder
- [ ] Factory Method
- [ ] Strategy

## 2 Enrollments and Payments

```gherkin
Feature: Create an enrollment
  As a participant
  I want to reserve for enrollments for myself or others in an activity
  So that I can secure my place
Scenario: Create an enrollment with valid inputs
  Given I am a participant Jane Doe
  When I create an enrollment for activity "Yoga class" for myself
  Then the enrollment is created
Scenario: Create an enrollment with invalid inputs
  Given I am a participant Jane Doe
  When I create an enrollment for activity canceled "Yoga class" for myself
  Then the enrollment is not created

Feature: Cancel an enrollment
  As a participant
  I want to cancel my enrollment in an activity if it is free or not confirmed yet
  So that I can change my mind without losing money
Scenario: Cancel an enrollment with valid inputs
  Given I am a participant
  When I cancel an enrollment for activity "Yoga class" in status "pending"
  Then the enrollment is canceled
Scenario: Not Cancel an enrollment with valid inputs
  Given I am a participant
  When I cancel an enrollment for activity "Yoga class" in status "confirmed"
  Then the enrollment is not canceled

Feature: Get a web url (slug) for each activity
  As a participant
  I want to get a web url (slug) for each activity
  So that I can share it with my friends
Scenario: Get a web url (slug) for each activity with valid inputs
  Given I am a participant
  When I get a web url (slug) for each activity for activity "Yoga class"
  Then the web url (slug) is "yoga-class"
```

#### Patterns

- [x] Bridge (Enrollment and IdGenerator)
- [x] Proxy (cancel enrollment)
- [x] Decorator (slug)
