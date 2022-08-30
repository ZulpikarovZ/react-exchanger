import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addCategory, getAllCurrency, getBanksRuCurrency, getCryptoCurrency, getCurrency, getFiatCurrency, pushFilteredDirections } from "../redux/actions";
import { CurrencyItem } from "./CurrencyItem";

export function Selector(props) {
  const [show, setShow] = useState(false)
  const currency = useSelector(state => state.directions)
  const filteredDirections = useSelector(state => state.filteredDirections)
  

  const dispatch = useDispatch()

  // const buttons = ['Все', 'Криптовалюты', 'Наличные', 'Банки' ]

  const mappedCurrency = currency.map(el => {
    if (el.code === 'BTC' || el.code === 'ETH' || el.code === 'USDTTRC') {
      return { ...el, category: 'crypto' }
    } else if (el.code === 'CASHUSD' || el.code === 'CASHRUB') {
      return { ...el, category: 'fiat' }
    } else {
      return { ...el, category: 'banksRu' }
    }
  })

  useEffect(() => {
    // fetch/axios
    dispatch(getAllCurrency())
    dispatch(addCategory(mappedCurrency))
    dispatch(pushFilteredDirections(mappedCurrency))
  }, [])



  function handlerBtn() {
    if (currency.length === 1) {
      dispatch(getCurrency(filteredDirections))
    }
    setShow(prev => !prev)
  }

  function handlerAllCurrency() {
    dispatch(getCurrency(filteredDirections))
  }

  function handlerCryptoCurrency() {
    dispatch(getCryptoCurrency(filteredDirections))
  }

  function handlerFiatCurrency() {
    dispatch(getFiatCurrency(filteredDirections))
  }

  function handlerBanksRuCurrency() {
    dispatch(getBanksRuCurrency(filteredDirections))
  }


  // function handlerSelectCurrency(category) {
  //   dispatch(selectCurrnecy(filteredDirections, category))
  //   //передавать индекс активному элементу
  // }



  return (
    <div className='from'>
      <div className="currency">
        <h3 className="from__title">{props.title}</h3>
        <div className="from__buttons">
          {/* {buttons.map(btn => <button className="from__button" type="button">{btn}</button>)} */}
          <button className="from__button" type="button" onClick={handlerAllCurrency}>Все</button>
          <button className="from__button" type="button" onClick={handlerCryptoCurrency}>Криптовалюты</button>
          <button className="from__button" type="button" onClick={handlerFiatCurrency}>Наличные</button>
          <button className="from__button" type="button" onClick={handlerBanksRuCurrency}>Банки RUB</button>
          {/* <button className="from__button" type="button" onClick={handlerBanksUaCurrency}>Банки UAH</button>

          {/* <button className="from__button" type="button" onClick={handlerSelectCurrency('all')}>Все</button>
          <button className="from__button" type="button" onClick={handlerSelectCurrency('crypto')}>Криптовалюты</button>
          <button className="from__button" type="button" onClick={handlerSelectCurrency('fiat')}>Наличные</button>
          <button className="from__button" type="button" onClick={handlerSelectCurrency('banks')}>Банки RUB</button>
          <button className="from__button" type="button" onClick={handlerSelectCurrency('')}>Банки UAH</button> */}
        </div>
      </div>

      <div className='from__select-item'>
        <input className="from__input" type="text" />
        <div className="from__current-currency" onClick={handlerBtn}>{currency[0].code}
          <div className={show ? "from__dropdown-show" : 'from__dropdown-hide'}>
            {currency?.map((el, index) => <CurrencyItem el={el} key={index} />)}
          </div>
        </div>
      </div>
    </div >
  )
}