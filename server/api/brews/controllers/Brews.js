'use strict';

/**
 * Brews.js controller
 *
 * @description: A set of functions called "actions" for managing `Brews`.
 */

module.exports = {

  /**
   * Retrieve brews records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.brews.search(ctx.query);
    } else {
      return strapi.services.brews.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a brews record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.brews.fetch(ctx.params);
  },

  /**
   * Count brews records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.brews.count(ctx.query, populate);
  },

  /**
   * Create a/an brews record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.brews.add(ctx.request.body);
  },

  /**
   * Update a/an brews record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.brews.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an brews record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.brews.remove(ctx.params);
  }
};
