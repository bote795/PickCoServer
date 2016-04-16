var Colors = require('./Colors');
var Helper = require('../../lib/incomingFilterData');
var fields = ["name","code","bg","types","family","saturation","brightness"];
module.exports = {
	create: function (req, cb) {
	    var newColors = new Colors();
        Helper.retrieveFields(fields,newColors,req.body);
        newColors.save(function(err, newColors) {
            if(err) {
                cb(err);
            }
            cb(null, newColors);
        });
	}, //close create
	get: function (id, cb) {
		Colors.findById(id, function(err, color) {
            if(err) {
                cb(err);
            }
          cb(null, color);
        });
	},
	all: function (cb) {
		Colors.find(function(err, colors) {
            if(err) {
                cb(err);
            }
          cb(null, colors);
        });
	},
	put: function (req, cb) {
		Colors.findById(req.params.id, function(err, color) {
            if(err) {
                cb(err);
            }
        Helper.retrieveFields(fields,color,req.body);
            color.save(function(err, color) {
                if(err) {
                    cb(err);
                }
                cb(null,color);
            });
        });
	},
	delete: function (id, cb) {
		  Colors.remove({
            _id: id
        }, function(err) {
            if(err) {
                cb(err);
            }
        });
	}
} 
