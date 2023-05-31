module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/software-requests/:id/vote",
      handler: "api::software-request.software-request.vote",
    }
  ]
}
