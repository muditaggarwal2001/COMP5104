Feature: Use Case Dependencies

  Scenario: S4 sequence as of Totem
    Given after "Setup term" has occurred
    And before "Start Registration" event occurs
    And clerk Create a course "AI" with course code 100000
    And clerk create Student "Mudit"
    And clerk removes course 100000
    And clerk removes student "Mudit"
    And clerk Create a course "AI" with course code 100000
    And clerk create Student "Mudit"
    And clerk Create a course "ML" with course code 100001
    And clerk create Student "Maddy"
    And after "Start Registration" has occurred
    And before "End registration" event occurs
    And student "Mudit" register in course 100000
    And student "Maddy" register in course 100001
    And student "Maddy" de-register from course 100001
    And student "Maddy" register in course 100001	
    And student "Mudit" register in course 100001
    And after "End registration" has occurred
    And student "Mudit" de-register from course 100000
    And after "End De-registration" has occurred
    And "Mudit" Drops from course 100001
    When after "Term End" has occurred
    Then "Maddy"'s registered course 100001 is completed
