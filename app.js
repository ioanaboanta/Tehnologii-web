const express = require('express')
const app = express()

app.get("/",(req,res))=>{
	console.log("Responding to root route")
	res.send("Hello from Root")
})

app.get("/users",(req,res)=>{
var user1 = {firstName: "Carla",lastName:"Pop"}
res.json(user1)
	res.send("Nodemon auto updates when I save this file ")
}
})




app.listen(3003,"Server is up and listening on 3003...")
})