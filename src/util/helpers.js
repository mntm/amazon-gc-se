const nanoid = require("nanoid");

const createGiftCardRequest = (request) => {
  const { partnerId, amount, currencyCode, creationRequestId } = request;

  const suffix = creationRequestId || nanoid();
  const re = new RegExp(`^${partnerId}`);

  return {
    creationRequestId: `${partnerId}${suffix.replace(re, "")}`,
    partnerId,
    value: {
      amount,
      currencyCode,
    },
  };
};

const getEndpoint = (endpoint, endpoints, environment) => {
  return endpoints.find(
    (obj) => obj.location === endpoint && obj.environment === environment
  );
};

module.exports = {
  createGiftCardRequest,
  getEndpoint,
};
