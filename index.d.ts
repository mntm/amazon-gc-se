type Operation = "CreateGiftCard" | "CancelGiftCard" | "ActivateGiftCard" | "DeactivateGiftCard" | "ActivationStatusCheck" | "GetAvailablefunds"
type OperationStatus = "SUCCESS" | "FAILURE" | "RESEND";
type GiftCardStatus = "Fulfilled" | "RefundedToPurchaser" | "Expired";
type OperationErrorCode = "F100" | "F200" | "F300" | "F400" | "F500";
type OperationErrorType =
  | "AccessDenied"
  | "AccountHasProblems"
  | "ActivationNotAllowed"
  | "ActivationRequestIdAlreadyBeenUsed"
  | "ActiveContractNotFound"
  | "AmountIsNull"
  | "APIGetGiftCardActivityPageIsDisabled"
  | "BadInput"
  | "CancelRequestArrivedAfterTimeLimit"
  | "CardActivatedWithDifferentDenomination"
  | "CardActivatedWithDifferentRequestId"
  | "CardNumberCheckSumError"
  | "CardNumberNotFound "
  | "CardNumberTooShort"
  | "CurrencyCodeIsNull"
  | "CurrencyCodeMismatch"
  | "DeactivationNotAllowed"
  | "EmptyCardInfoList"
  | "ExternalReferenceTooLong"
  | "FractionalAmountNotAllowed"
  | "GcLocked"
  | "GcOrderBelongToOtherCustomer"
  | "GcRTPNotAllowed"
  | "GeneralError"
  | "InsufficientFunds"
  | "InvalidAccessKey"
  | "InvalidAmountInput "
  | "InvalidAmountValue "
  | "InvalidCardNumberInput "
  | "InvalidCurrencyCodeInput "
  | "InvalidDateFormat"
  | "InvalidEndDate"
  | "InvalidGCIdInput"
  | "InvalidPageIndex"
  | "InvalidPageSize"
  | "InvalidPartnerId"
  | "InvalidPartnerIdInput "
  | "InvalidProgramId"
  | "InvalidRequest"
  | "InvalidRequestIdInput  "
  | "InvalidRequestInput	"
  | "InvalidStartDate"
  | "IssuanceCapExceeded"
  | "MaxAmountExceeded"
  | "MaxPageSizeExceeded"
  | "NegativeOrZeroAmount"
  | "NonExistingActivationRequestId"
  | "OperationNotPermitted"
  | "OrderNotFound"
  | "ProgramIdNotPresent"
  | "ProgramIsNotApproved"
  | "RequestedDenominationMismatch"
  | "RequestError"
  | "RequestIdMustStartWithPartnerName"
  | "RequestIdTooLong"
  | "SimpleAmountIsNull"
  | "StartDateAfterEndDate"
  | "WrongActivationRequestId"
  | "WrongGcOrderSource"
  | "WrongGcOrderType";
  
export function createGiftCard(
  request: CreateGiftCardRequest
): Promise<CreateGiftCardResponse>;

export interface OperationParameters {
  partnerId: string;
  accessKey: string;
  secretKey: string;
  environment: string;
  endpoint: string;
}

export interface CreateGiftCardRequest
  extends GiftCardValue,
    OperationParameters {}
export interface OperationResponse {
  status: OperationStatus;
}

export interface CreateGiftCardResponse extends OperationResponse {
  cardInfo: GiftCardInfo;
  creationRequestId: string;
  gcClaimCode: string;
  gcExpirationDate: string;
  gcId: string;
}

export interface GiftCardInfo {
  cardNumber: any;
  cardStatus: GiftCardStatus;
  expirationDate: any;
  value: GiftCardValue;
}

export interface GiftCardValue {
  amount: number;
  currencyCode: string;
}

export interface OperationError {
  agcodResponse: OperationResponse;
  errorCode: OperationErrorCode;
  errorType: OperationErrorType;
  message: string;
}
