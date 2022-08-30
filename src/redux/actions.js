import { ADD_CATEGORY, GET_ALL_CURRENCY, GET_BANKS_RU_CURRENCY, GET_BANKS_UA_CURRENCY, GET_CRYPTO_CURRENCY, GET_CURRENCY, GET_FIAT_CURRENCY, PUSH_FILTERED_DIRECTIONS, SELECT_CURRENCY, SELECT_CURRENCY_ITEM } from "./types"

export function getAllCurrency() {
  return {
    type: GET_ALL_CURRENCY
  }
}

export function getCurrency(payload) {
  return {
    type: GET_CURRENCY,
    payload,
  }
}

export function getCryptoCurrency(payload) {
  return {
    type: GET_CRYPTO_CURRENCY,
    payload,
  }
}

export function getFiatCurrency(payload) {
  return {
    type: GET_FIAT_CURRENCY,
    payload,
  }
}

export function getBanksRuCurrency(payload) {
  return {
    type: GET_BANKS_RU_CURRENCY,
    payload,
  }
}

export function getBanksUaCurrency(payload) {
  return {
    type: GET_BANKS_UA_CURRENCY,
    payload,
  }
}

export function addCategory(payload) {
  return {
    type: ADD_CATEGORY,
    payload,
  }
}

export function selectCurrnecy(filteredDirections, currency) {
  return {
    type: SELECT_CURRENCY,
    payload: {
      filteredDirections,
      currency,
    },
  }
}

export function pushFilteredDirections(payload) {
  return {
    type: PUSH_FILTERED_DIRECTIONS,
    payload,
  }
}

export function selectCurrencyItem(payload) {
  return {
    type: SELECT_CURRENCY_ITEM,
    payload,
  }
}