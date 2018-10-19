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
Generate using
```bash
git log --reverse --pretty=format:"> %aD: %B" \
  | sed '/^$/d' \
  >> ../yabhoh/public/Agile/TodoRetrospective.md
```
> Mon, 15 Oct 2018 09:40:31 +0200: Initial commit
> Mon, 15 Oct 2018 09:46:27 +0200: Create CHANGELOG.md, add first two tasks
Maybe use github projects
> Mon, 15 Oct 2018 09:58:33 +0200: Create index.html
Add hello message
> Mon, 15 Oct 2018 10:02:04 +0200: Update README.md with link to spec sheet
> Mon, 15 Oct 2018 10:41:13 +0200: Added functionality spec to CHANGELOG.md
> Mon, 15 Oct 2018 10:46:42 +0200: Add title tag to index.html
> Mon, 15 Oct 2018 10:47:30 +0200: Create app.css
> Mon, 15 Oct 2018 10:48:28 +0200: Create app.js
> Mon, 15 Oct 2018 10:50:01 +0200: Add css link to index.html
> Mon, 15 Oct 2018 12:19:38 +0200: Added script tag to index.html
> Mon, 15 Oct 2018 12:22:39 +0200: Added a function to app.js
> Mon, 15 Oct 2018 13:36:52 +0200: Added import statement to index.html
> Mon, 15 Oct 2018 13:39:48 +0200: Update app.js, export a module
> Mon, 15 Oct 2018 13:40:57 +0200: Update app.js
> Mon, 15 Oct 2018 13:44:53 +0200: Add code execution
> Mon, 15 Oct 2018 13:48:32 +0200: Update index.html
> Mon, 15 Oct 2018 13:52:09 +0200: no browser support for default exports
> Mon, 15 Oct 2018 13:57:06 +0200: Name function in app.js
> Mon, 15 Oct 2018 13:57:35 +0200: Update index.html
> Mon, 15 Oct 2018 13:59:21 +0200: Scoped import statement
> Mon, 15 Oct 2018 14:04:10 +0200: Removing import statement due to cache
> Mon, 15 Oct 2018 14:23:32 +0200: Added package.json
> Mon, 15 Oct 2018 14:31:38 +0200: Added todomvc css assets
> Mon, 15 Oct 2018 14:33:25 +0200: Copied todomvc css to css directory
> Mon, 15 Oct 2018 15:28:18 +0200: Added sudo-code
> Mon, 15 Oct 2018 15:28:50 +0200: Added lock file
> Mon, 15 Oct 2018 15:45:01 +0200: Add id attribute to section tag
It's good practice
> Mon, 15 Oct 2018 15:50:31 +0200: Added hello message
> Mon, 15 Oct 2018 15:50:41 +0200: Merge branch 'master' of https://github.com/MarcMcIntosh/todos
> Mon, 15 Oct 2018 16:00:28 +0200: Don't use innerHTML
> Mon, 15 Oct 2018 16:33:36 +0200: Added heading 'component'
> Mon, 15 Oct 2018 16:36:11 +0200: Fixed error with adding textNodes
> Mon, 15 Oct 2018 16:38:10 +0200: Fixed error with creatingNodes
> Mon, 15 Oct 2018 16:41:43 +0200: Fixed error with creatingNodes
> Tue, 16 Oct 2018 11:16:58 +0200: Added the code from index.html to js/app.js
> Tue, 16 Oct 2018 11:17:36 +0200: Sourced js/app.js
> Tue, 16 Oct 2018 11:29:38 +0200: Fix naming issue: rename header to h1
> Tue, 16 Oct 2018 11:31:22 +0200: Remove section tag
> Tue, 16 Oct 2018 11:55:24 +0200: Moved pseudo code from app.js to relivant files
> Tue, 16 Oct 2018 11:57:27 +0200: Removed pseudo code from app.js
> Tue, 16 Oct 2018 12:43:22 +0200: Added one file for each view componenet
> Tue, 16 Oct 2018 12:43:47 +0200: Moved header view component to file and imported
> Tue, 16 Oct 2018 12:49:37 +0200: Trying to fix issues with resloving files.
> Tue, 16 Oct 2018 16:58:49 +0200: Added footer, before it's required data?
> Wed, 17 Oct 2018 09:37:17 +0200: ticked of some tasks
> Wed, 17 Oct 2018 11:36:03 +0200: Added store functionality
> Wed, 17 Oct 2018 13:43:12 +0200: Added localStorage wrapper
> Wed, 17 Oct 2018 13:59:14 +0200: Added some veri logic
> Wed, 17 Oct 2018 14:03:46 +0200: Passing store methods to partial-views
> Wed, 17 Oct 2018 14:05:42 +0200: Miising bracket)
> Wed, 17 Oct 2018 14:08:34 +0200: Miising lenght
> Wed, 17 Oct 2018 14:13:59 +0200: missing trialing js
> Wed, 17 Oct 2018 14:16:08 +0200: missing comma
> Wed, 17 Oct 2018 14:18:16 +0200: missing default export
> Wed, 17 Oct 2018 14:20:55 +0200: typos
> Wed, 17 Oct 2018 14:22:45 +0200: typos
> Wed, 17 Oct 2018 14:26:47 +0200: Debuggin
> Wed, 17 Oct 2018 14:36:00 +0200: Debuggin
> Wed, 17 Oct 2018 14:41:55 +0200: More debugging
> Wed, 17 Oct 2018 14:44:11 +0200: Using wrong id is setITem2
> Wed, 17 Oct 2018 15:09:10 +0200: Forgot to cal function
> Wed, 17 Oct 2018 15:10:47 +0200: Forgot to add storage length
> Wed, 17 Oct 2018 15:13:16 +0200: Forgot to missnamed numberOfTodos
> Wed, 17 Oct 2018 15:14:18 +0200: Missing spaces
> Thu, 18 Oct 2018 12:06:05 +0200: Added todo list item view
> Thu, 18 Oct 2018 12:06:40 +0200: Added the main todo list
> Thu, 18 Oct 2018 12:07:29 +0200: Added notes to store
> Thu, 18 Oct 2018 12:08:33 +0200: Fixed get all command, forgot to parse json.
> Thu, 18 Oct 2018 12:10:59 +0200: Exported todoList view, removed unsued param from ListItem
> Thu, 18 Oct 2018 12:14:52 +0200: Added list to app.js
> Thu, 18 Oct 2018 12:18:07 +0200: Error with exporting
> Thu, 18 Oct 2018 12:20:33 +0200: Removed uneeded store refrences
> Thu, 18 Oct 2018 12:22:27 +0200: Typo in import statment
> Thu, 18 Oct 2018 12:37:51 +0200: Rewrote getall to return an array
> Thu, 18 Oct 2018 12:39:05 +0200: Now use array from store.getAll()
> Thu, 18 Oct 2018 12:46:19 +0200: Refactored to use on storage key
> Thu, 18 Oct 2018 12:48:50 +0200: Counter in footer now used store.getAll
> Thu, 18 Oct 2018 12:50:12 +0200: App now uses store.getAll, to decide what to display
> Thu, 18 Oct 2018 12:58:27 +0200: Typoe importing store
> Thu, 18 Oct 2018 13:03:28 +0200: Forgot to parse todos
> Thu, 18 Oct 2018 13:32:53 +0200: Added and event listener to todolist
> Thu, 18 Oct 2018 13:34:53 +0200: added checked=completed to footer.js
> Thu, 18 Oct 2018 13:37:54 +0200: Debugging stoage listener
> Thu, 18 Oct 2018 13:41:06 +0200: Rename label to title
> Thu, 18 Oct 2018 13:47:02 +0200: Fixed check box
> Thu, 18 Oct 2018 13:56:35 +0200: store now emits storage events
> Thu, 18 Oct 2018 14:20:16 +0200: Now updates with storage
> Thu, 18 Oct 2018 14:23:08 +0200: replaced fullstop with comma
> Thu, 18 Oct 2018 14:24:25 +0200: forgot to add argument to function
> Thu, 18 Oct 2018 14:26:02 +0200: Miss named root in footer
> Thu, 18 Oct 2018 14:31:42 +0200: Storage can returning null handles in getAll
> Thu, 18 Oct 2018 14:37:26 +0200: Long variable names are a liabilty
> Thu, 18 Oct 2018 14:38:47 +0200: Long variable names are a liabilty
> Thu, 18 Oct 2018 14:41:54 +0200: Removed logging
> Thu, 18 Oct 2018 15:01:45 +0200: Refactoring and added a remove mothod
> Thu, 18 Oct 2018 15:08:35 +0200: More missnameing of values
> Thu, 18 Oct 2018 15:29:02 +0200: Added sorting by most recent to store
> Thu, 18 Oct 2018 15:36:22 +0200: body should update properly now
> Thu, 18 Oct 2018 15:41:55 +0200: Missing bracket
> Thu, 18 Oct 2018 15:43:44 +0200: Remove un-needed event listener
> Thu, 18 Oct 2018 15:50:46 +0200: Remove un-needed event listener
> Thu, 18 Oct 2018 16:39:55 +0200: removed listener from app as it would repeataldy append
> Thu, 18 Oct 2018 16:59:45 +0200: Fixing the dom append logic
> Thu, 18 Oct 2018 17:01:42 +0200: Removed duplicated function
> Thu, 18 Oct 2018 17:08:58 +0200: Remove child nodes before updating
> Thu, 18 Oct 2018 17:11:27 +0200: Added better logic to dom update
> Thu, 18 Oct 2018 17:13:10 +0200: Typo
> Thu, 18 Oct 2018 17:15:00 +0200: Added event listener back in
> Thu, 18 Oct 2018 17:29:45 +0200: Update CHANGLOG.md
> Thu, 18 Oct 2018 18:25:33 +0200: debugging dom
> Thu, 18 Oct 2018 18:29:17 +0200: debugging dom
> Fri, 19 Oct 2018 11:15:21 +0200: Typo in removeItem
> Fri, 19 Oct 2018 11:15:49 +0200: Added removeItem function to button
> Fri, 19 Oct 2018 11:32:12 +0200: Fixed typo in onClick
> Fri, 19 Oct 2018 11:36:20 +0200: converted onlick function to string
> Fri, 19 Oct 2018 11:46:54 +0200: moved the adding of onclick to app.js
> Fri, 19 Oct 2018 11:50:00 +0200: typos
> Fri, 19 Oct 2018 11:55:30 +0200: changed method to document method
> Fri, 19 Oct 2018 11:56:57 +0200: debuggging
> Fri, 19 Oct 2018 12:02:22 +0200: debuggging
> Fri, 19 Oct 2018 12:04:39 +0200: debuggging
> Fri, 19 Oct 2018 12:09:01 +0200: debuggging typos
> Fri, 19 Oct 2018 12:13:13 +0200: debuggging
> Fri, 19 Oct 2018 12:15:10 +0200: Typo changed destory to destroy
> Fri, 19 Oct 2018 12:19:40 +0200: Still not working?
> Fri, 19 Oct 2018 12:21:24 +0200: Still not working?
> Fri, 19 Oct 2018 12:25:02 +0200: moved removeItem function to buttion view
> Fri, 19 Oct 2018 12:28:08 +0200: onclick not being called
> Fri, 19 Oct 2018 12:31:55 +0200: added removeItem to window scope
> Fri, 19 Oct 2018 12:34:49 +0200: removeItem is in global scope
> Fri, 19 Oct 2018 12:39:22 +0200: change id to string
> Fri, 19 Oct 2018 14:07:48 +0200: Using event listeners for deletion method
> Fri, 19 Oct 2018 14:09:20 +0200: Missing closing bracket
> Fri, 19 Oct 2018 14:14:20 +0200: braces
> Fri, 19 Oct 2018 14:17:27 +0200: Missing closing brace in store
> Fri, 19 Oct 2018 14:20:03 +0200: for .. in now for .. of loop
> Fri, 19 Oct 2018 14:22:03 +0200: misspeled destroy
> Fri, 19 Oct 2018 14:30:36 +0200: Fixed sorting of todos
> Fri, 19 Oct 2018 14:55:09 +0200: Fixing input, to clear after entered text
> Fri, 19 Oct 2018 14:58:55 +0200: Fixing input interactivity
> Fri, 19 Oct 2018 15:08:00 +0200: renamed input.keyup to onkeyup
> Fri, 19 Oct 2018 15:11:22 +0200: Update CHANGLOG.md
> Fri, 19 Oct 2018 15:17:04 +0200: checkboxes and buttons use values rather than ids
> Fri, 19 Oct 2018 15:28:49 +0200: Added toggle completede method in store
> Fri, 19 Oct 2018 15:33:05 +0200: Added completed toggle event listener
> Fri, 19 Oct 2018 15:35:24 +0200: Fixing toggle
> Fri, 19 Oct 2018 15:38:47 +0200: Typos
> Fri, 19 Oct 2018 15:45:08 +0200: Debugging store
> Fri, 19 Oct 2018 15:47:40 +0200: for got to remove item ffrom array
> Fri, 19 Oct 2018 15:49:59 +0200: Removed console stamtenets
> Fri, 19 Oct 2018 15:51:59 +0200: Update CHANGLOG.md
