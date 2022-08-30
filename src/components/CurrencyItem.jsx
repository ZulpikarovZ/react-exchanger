import { useDispatch } from "react-redux"
import { selectCurrencyItem } from "../redux/actions"

export function CurrencyItem({ el }) {
  const dispatch = useDispatch()

  function currencyItemHandler() {
    dispatch(selectCurrencyItem(el.code))
  }

  return (
    <div className="currency-item" onClick={currencyItemHandler} >{el?.code}</div>
  )
}