const express = require('express');
const db = require('./db-config');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());



db.run(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
)`, (err) => {
    if(err){
        console.error('Error creating table', err.message);
    }else{
        console.log('Users table is ready');
    }
});

db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, 
            ['Samukelo', 'sam@gmail.com', 'sam123'], 
            (err) => {
                if(err){
                    console.error('Error creating user', err.message);
                }else{
                    console.log('User is ready');
                }
        });


app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) =>{
        if(err){
            res.status(500).json({error: err.message});
        }
        res.json(rows)
    });
});

app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password

        db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, 
            [name, email, hashedPassword], 
            function (err) {
                if (err) {
                    return res.status(500).json({ error: err.message });
                }
                res.status(201).json({ message: "User created successfully", userId: this.lastID });
            }
        );
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(3000, () =>{
    console.log('Server running on port 3000');
})

