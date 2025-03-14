const express = require('express');
const db = require('./db-config');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


db.run(`CREATE TABLE IF NOT EXISTS First_EMPs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        key_activity TEXT NOT NULL,
        indicators TEXT NOT NULL,
        q1 TEXT NULL,
        q2 TEXT NULL,
        q3 TEXT NULL,
        q4 TEXT NULL,
        hr TEXT NOT NULL,
        fr TEXT NOT NULL
)`, (err) => {
    if(err){
        console.error('Error creating table', err.message);
    }else{
        console.log('Users table is ready');
    }
});

db.run(`CREATE TABLE IF NOT EXISTS First_DPMs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        objective TEXT NOT NULL,
        outputs TEXT NULL,
        indicators TEXT NOT NULL,
        q1 TEXT NULL,
        q2 TEXT NULL,
        q3 TEXT NULL,
        q4 TEXT NULL,
        hr TEXT NOT NULL,
        budget TEXT NOT NULL
)`, (err) => {
    if(err){
        console.error('Error creating table', err.message);
    }else{
        console.log('Users table is ready');
    }
});

//GETS-----------------------------------------------

app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) =>{
        if(err){
            res.status(500).json({error: err.message});
        }
        res.json(rows)
    });
});

app.get('/First_EMPs', (req, res) => {
    db.all('SELECT * FROM First_EMPs', [], (err, rows) =>{
        if(err){
            res.status(500).json({error: err.message});
        }
        res.json(rows)
    });
});


app.get('/First_DPMs', (req, res) => {
    db.all('SELECT * FROM First_DPMs', [], (err, rows) =>{
        if(err){
            res.status(500).json({error: err.message});
        }
        res.json(rows)
    });
});
//-----------------------------------------------------
//POST--------------------------
app.post('/First_DPMs', (req, res) => {
    const { objective, outputs, indicators, q1, q2, q3, q4, budget, hrResources } = req.body;

    if (!objective || !outputs || !indicators || !budget || !hrResources) {
        return res.status(400).json({ error: "All fields are required except Q's" });
    }

    const sql = `INSERT INTO First_DPMs (objective, outputs, indicators, q1, q2, q3, q4, budget, hrResources) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [objective, outputs, indicators, q1, q2, q3, q4, budget, hrResources];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: "Record added...",
            id: this.lastID 
        });
    });
});



app.listen(3000, () =>{
    console.log('Server running on port 3000');
})


