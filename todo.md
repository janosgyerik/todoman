initial implementation
----------------------

- basic classes
    - model
    - one-line view
    - collection
- basic ui
    - bs3
    - input box to add items
    - list of items
    - stored in local storage -> still remembered on page reload

simple ui features
------------------

- mark / unmark done on click
- edit title on double-click
- flag important

detailed view and editing
-------------------------

- detailed view
- open detailed view
- edit details
    - set / change date
    - add / edit tags

grouping by target date
-----------------------

- tab controller
- dynamic tabs: based on available distinct dates + null
    - all, anytime
        - sorted by date
    - today, tomorrow
    - up to 1 week, name like Tuesday, Wednesday, Thursday
    - beyond 1 week, name like April 1, April 2, April 2
- highlight late tasks
- the later the task, the more intense the highlight
