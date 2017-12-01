Feature: Valid Tests feature file

  Scenario: Create course
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    When clerk Create a course "AI" with course code 100000
    Then course "AI" is successfully added

   Scenario: Create Student
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    When clerk create Student "Mudit"
    Then Student "Mudit" is successfully created
     
  Scenario: Delete Course
  	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk Create a course "AI" with course code 100000
    When clerk removes course 100000
    Then Course is Successfully removed
    
   Scenario: Delete Student
  	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    When clerk removes student "Mudit"
    Then Student is Successfully removed
    
   Scenario: Create Course after Deletion
  	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk Create a course "AI" with course code 100000
    And clerk removes course 100000
    When clerk Create a course "AI" with course code 100000
    Then course "AI" is successfully added
    
   Scenario: Create Student after Deletion
  	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk removes student "Mudit"
    When clerk create Student "Mudit"
    Then Student "Mudit" is successfully created again
  
  Scenario: Student Register in course
  	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    And before "End registration" event occurs
    When student "Mudit" register in course 100000
    Then "Mudit" is registered in course code 100000 
    
   Scenario: Student Register in same course after deregistering
   	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    And before "End registration" event occurs
    And student "Mudit" register in course 100000
    And student "Mudit" de-register from course 100000
    When student "Mudit" register in course 100000
    Then "Mudit" is registered in course code 100000 
   
   Scenario: Student Deregister from course
   	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    And before "End registration" event occurs
    And student "Mudit" register in course 100000
    And after "End registration" has occurred
    And before "End De-registration" event occurs
    When student "Mudit" de-register from course 100000
    Then "Mudit" is not registered in course code 100000
    
   Scenario: Student Drop Course
   	Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk create Student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And after "Start Registration" has occurred
    And before "End registration" event occurs
    And student "Mudit" register in course 100000
    And after "End registration" has occurred
    And after "End De-registration" has occurred
    When "Mudit" Drops from course 100000
    Then Course Dropped Successfully message is generated
    
    Scenario: Term has ended
    	Given after "Setup term" has occurred
	    And before "Start Registration" event occurs
	    And clerk create Student "Mudit"
	    And clerk Create a course "AI" with course code 100000
	    And after "Start Registration" has occurred
	    And before "End registration" event occurs
	    And student "Mudit" register in course 100000
	    And after "End registration" has occurred
	    And after "End De-registration" has occurred
	    When after "Term End" has occurred
	    Then "Mudit"'s registered course 100000 is completed
	    