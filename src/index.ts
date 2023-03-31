import express from 'express'
import router  from './routes/checklists'

const app = express()
app.use(express.json())

app.use('/checklists',router)

app.listen(3000, () => {
    console.log("Server Started - Success!")
})
