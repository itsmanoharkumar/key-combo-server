'use strict';

/**
 * software-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::software-request.software-request', ({ strapi }) => ({
  async vote({ postId, userId, query }) {
    const softwareRequest = await strapi.entityService.findOne("api::software-request.software-request",  postId, {
      populate: ["votes"]
    });
    const updatedSoftwareRequest = await strapi.entityService.update("api::software-request.software-request",  postId, {
      data: {
        votes: [...softwareRequest.votes, userId]
      },
      ...query
    });
    return updatedSoftwareRequest;
  }
}));
