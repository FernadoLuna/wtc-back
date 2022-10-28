'use strict';

/**
 * provedor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::provedor.provedor');
