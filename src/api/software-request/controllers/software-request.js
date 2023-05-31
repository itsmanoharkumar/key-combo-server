'use strict';

/**
 * software-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::software-request.software-request', ({ strapi }) => ({
  async vote(ctx) {
    const user = ctx.state.user;
    const postId = ctx.params.id;
    const {query} = ctx;
    const updatedSoftwareRequest = await strapi.service("api::software-request.software-request").vote({
      postId,
      userId: user.id,
      query
    });
    const sanitizeEntity = await this.sanitizeOutput(updatedSoftwareRequest, ctx);
    return this.transformResponse(sanitizeEntity);
  }
}));
