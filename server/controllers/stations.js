const stations = require('../models').stations;

module.exports = {
    /*create(req,res) {
        return Stations
        .create({
            stationId: req.body.station_id,
        })
        .then(stations => res.status(201).send(stations))
        .catch(error => res.status(400).send(error));
    },*/

    list(req,res) {
        return stations
        .all()
        .then(stations => res.status(200).send(stations))
        .catch(error => res.status(400).send(error));
    },
};
