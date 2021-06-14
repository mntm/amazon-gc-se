const nanoid = require("nanoid")

const createGiftCardRequest = (request) => {
    const {partnerId, amount, currencyCode} = request

    return {
        creationRequestId: `${partnerId}${nanoid()}`,
        partnerId,
        value: {
            amount,
            currencyCode,
        },
    }
}

const getEndpoint = (endpoint, endpoints, environment) => {
    return endpoints.find(obj => obj.location === endpoint && obj.environment === environment)
}

module.exports = {
    createGiftCardRequest,
    getEndpoint,
}