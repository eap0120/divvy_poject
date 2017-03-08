const stationsController = require('../controllers').stations;

module.exports = (app) => {
    app.get('/api',(req,res) => res.status(200).send({
        message: 'Welcome to Tools API',
    }));

    app.get('/api/stations',stationsController.list);
};