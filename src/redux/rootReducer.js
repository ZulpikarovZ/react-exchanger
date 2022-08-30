import { combineReducers } from 'redux'
import { initState } from './initState'
import { ADD_CATEGORY, GET_ALL_CURRENCY, GET_BANKS_RU_CURRENCY, GET_BANKS_UA_CURRENCY, GET_CRYPTO_CURRENCY, GET_CURRENCY, GET_FIAT_CURRENCY, PUSH_FILTERED_DIRECTIONS, SELECT_CURRENCY_ITEM } from './types'


function directionReducer(state = initState().directions, action) {
  switch (action.type) {
    case GET_ALL_CURRENCY:
      return state

    case ADD_CATEGORY:
      return action.payload

    case GET_CURRENCY:
      return action.payload

    case GET_CRYPTO_CURRENCY:
      return action.payload.filter(el => el.category === 'crypto')

    case GET_FIAT_CURRENCY:
      return action.payload.filter(el => el.category === 'fiat')

    case GET_BANKS_RU_CURRENCY:
      return action.payload.filter(el => el.category === 'banksRu')

    case GET_BANKS_UA_CURRENCY:
      return action.payload.filter(el => el.category === 'banksEu')

    case SELECT_CURRENCY_ITEM:
      return initState().directions.filter(el => el.code === action.payload)

    // case SET_FILTERED_DIRECTIONS:
    //   return action.payload

    // case SELECT_CURRENCY:
    //   console.log('action--->', action);
    //   if (action.payload.category === 'all') {
    //     return state
    //   }

    //   if (action.payload.category === '') {
    //     return []
    //   }

    //   return action.payload.filteredDirections.filter(el => el.category === action.payload.category)


    default: return state
  }
}

function filteredDirectionsReducer(state = initState().filteredDirections, action) {
  switch (action.type) {
    case PUSH_FILTERED_DIRECTIONS:
      return action.payload

    default: return state
  }
}

function filterReducer(state = initState().filter, action) {
  switch (action.type) {
    // case SELECT_CURRENCY_ITEM:

    default: return state
  }
}


export const rootReducer = combineReducers({
  directions: directionReducer,
  filteredDirections: filteredDirectionsReducer,
  filter: filterReducer,
})