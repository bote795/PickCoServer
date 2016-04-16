var express = require('express');
var router = express.Router();
var Colors = require('../models/colors/index');

router.route('/colors')
    .get(function(req, res) {
        Colors.all(function(err, data) {
            if(err) {
                return res.send(500, err);
            }
            return res.send(data);
        });
    })
    .post(function(req, res) {
        Colors.create(req, function(err, newColors) {
            if(err) {
                return res.send(500, err);
            }
            return res.json(newColors);
        });
    });
router.route('/colors/:id')
    .put(function(req, res) {
        Colors.put(req, function(err, color) {
            if(err) {
                res.send(err);
            }
            res.json(color);
        });
    })
    .get(function(req, res) {
        Colors.get(req.params.id, function(err, color) {
            if(err) {
                res.send(err);
            }
       		res.json(color);
        });
    })
    .delete(function(req, res) {
        Colors.delete(req.params.id, function(err) {
            if(err) {
                res.send(err);
            }
            res.json('Deleted!');
        });
    });

module.exports = router;
