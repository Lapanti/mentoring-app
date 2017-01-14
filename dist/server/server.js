"use strict";
var express = require("express");
var path = require("path");
var agreements_1 = require("./agreements");
var app = express();
app.get('/api/agreement/:id', function (req, res) {
    agreements_1.getById(req.params.id)
        .then(function (agreement) { return res.json(agreement); })["catch"](function (err) { return res.status(404).json(err); });
});
// This is an endpoint returning similar data as FUM (Futurice User Management system)
// to get the correct kind of data for the frontend until real integration can be done
app.get('/api/sampleusers', function (req, res) {
    res.json([{
            email: "lauri.lavanti@futurice.com",
            first_name: "Lauri",
            last_name: "Lavanti"
        },
        {
            email: "juho.vaha-herttua@futurice.com",
            first_name: "Juho",
            last_name: "Vähä-Herttua"
        },
        {
            email: "pekka.neuvo@futurice.com",
            first_name: "Pekka",
            last_name: "Neuvo"
        }]);
});
app.use(express.static(path.join(__dirname, '..', 'public', 'assets')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    /* tslint:disable no-console */
    console.log("Server listening on " + PORT);
    /* tslint:enable no-console */
});
