import express,{Request,Response} from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
const port = 3000

const corsMiddleware = cors()
app.use(corsMiddleware)

app.get('/', (req:Request, res:Response) => {
  let helloMessaage = 'Hello Wor111!!'
  res.send(helloMessaage)
})
app.post('/todo',(req:Request, res:Response)=>{})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})