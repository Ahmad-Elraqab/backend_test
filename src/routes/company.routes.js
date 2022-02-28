const express = require('express')
const router = express.Router()
const companyController = require('../controllers/company.controller');

// Retrieve all staff
router.get('/', companyController.findAll);

// Create a new staff
router.post('/', companyController.create);

// Retrieve a single staff with id
router.get('/:id', companyController.findById);

// Retrieve a single staff with name
router.get('/name/:name', companyController.findByName);

// Update a staff with id
router.put('/:id', companyController.update);

// Delete a staff with id
router.delete('/:id', companyController.delete);

module.exports = router