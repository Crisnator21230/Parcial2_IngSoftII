const   clinicModel = require('../models/clinic.model');
const Boom = require('@hapi/boom');

class ClinicService {
  async createClinic(clinic) {
    clinic.save();
    return clinic;
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(clinicModel.find());
      }, 3000);
    });
  }

  async showClinic(clinicId) {
    return clinicModel.findById({ _id: clinicId }).then((clinicFind) => {
      if (!clinicFind) throw Boom.notFound('No se encontró la clinica');
      return clinicFind;
    });
  }

  async editClinic(clinicId,clinic_name, nit, address, pet) {
    return clinicModel.findByIdAndUpdate(
      { _id: clinicId },
      { clinic_name, nit, address, pet }
    ).then((clinicFind) => {
      if (!clinicFind)
        throw Boom.notFound(
          'No se encontró la clinica'
        );
    });
  }

  async removeClinic(clinicId) {
    return clinicModel.findById({ _id: clinicId }).then(
      (clinicFind) => {
        if (!clinicFind) throw Boom.notFound('No se encontró la clinica');
        return clinicModel.findByIdAndDelete(clinicId);
      }
    );
  }
}

module.exports = ClinicService;