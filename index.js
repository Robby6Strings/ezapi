const express = require("express")
const app = express()

app.get("/", (req, res) => res.json({ message: "Welcome to this new API!" }))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
