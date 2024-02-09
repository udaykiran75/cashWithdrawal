import './index.css'

const AddDenomination = props => {
  const {eachItem, onAddAmount} = props
  const {value} = eachItem
  const AddAmount = () => {
    onAddAmount(value)
  }
  return (
    <li>
      <button className="addBtn" onClick={AddAmount}>
        {value}
      </button>
    </li>
  )
}

export default AddDenomination
