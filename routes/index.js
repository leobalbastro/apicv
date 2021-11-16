const bioRouter = require('./bioRouter')
const contactRouter = require('./contactRouter')
const languageRouter = require('./languageRouter')
const skillRouter = require('./skillRouter')
const portfolioRouter = require('./portfolioRouter')
const worxkpRouter = require('./workxpRouter')


function routerAPI(app){
    app.use('/api/bio', bioRouter)
    app.use('/api/contact', contactRouter)
    app.use('/api/language', languageRouter)
    app.use('/api/skills', skillRouter)
    app.use('/api/portfolio', portfolioRouter)
    app.use('/api/worxkpRouter', worxkpRouter)
}

module.exports = routerAPI;