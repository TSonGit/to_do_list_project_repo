const sqlite3 = require('sqlite3').verbose(); //new
const path = require('path'); //new
const express = require('express');
const { name } = require('ejs');
const app = express();

//Sets up the view for port 3000.
app.set('view engine', 'ejs');

//Serves static files from the public folder.
app.use(express.static('public'));
//For .post requests.
app.use(express.urlencoded({ extended: true }));
//Path to Database.
const dbPath = './DBeaver/to-do-persistence-DB';

// Opens the database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Opens the app in localhost3000;
app.get('/to-do_list', (req, res) => {
    const sqlQuery =
    `SELECT *
     FROM TaskInfo
    `;

    db.all(sqlQuery, [], (err, sqlResult) => {
        if (err) {
            console.log("Error attempting sqlQuery.")
            return res.status(500).send('Error retrieving data from database');
        }

        if (sqlResult) {
            // console.log(sqlResult);
            res.render('list_display');
        }
    });
});

//Adds task to db.
app.post('/add_task', (req, res) => {
    const {task_name, task_desc, task_stat, due_date} = req.body;
    //Inserts information into db.
    const addTaskQuery = 
    `INSERT INTO TaskInfo ("Task_Name", "Task_Description", "Task_Status", "Due_Date")
     VALUES ("${task_name}", "${task_desc}", "${task_stat}", "${due_date}")
    `;

    db.run(addTaskQuery, [], function (err) {
        if (err) {
            console.error('Error adding task:', err.message);
            return res.status(500).send('Error adding task.');
        }
    });
    // res.redirect('/to-do_list');
    console.log('ran the post.')
});


// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});