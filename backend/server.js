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
    const { objective, outputs, indicators, q1, q2, q3, q4, budget, hr } = req.body;

    if (!objective || !outputs || !indicators || !budget || !hr) {
        return res.status(400).json({ error: "All required fields must be filled except Qs" });
    }

    const sql = `INSERT INTO First_DPMs (objective, outputs, indicators, q1, q2, q3, q4, budget, hr) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [objective, outputs, indicators, q1 || null, q2 || null, q3 || null, q4 || null, budget, hr];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: "Record added successfully",
            id: this.lastID 
        });
    });
});
//PUT------------------------------------------------------
app.put('/First_DPMs/:id', (req, res) => {
    const { id } = req.params;
    const { objective, outputs, indicators, q1, q2, q3, q4, budget, hr } = req.body;

    if (!id) {
        return res.status(400).json({ error: "ID is required for updating a record" });
    }

    const sql = `UPDATE First_DPMs 
                 SET objective = ?, outputs = ?, indicators = ?, q1 = ?, q2 = ?, q3 = ?, q4 = ?, budget = ?, hr = ? 
                 WHERE id = ?`;

    const params = [objective, outputs, indicators, q1 ?? null, q2 ?? null, q3 ?? null, q4 ?? null, budget, hr, id];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json({ message: "Record updated successfully", changes: this.changes });
    });
});
//DELETE-------------------------------------
app.delete('/First_DPMs/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "ID is required to delete a record" });
    }

    const sql = `DELETE FROM First_DPMs WHERE id = ?`;

    db.run(sql, [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (this.changes === 0) {
            return res.status(404).json({ error: "Record not found" });
        }

        res.json({ message: "Record deleted successfully", deletedId: id });
    });
});






app.listen(3000, () =>{
    console.log('Server running on port 3000');
})


