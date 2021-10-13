/**
 * Services
 */
const ProfileService = require('./profile.service')
const EntityService = require('./entity.service')
const IdentificationService = require('./identification.service')

const jwt = require('jsonwebtoken')
const config = require('jsconfig')
const { Login } = require('../exceptions/auth.exception')

const logger = console

class AuthService {
  /**
   * log in user profile
   *
   * @param {Object} credentials
   * @returns {Promise<void>}
   */
  static async login({ email, password }) {
    logger.debug('AuthService::login processing')

    try {
      const identification = await IdentificationService.getByEmail(email)
      if (!identification) throw Login.attempt()
      const isValidPass = await identification.validPassword(password)
      if (!isValidPass) throw Login.attempt()
      const accessToken = jwt.sign({ email }, config.env.appKey)
      logger.debug('AuthService::login has been processed with success status')

      return {
        token_type: 'bearer ',
        access_token: accessToken,
        refresh_token: '', // Not a proper implementaion
      }
    } catch (e) {
      logger.debug('AuthService::login has been processed with fail status')
      logger.error('AuthService::login error message:', e.toString())
      throw e
    }
  }

  /**
   * register user profile
   *
   * @param {Object} credentials
   * @returns {Promise<void>}
   */
  static async register({ email, password, vars }) {
    logger.debug('AuthService::register processing')

    try {
      const entity = await EntityService.create({
        email,
        password,
      })

      await ProfileService.create({
        entity_id: entity._id,
        vars,
      })
      logger.debug(
        'AuthService::register has been processed with success status'
      )
    } catch (e) {
      logger.debug('AuthService::register has been processed with fail status')
      logger.error('AuthService::register error message:', e.toString())
      throw e
    }
  }
}

module.exports = AuthService
