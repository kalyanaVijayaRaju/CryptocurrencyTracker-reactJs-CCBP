// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {CryptocurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = CryptocurrencyDetails

  return (
    <li className="currency-coin-container">
      <div className="name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency">{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="currency-in-usd">{usdValue}</p>
        <p className="currency">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
