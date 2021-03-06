const express = require('express');


const app = express();

app.use(express.json());
const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0, 
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sallu',
            email: 'sally@gmail.com',
            password: 'pineapple',
            entries: 0, 
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send('this is working');
})

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {
    res.json('success');
}   else {
        res.status(400).json("error logging in");
    }


})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})


/*
/ --> res = this is working
/signin --> POST  success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image --> PUT --> user

*/