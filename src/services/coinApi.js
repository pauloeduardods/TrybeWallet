const coinApi = () => (
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((res) => {
      if (res.USDT) delete res.USDT;
      if (res.BTC) res.BTC.ask = Number(res.BTC.ask) * 1000;
      return Promise.resolve(res);
    })
    .catch((error) => Promise.reject(error))
);

export default coinApi;
