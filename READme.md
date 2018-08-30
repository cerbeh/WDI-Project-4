
![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# GA WDI-34  Project #4: A MERN stack Application (Pair Project)
## 'kendo.io'


[Heroku Link](https://kendo-io.herokuapp.com/)
(Login with username: martin and password: martin)

kendo.io is a MERN stack application that has been designed and developed by Martin Allgood and Linda Lê over 9 days.
To stand out from our cohort, we wanted to create an app that would track a user’s progress and variety of practice in kendo (Japanese sword-fighting). The user would input the kind of training and the duration of their practice and in return they are presented with the data in chart form reflecting their progress over time. As part of a pair, we planned extensively and appropriately managed our time and tasks.

#### App development

Using Balsamiq we wanted to have a clear image of what we wanted to build so that we could be more efficient with my time when it came to design. My main aim here was to have a responsive app and therefore we designed the app mobile-first.

![Balsamiq Wireframing](./readme/wireframing.png)

## Chart js
Chart js is a visualisation library that displays and creates charts using the canvas element from HTML5. We used a wrapper called reactchartjs2 that lets us create these various charts as react components. wet makes the library easier to use with React.

## BMI Calculator

![Screenshot of BMI calculator](./readme/bmi.png)
BMI calculator was a feature we decided to implement on the front-end which is populated with the user's information.

## React Timeline
 Whilst this felt like an easy win when we had first implemented it, it turned out to be more difficult to style based off of the documentation in the end but eventually it complied and we are both satisfied with how it had turned out.

## Wins
We were very proud that the app was made to be fully responsive.

## Blockers

![Screenshot of blockers](./readme/hopes-and-dreams.png)

There were a few features that we had tried to implement but for it not to be the most suitable for the app and therefore we had to scrap the feature entirely. These included a calendar feature which would be populated with the practices. Unfortunately the calendar API only permitted for you to put in the practice as an event but not view the details.

####Overcoming problems
One of the problems we had when working with Chart.js was the data needed to be delivered to it in a very specific way in order for it to be rendered in Chart.js. The main problem we had with this was how we were storing our data in the model. Inside the user model was an embedded sessions schema to record every session, creating a large array with objects of every session recorded.

![image](./sessions.png)

This meant that in order to render the data accurately in the way Chart.js wanted there was a chain of functions on the front-end manipulating this data in order to format it properly. However, with the help of lodash, we were able to move a lot of the logic that went in to these functions to the backend and have the model deliver a virtual with the data better formatted.

![image](./practiced-disciplines.png)

This was really useful as it also meant later in the project when we wanted to use a different type of chart we already had the data in a more useful format and so the logic to render it in a different chart wasn't difficult to write.

![image](./virtual.png)

###Coding Journey

#####3rd Party Components
We used both Chart.js and React-Timeline for the project and the implementation was difficult. We struggled initially to get something from Chart.js on the page and so we moved on to another feature, which was the timeline. Implementation of the timeline was quite simple and gave us a quick win on the day as we had been struggling with Charts for a while it was nice to be able to get this feature to work.

#####Back End
Initially we had intended to have the Sessions schema embedded. However we ran in to some problems with working on out how to update the array in Mongoose so briefly we moved the sessions to their own Model. This made it simpiler for updating sessions however it would mean that if a user deleted themselves their sessions would remain. We were able to tidy this code up and move the logic back into the User model and embed the schema.

## More time
If we had more time we would have wanted to implement a map which would display all of the local kendo venues with times and dates.
Design-wise, we wanted the statistics page to have all of the relevant charts on a sidebar as opposed to the user having to scroll to see the various different charts.
