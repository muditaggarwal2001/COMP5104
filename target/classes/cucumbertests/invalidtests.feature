Feature: Invalid test feature file

  Scenario: Remove non existing student
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    When clerk removes student "Mudit"
    Then student doesn't exist error message is generated

  Scenario: Remove non existing course
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    When clerk removes course 2
    Then Course doesn't exist error message is generated

  Scenario: Create Redundant Course
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    When clerk Create a course "AI" with course code 100000
    Then create course "AI" with course code 1000000 genrates error

  Scenario: create course late
    Given after "Setup term" has occurred
    And after "Start Registration" has occurred
    When clerk Create a course "AI" with course code 100000
    Then Late error message is generated
	
  Scenario: create Student late
    Given after "Setup term" has occurred
    And after "Start Registration" has occurred
    When clerk create Student "Mudit"
    Then Clerk is late error message is generated

  Scenario: Student takes non-existent course
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And after "Start Registration" has occurred
    When student "Mudit" register in course 100000
    Then Course doesn't exist error message is generated

  Scenario: Student Registering in course early
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    When student "Mudit" register in course 100000
    Then Student not allowed error message is shown

	Scenario: Student De-Registering in course early
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    When student "Mudit" de-register from course 100000
    Then Student not allowed error message is shown
    
	Scenario: Student De-registers from non-registered course
		Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    When student "Mudit" de-register from course 100000
    Then Student not registered error message is generated
    
  Scenario: Student De-registers from course late
  	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    And before "End registration" event occurs
    And student "Mudit" register in course 100000
    And after "End registration" has occurred
    And after "End De-registration" has occurred
    When student "Mudit" de-register from course 100000
    Then Deregister deadline has passed error message is generated

	Scenario: Student redundant registering in course
		Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    And before "End registration" event occurs
    And student "Mudit" register in course 100000
    When student "Mudit" register in course 100000
    Then Already registered error message is generated

	Scenario: Student redundant De-registering in course
		Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    And before "End registration" event occurs
    And student "Mudit" register in course 100000
    And student "Mudit" de-register from course 100000
    When student "Mudit" de-register from course 100000
    Then Student not registered error message is generated

	Scenario: Student Registration in course late
		Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    And after "End registration" has occurred
    When student "Mudit" register in course 100000
    Then registration deadline has passed error message is generated
