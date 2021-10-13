/**
 * Models
 */
const IdentificationModel = require('../db/models/modifiers/identification.model')

class IdentificationService {
  static get(data) {
    return IdentificationModel.findOne(data)
  }

  static async getByEmail(email) {
    return this.get({ email })
  }

  static async getAll() {
    return IdentificationModel.find()
  }
}

module.exports = IdentificationService
