# Kanban: in-brief

As complicated as the [wikipedia](<https://en.wikipedia.org/wiki/Kanban_(development)>) article would make it seem. A Kansan can be implemented with some sticky notes a pen and enough space to put the notes on.

The layout is a table, with stage along the y axis with one Colum representing a unique stage columns and the x axis representing priority level (the high up the higher the priority), as the following table illustrates.

| todo | in progress | done |
| :---: | :---: | :---:|
| foo | | |
| bar | | |

Once the tasks / sticky-notes have been prioritised, the next stage is doing the work required to move a task along. In this case doing what is required to move foo in the in-progress phase.
| todo | in progress | done |
| :---: | :---: | :---: |
| bar | foo | |

Once foo is done, then the requirements to move bar over to in progress should be fulfilled. In theory using a kanban with the tasks resulting from a [Mikado](/Agile/MikadoMethod) session should allow a large project / activity to be broken down into series of tasks that can be approached in a linear fashion.

## More info
I've kept this post short, but hanbanize.com has a more detailed [article](https://kanbanize.com/kanban-resources/getting-started/what-is-kanban/) that includes the history and philosophy of kanban.
