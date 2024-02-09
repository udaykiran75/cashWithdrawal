import './index.css'
import {Component} from 'react'

import AddDenomination from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onAddAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="appcontainer">
        <div className="cardconatiner">
          <div className="nameDiv">
            <div className="profile">
              <p>S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="BalanceContainer">
            <p className="yourBalance">Your Balance</p>
            <div className="amountDiv">
              <p className="amount">{amount}</p>
              <p className="inRupees">In Rupees</p>
            </div>
          </div>
          <p className="amount">Withdrawal</p>
          <p className="choose-amount">CHOOSE SUM (IN RUPEES)</p>
          <ul className="withdrawal-container">
            {denominationsList.map(eachItem => (
              <AddDenomination
                eachItem={eachItem}
                key={eachItem.id}
                onAddAmount={this.onAddAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
