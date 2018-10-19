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
