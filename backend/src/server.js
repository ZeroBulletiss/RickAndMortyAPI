const app = require('./app')
const port = 3333

app.listen(port, (err) => err ? console.log("server run") : console.log('server sucess'))