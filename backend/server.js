import express from 'express';
// import todos from './routers/todos'
const app = express();

//middleware

// app.use()

//api end-points
// app.use(todos)
app.get('/', (req, res) => {
    res.status(200).end("connected")
})

app.listen(2000, () => {
    console.log("server running......")
})