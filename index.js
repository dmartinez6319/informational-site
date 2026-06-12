const express = require("express")
const app = express()
const path = require("path")

const PORT = process.env.PORT || 3000;

app.get(["/","/about"], (req,res) => {

    res.sendFile(path.join(__dirname,"/about.html"))
})

app.get("/contact", (req,res) => {

    res.sendFile(path.join(__dirname,"/contact.html"))
})

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname,"/404.html"))
})

app.listen(PORT,(err) => {

    if (err) {throw(err)}

    console.log("Server Listening")

})

// Before Express Below

// const http = require("http")
// const fs = require("fs").promises

// const server = http.createServer(async (req,res) => {

//     const baseURL = `https://${req.headers.host}` // localhost:3000
//     const url = new URL(req.url,baseURL)
//     console.log(req.url) // test
//     let pathName = url.pathname // /test

//     if (pathName === "/") {
//         pathName = "/about"
//     }

//     try {
//         const data = await fs.readFile(`./${pathName}.html`)
//         res.writeHead(200,{'Content-Type' : 'text/html'})
//         res.end(data)
//     } catch (e) {
//         console.error(e)
//         res.statusCode = 404
//         try {
//             const errorDataPage = await fs.readFile('./404.html')
//             res.setHeader('Content-Type', 'text/html')
//             res.end(errorDataPage)
            
//         } catch (e) { // If error page fails
//             res.setHeader('Content-Type', 'text/plain')
//             res.end("Error")
//         }
//     }
    

//     })

// server.listen(3000,()=>{
//     console.log("Listening")

// })

// console.log(process.env.NODE_ENV) // Upper Pascal Case is env var