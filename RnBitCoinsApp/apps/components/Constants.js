/* eslint-disable prettier/prettier */
export function getConinIconUri(coinName) {
  switch (coinName) {
    case 'Bitcoin':
      return 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32%402x/icon/btc%402x.png';

    case 'Ethereum':
      return 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32%402x/icon/eth%402x.png';

    case 'XRP':
      return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/xrp@2x.png?raw=true';

    case 'EOS':
      return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/eos@2x.png?raw=true';

    case 'Bitcoin Cash':
      return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/btch@2x.png?raw=true';

    case 'Litecoin':
      return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ltc@2x.png?raw=true';

    case 'Tether':
      return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/usdt@2x.png?raw=true';

    case 'Chainlink':
      return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/link@2x.png?raw=true';

    case 'Cardano':
      return 'https://github.com/spothq/cryptocurrency-icons/blob/master/32@2x/icon/ada@2x.png?raw=true';

    default:
      return 'https://icon-icons.com/icons2/1386/PNG/64/generic-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95642.png';
  }
}
