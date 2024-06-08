import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const { balance } = useSelector((store) => store.accaunt);
  console.log(balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}

// function mapStateToProps(state) {
//   return {
//     balance: state.accaunt.balance,
//   };
// }

// export default connect(mapStateToProps)(BalanceDisplay);

export default BalanceDisplay;
