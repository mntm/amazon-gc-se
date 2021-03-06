const {
  createGiftCardRequest,
  getEndpoint,
} = require("../../src/util/helpers");
const { endpoints } = require("../../src/util/constants");

test("createGiftCardRequest", () => {
  const request = {
    amount: 20,
    currencyCode: "USD",
    partnerId: "testPartnerId",
  };
  const result = createGiftCardRequest(request);
  expect(result.creationRequestId).toBeDefined();
  expect(result.creationRequestId).toMatch(new RegExp(`^testPartnerId.*$`));
  expect(result.partnerId).toBe("testPartnerId");
  expect(result.value.currencyCode).toBe("USD");
  expect(result.value.amount).toBe(20);
});

test("createGiftCardRequest with creationRequestId passed as parameter", () => {
  const request = {
    amount: 20,
    currencyCode: "USD",
    partnerId: "testPartnerId",
    creationRequestId: "Some_Request_ID",
  };
  const result = createGiftCardRequest(request);
  expect(result.creationRequestId).toBe("testPartnerIdSome_Request_ID");
  expect(result.partnerId).toBe("testPartnerId");
  expect(result.value.currencyCode).toBe("USD");
  expect(result.value.amount).toBe(20);
});

test("createGiftCardRequest with creationRequestId that begins with partnerId passed as parameter", () => {
  const request = {
    amount: 20,
    currencyCode: "USD",
    partnerId: "testPartnerId",
    creationRequestId: "testPartnerIdSome_Request_ID",
  };
  const result = createGiftCardRequest(request);
  expect(result.creationRequestId).toBe("testPartnerIdSome_Request_ID");
  expect(result.partnerId).toBe("testPartnerId");
  expect(result.value.currencyCode).toBe("USD");
  expect(result.value.amount).toBe(20);
});

describe("getEndpoint", () => {
  endpoints.forEach((endpoint) => {
    const { location, environment } = endpoint;

    test(`getEndpoint returns correct result for location: ${location} and environment: ${environment}`, () => {
      const result = getEndpoint(location, endpoints, environment);
      expect(result).toEqual(endpoint);
    });
  });
});
