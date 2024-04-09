import { useEffect, useState } from "react";

function CurrencyConvertor() {
  const [fromCurrency, setFromCurrancy] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [rates, setRates] = useState(0);
  const [isAnimate, setIsAnimate] = useState(false);

  const handleConvert = async () => {
    const controller = new AbortController();
    try {
      setIsAnimate(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
        { signal: controller.signal }
      );
      if (!res.ok) throw new Error("Someting went wrong to fetching data!");
      const data = await res.json();
      console.log(data);
      setRates(data.rates[`${toCurrency}`]);
      setIsAnimate(false);
    } catch (err) {
    } finally {
      setIsAnimate(false);
    }

    return function () {
      controller.abort();
    };
  };

  useEffect(
    function () {
      if (fromCurrency === toCurrency) return setRates(amount);
      handleConvert();
    },
    [amount, toCurrency, fromCurrency]
  );

  return (
    <div className="CC-container">
      <div className="header">
        <h3>Currency Converter</h3>
        <hr></hr>
        <p>
          Frankfurter is an open-source API for current and historical foreign
          exchange rates published by the European Central Bank.
        </p>
      </div>
      <div className="convertor">
        <div className="box">
          <input
            type="text"
            placeholder="Currency..."
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          ></input>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrancy(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="KRW">KRW</option>
          </select>
        </div>
        <div className="spinner">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className={
                isAnimate === true
                  ? "bi bi-arrow-repeat animate"
                  : "bi bi-arrow-repeat"
              }
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
              />
            </svg>
          </span>
        </div>
        <div className="box">
          <input type="text" placeholder="Currency..." value={rates}></input>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">USD </option>
            <option value="EUR">EUR </option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
            <option value="KRW">KRW</option>
          </select>
        </div>
      </div>
      <div>{}</div>
      <div className="btn-convert">
        <button>Convert</button>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
