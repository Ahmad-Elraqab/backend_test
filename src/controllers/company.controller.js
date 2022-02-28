'use strict';

const Company = require('../models/company.model');

exports.findAll = function (req, res) {
    Company.findAll(function (err, staff) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', staff);
        res.send(staff);
    });
};


exports.create = function (req, res) {
    const new_staff = new Company(req.body);

    //handles null error 
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Company.create(new_staff, function (err, staff) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "company added successfully!", data: staff });
        });
    }
};


exports.findById = function (req, res) {
    Company.findById(req.params.id, function (err, staff) {
        if (err)
            res.send(err);
        res.json(staff);
    });
};

exports.findByName = function (req, res) {
    Company.findByName(req.params.name, function (err, staff) {
        if (err)
            res.send(err);
        res.json(staff);
    });
};


exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        Company.update(req.params.id, new Company(req.body), function (err, staff) {
            if (err)
                res.send(err);
            res.json({ error: false, message: 'company successfully updated' });
        });
    }

};


exports.delete = function (req, res) {
    Company.delete(req.params.id, function (err, staff) {
        if (err)
            res.send(err);
        res.json({ error: false, message: 'company successfully deleted' });
    });
};