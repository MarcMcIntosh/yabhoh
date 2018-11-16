# Scrum
<!--- Structure taken from https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf#zoom=100 --->

*Scrum: a framework to support teams in complex product development. Scrum consists of Scrum Teams and their associated roles, events, artefacts, and rules, as defined in the Scrum GuideTM.* -- [scrum glossary](https://www.scrum.org/scrum-glossary)

Most of this page will be datelining the above in order to understand more about scrum mostly by paraphrasing the [guide](https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf),

Scrum is practised in many industries as a framework for managing developing products by suing the knowledge gained from experience and observations (aka [empiricism](https://www.merriam-webster.com/dictionary/empiricism)) to optimize predictability and control risk during the process of development (process control) by utilising an iterative (repeating) and incremental approach, similar to [Kaizen](https://en.wikipedia.org/wiki/Kaizen) management theory. Both of which focus on transparency, inspection, and adaptation in-order to continually improve and produce value.


### What's the point?
Synthesising workflows, the advantage scrum has over one of it's counter parts like [scientific management theory](https://en.wikipedia.org/wiki/Scientific_management]) of scrum is that it allows teams to adapt rapidly to changing demands/designs and restrictions (hence the name agile?).

<!-- indroduce the topic
scum is a frame work https://www.scrumguides.org/scrum-guide.html#definition -->
<!-- ## Theory -->

## Scrum Values

In the srum guide there are [five core values of scrum](https://scrumorg-website-prod.s3.amazonaws.com/drupal/2018-05/ScrumValues-Tabloid.pdf) these are:

+ __Courage__ Scrum team members have courage to do the right hing and work on tough problems.
+ __Focus__ Everyone focuses on the work of the sprint and goals of the scrum team.
+ __Commitment__ People personally commit to achieving the goals of the scrum team.
+ __Respect__ Scrum team members respect each other to be capable, independent people.
+ __Openness__ The scrum team and it's shareholders agree to be open about all the work and the challenges with performing the work.

Which are could be confused with the values stated in the [agile manifesto](http://agilemanifesto.org/)
+ __Individuals and interactions__ over processes and tools.
+ __Working software__ over comprehensive documentation.
+ __Customer collaboration__ over contract negotiation.
+ __Responding to change__ over following a plan.

From a software developer point of view that later makes more sense as it's domain specific, although I would have to state good documentation helps understand how something works (or is intended to work) and how to it supposed to be used.

<!--
### Twelve Principles
To further muddy waters there are twelve principles. these kind of relate to xp is agile different?

Customer satisfaction through early and continuous software delivery
Accommodate changing requirements throughout the development process
Frequent delivery of working software
Collaboration between the business stakeholders and developers throughout the project
Support, trust, and motivate the people involved
Enable face-to-face interactions
Working software is the primary measure of progress
Agile processes to support a consistent development pace
Attention to technical detail and design enhances agility
Simplicity
Self-organizing teams encourage great architectures, requirements, and designs
Regular reflections on how to become more effective

+ __Customer satisfaction through early and continuous software delivery__ – Customers are happier when they receive working software at regular intervals, rather than waiting extended periods of time between releases.
+ __Accommodate changing requirements throughout the development process__ – The ability to avoid delays when a requirement or feature request changes.
+ __Frequent delivery of working software__ – Scrum accommodates this principle since the team operates in software sprints or iterations that ensure regular delivery of working software.
+ __Collaboration between the business stakeholders and developers throughout the project__ – Better decisions are made when the business and technical team are aligned.
+ __Support, trust, and motivate the people involved__ – Motivated teams are more likely to deliver their best work than unhappy teams.
+ __Enable face-to-face interactions__ – Communication is more successful when development teams are co-located.
Working software is the primary measure of progress – Delivering functional software to the customer is the ultimate factor that measures progress.
+ __Agile processes to support a consistent development pace__ – Teams establish a repeatable and maintainable speed at which they can deliver working software, and they repeat it with each release.
+ __Attention to technical detail and design enhances agility__ – The right skills and good design ensures the team can maintain the pace, constantly improve the product, and sustain change.
+ __Simplicity__ – Develop just enough to get the job done for right now.
+ __Self-organizing teams encourage great architectures, requirements, and designs__ – Skilled and motivated team members who have decision-making power, take ownership, communicate regularly with other team members, and share ideas that deliver quality products.
+ __Regular reflections on how to become more effective__ – Self-improvement, process improvement, advancing skills, and techniques help team members work more efficiently.
-->


## Roles

The value from the guide consistently mention the scrum team, a team is made up of three distinct roles, the  __product owner__, the __development team__ and the __scrum master__. The product owner is the person in charge of generating value from the efforts of their team, this is directed by writing and prioritising a backlog (list of items to be done) from which the the development team works from. The development team work on tasks from the backlog in order and work towards the next incremental release of the product. The scum master oversees and guides the scrum process, ensuring good communication and organisation thought the team.

## Events
<!-- https://www.scrumguides.org/scrum-guide.html#events -->
Most if not all events in scrum revolve around the the sprint, a sprint is the work cycle in which the development team starts and finishes work on an incremental release this usually lasts from two weeks to one month. The stages of a sprint including the run-up and run-down events consists of __planning__, the sprint it self, __daily scrum meetings__, __review__, __retrospective__.

+ __Sprint planning__ in short this is where the work load for the sprint is calibrated/selected from the backlog.
+ __Daily scrum meetings__ happen during the sprint, this is when the development team discuss the current progress of the current sprint along with individual activities.
+ __Sprint Review__ after the sprint the backlog to updated to reflect the progress of the sprint and/or new requirements.
+ __Retrospective__ the team reflect on the sprint to find potential improvements that can be made for the next sprint.

Once these events / stages have occurred the cycle is ready to start again.


## Artefacts

__Product Backlog__ the list for everything that is need for the product ordered by priority and detail. The more detailed an item is the higher the priority. these details include a description, order (requirements if related to other items), a time estimate, and value such as a user story.
__Sprint Backlog__ a subset of the product backlog that the developers work on for the duration of a sprint, the items on this list will be the items that the daily scrum meetings will be discussing along with potential improvements.
__Increment__ An increment is the sum of all of the completed tasks, every increment should deliver additional value.
