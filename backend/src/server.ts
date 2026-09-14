import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({
    message: 'Nit Med API'
  })
})

app.listen(PORT, () => {
  console.log(`Nit Med API running on http://localhost:${PORT}`)
})