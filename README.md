# SIMPLE React ToDo App **🛠️**


## Software and packages used:
<hr/>

`Bussiness Logic`
<br><br>
1.axios: 0.21.1<br>
2.lodash: 4.17.21<br>
3.moment: 2.29.1<br>
4.moment-timezone:0.5.33<br>
6.react: 17.0.2<br>
7.react-datepicker:3.8.0<br>
9.react-router-dom:5.2.0<br>
10.react-scripts:4.0.3<br>
<br><br>
`State maganement`
<br><br>
1.react-redux:7.2<br>
2.redux:4.1.0<br>
3.redux-form:8.3.7<br>
4.redux-thunk:2.3.0<br>
<br><br>
`Styling`
<br><br>
1.redux-form-material-ui:4.3.4<br>
2.styled-components:5.3.0<br>
3.node-sass:6.0.0<br>

<br/>

## Installation
<hr/>

1. Create `focustodo` folder on your computer.

2. From inside created folder, pull the repository from github:
```console
git clone https://github.com/junidevs/FOCUSTODO .
```
3. At this moment you should to install node_modules for both directories
```bash
npm install 
```
4.After that you can run project from /client and /server side via: `npm start`

```bash
npm start 
 
```

5. From /server side you should see something like this :

```bash
> server@1.0.0 start 
> json-server -p 3001 -w db.json


  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3001/todos

  Home
  http://localhost:3001

  Type s + enter at any time to create a snapshot of the database
  Watching...
```
6. By default I have attached my test `db.json` file to see some result on initialize before create any task 
<br>

7.Regarding to priority level I have created 3 steps with sorting by default from High Priority to Low Priority:
```bash
High: '! Icon which you can see on below screenshot'
Medium 'Medium'
Low 'Low'
```
<br><br>

8.The last thing is `Create free day` I will describe this process shortly

```bash
Firstly depending on selected date from calendar ,
this date is connected to the other component to add this date to `local storage`
```
After clicking on this button you should see something like that :

![freeDayLayout](https://user-images.githubusercontent.com/52135894/118366054-76a6c300-b59f-11eb-8bdf-6bba954290ed.jpg)
<br>

```bash
After that this saved day is downloaded to our main component to show selected day 
```
9.There you can see my idea for this project
![demonstrateLayout](https://user-images.githubusercontent.com/52135894/118365255-38f46b00-b59c-11eb-9dad-0267430db222.jpg)
