important features
------------------

- move done tasks to the bottom
    - use two lists: one for pending and one for done
    - order pending items by original order
    - order done items by done date desc
    - pending -> done:
        + record done date
        + record original ordering index
    - done -> pending:
        + re-insert at original ordering index
- prettier input box
- rearrange items
    - ideally with drag and drop
    - or at least with up-down buttons
- edit date
    - ideally using a calendar selector (see jquery ui)
    - at least with plain text input

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

more features
-------------

- export in ikog format
- import from ikog format
- flag as important
