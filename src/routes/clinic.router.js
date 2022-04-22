const express = require('express');
const clinicModel = require('../models/clinic.model');
const clinicService = require('../services/clinic.service');
const clinicRouter = express.Router();

const service = new clinicService();

clinicRouter.post('/clinic', async (req, res) => {
  try {
    const clinic = clinicModel(req.body);
    const data = await service.createClinic(clinic);
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

clinicRouter.get('/', async (req, res, next) => {
  try {
    const data = await service.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

clinicRouter.get('/:clinicId', async (req, res, next) => {
  try {
    const { clinicId } = req.params;
    const data = await service.showClinic(clinicId);
    res.status(302).json(data);
  } catch (error) {
    next(error);
  }
});

clinicRouter.put('/:clinicId', async (req, res, next) => {
  try {
    const { clinicId } = req.params;
    const { clinic_name, nit, address, pet } = req.body;
    const data = await service.editClinic(
     clinic_name,
     nit,
     address,
     pet
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

clinicRouter.delete('/:clinicId', async (req, res, next) => {
  try {
    const { clinicId } = req.params;
    const data = await service.removeClinic(clinicId);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = clinicRouter;