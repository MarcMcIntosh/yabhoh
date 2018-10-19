# Todo Retrospective

At the start of this week I was asked to spent the whole week writing a [TODOMVC](http://todomvc.com/examples/react/) application.

Here's the project brief I was given,
#### The Task
Build the TodoMVC app as you can see it at http://todomvc.com/examples/react/. Build the app just like it is there, an exact copy. Every feature like adding, removing, filter, URL updates, look and feel, UI behaviour, etc. must match exactly the linked version.

#### The Goal
There are three major achievements for this week.
1. finish this one task
2. plan and track the progress and
3. stay focused on this one task throughout the week.

Also:
+ Do the planning and tracking using a digital tool. Use kanban (or some other method), plan daily (digitally) and be ready to present progress at every point in time.
+ Slice the work to be done in small deliverables, ship and deploy as often as possible.
+ Produce the smallest commits possible.
+ Every change should be a commit.
+ Besides the daily and blog writing and other required meetings there is only this project that you should focus on this week.

#### The Technology
Use the following technologies:
- pure JavaScript, no framework, no libraries
- pure CSS, no CSS framework
- use <script type=module> to load pure JavaScript modules, don't bundle anything
- use ES6 modules no transpiling of any modern JavaScript feature, use what the latest browsers like Chrome provide
- deploy straight from github repo, e.g. using https://rawgit.com/ or straight from github

## How much I got done

#### Tasks from the TodoMVC [app-spec](https://github.com/tastejs/todomvc/blob/master/app-spec.md#functionality)

+ [x] When there are no todos, `#main` and `#footer` should be hidden.
+ [x] New todos are entered in the input at the top of the app.
+ [x] The input element should be focused when the page is loaded, preferably by using the `autofocus` input attribute.
+ [x] Pressing Enter creates the todo, appends it to the todo list, and clears the input. Make sure to `.trim()` the input and then check that it's not empty before creating a new todo.
+ [x] Clicking the checkbox marks the todo as complete by updating its `completed` value and toggling the class `completed` on its parent `<li>`
+ [x] Displays the number of active todos in a pluralized form.
+ [x] Make sure the number is wrapped by a `<strong>` tag.
+ [x] Also make sure to pluralize the `item` word correctly: `0 items`, `1 item`, `2 items`. Example: **2** items left
+ [x] Hovering over the todo shows the remove button (`.destroy`)
+ [x] Your app should dynamically persist the todos to localStorage.
+ [x] If the framework has capabilities for persisting data (e.g. Backbone.sync), use that. Otherwise, use vanilla localStorage.
+ [x] If possible, use the keys `id`, `title`, `completed` for each item.
+ [x] Make sure to use this format for the localStorage name: `todos-[framework]`.

### What I didn't get done
+ [ ] This checkbox toggles all the todos to the same state as itself.
+ [ ] Make sure to clear the checked state after the "Clear completed" button is clicked.
+ [ ] The "Mark all as complete" checkbox should also be updated when single todo items are checked/unchecked. Eg. When all the todos are checked it should also get checked.
+ [ ] Double-clicking the `<label>` activates editing mode, by toggling the `.editing` class on its `<li>`
+ [ ] When editing mode is activated it will hide the other controls and bring forward an input that contains the todo title, which should be focused (`.focus()`).
+ [ ] The edit should be saved on both blur and enter, and the `editing` class should be removed. Make sure to `.trim()` the input and then check that it's not empty.
+ [ ] If it's empty the todo should instead be destroyed. If escape is pressed during the edit, the edit state should be left and any changes be discarded.
+ [ ] Removes completed todos when clicked. Should be hidden when there are no completed todos.
+ [ ] The following routes should be implemented: `#/` (all - default), `#/active` and `#/completed` (`#!/` is also allowed).
+ [ ] When the route changes, the todo list should be filtered on a model level and the `selected` class on the filter links should be toggled.
+ [ ] When an item is updated while in a filtered state, it should be updated accordingly. E.g. if the filter is `Active` and the item is checked, it should be hidden.
+ [ ] Make sure the active filter is persisted on reload.

## What could have gone better

As the project was hosted on github and the turn around time from pushing to publishing could take a minute or two a lot of time was wasted on typos, and syntax errors that would normally be caught with a linter.

The comment log is at the bottom of the page and it shows how often, typos and commits made just to debug something where done.

Given how often this was going to happen I made the early decision to use todomvc's css, if I got the JavaScript side of the app done I could then remove the css and spend endless hours tweaking the style sheets in the browser until it worked again. Thankfully I never got that far.

Honestly, I would normally use a css processor and linter to reduce avoidable mistakes.   

## Commit log

```bash
git log --reverse --pretty=format:"%B" | sed '/^$/d'
```
>Initial commit
Create CHANGELOG.md, add first two tasks
Maybe use github projects
Create index.html
Add hello message
Update README.md with link to spec sheet
Added functionality spec to CHANGELOG.md
Add title tag to index.html
Create app.css
Create app.js
Add css link to index.html
Added script tag to index.html
Added a function to app.js
Added import statement to index.html
Update app.js, export a module
Update app.js
Add code execution
Update index.html
no browser support for default exports
Name function in app.js
Update index.html
Scoped import statement
Removing import statement due to cache
Added package.json
Added todomvc css assets
Copied todomvc css to css directory
Added sudo-code
Added lock file
Add id attribute to section tag
It's good practice
Added hello message
Merge branch 'master' of https://github.com/MarcMcIntosh/todos
Don't use innerHTML
Added heading 'component'
Fixed error with adding textNodes
Fixed error with creatingNodes
Fixed error with creatingNodes
Added the code from index.html to js/app.js
Sourced js/app.js
Fix naming issue: rename header to h1
Remove section tag
Moved pseudo code from app.js to relivant files
Removed pseudo code from app.js
Added one file for each view componenet
Moved header view component to file and imported
Trying to fix issues with resloving files.
Added footer, before it's required data?
ticked of some tasks
Added store functionality
Added localStorage wrapper
Added some veri logic
Passing store methods to partial-views
Miising bracket)
Miising lenght
missing trialing js
missing comma
missing default export
typos
typos
Debuggin
Debuggin
More debugging
Using wrong id is setITem2
Forgot to cal function
Forgot to add storage length
Forgot to missnamed numberOfTodos
Missing spaces
Added todo list item view
Added the main todo list
Added notes to store
Fixed get all command, forgot to parse json.
Exported todoList view, removed unsued param from ListItem
Added list to app.js
Error with exporting
Removed uneeded store refrences
Typo in import statment
Rewrote getall to return an array
Now use array from store.getAll()
Refactored to use on storage key
Counter in footer now used store.getAll
App now uses store.getAll, to decide what to display
Typoe importing store
Forgot to parse todos
Added and event listener to todolist
added checked=completed to footer.js
Debugging stoage listener
Rename label to title
Fixed check box
store now emits storage events
Now updates with storage
replaced fullstop with comma
forgot to add argument to function
Miss named root in footer
Storage can returning null handles in getAll
Long variable names are a liabilty
Long variable names are a liabilty
Removed logging
Refactoring and added a remove mothod
More missnameing of values
Added sorting by most recent to store
body should update properly now
Missing bracket
Remove un-needed event listener
Remove un-needed event listener
removed listener from app as it would repeataldy append
Fixing the dom append logic
Removed duplicated function
Remove child nodes before updating
Added better logic to dom update
Typo
Added event listener back in
Update CHANGLOG.md
debugging dom
debugging dom
Typo in removeItem
Added removeItem function to button
Fixed typo in onClick
converted onlick function to string
moved the adding of onclick to app.js
typos
changed method to document method
debuggging
debuggging
debuggging
debuggging typos
debuggging
Typo changed destory to destroy
Still not working?
Still not working?
moved removeItem function to buttion view
onclick not being called
added removeItem to window scope
removeItem is in global scope
change id to string
Using event listeners for deletion method
Missing closing bracket
braces
Missing closing brace in store
for .. in now for .. of loop
misspeled destroy
Fixed sorting of todos
Fixing input, to clear after entered text
Fixing input interactivity
renamed input.keyup to onkeyup
Update CHANGLOG.md
checkboxes and buttons use values rather than ids
Added toggle completede method in store
Added completed toggle event listener
Fixing toggle
Typos
Debugging store
for got to remove item ffrom array
Removed console stamtenets
Update CHANGLOG.md
