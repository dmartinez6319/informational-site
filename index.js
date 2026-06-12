const http = require("http")
const fs = require("fs").promises

const server = http.createServer(async (req,res) => {

    const baseURL = `https://${req.headers.host}` // localhost:3000
    const url = new URL(req.url,baseURL)
    console.log(req.url) // test
    let pathName = url.pathname // /test

    if (pathName === "/") {
        pathName = "/about"
    }

    try {
        const data = await fs.readFile(`./${pathName}.html`)
        res.writeHead(200,{'Content-Type' : 'text/html'})
        res.end(data)
    } catch (e) {
        console.error(e)
        res.statusCode = 404
        try {
            const errorDataPage = await fs.readFile('./404.html')
            res.setHeader('Content-Type', 'text/html')
            res.end(errorDataPage)
            
        } catch (e) { // If error page fails
            res.setHeader('Content-Type', 'text/plain')
            res.end("Error")
        }
    }
    

    })

server.listen(3000,()=>{
    console.log("Listening")

})