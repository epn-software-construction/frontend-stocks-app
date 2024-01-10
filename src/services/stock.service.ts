import { Stock } from '@/types/stock';

const stocks: Stock[] = [
  {
    id: 1,
    name: 'Apple',
    symbol: 'AAPL',
    price: 150.5,
    change: {
      '1h': 1.2,
      '4h': -0.5,
      '24h': 3.0,
    },
    marketCap: 2300000000000, // Example market cap in dollars
  },
  {
    id: 2,
    name: 'Netflix',
    symbol: 'NFLX',
    price: 550.25,
    change: {
      '1h': 0.25,
      '4h': -1.5,
      '24h': 1.4,
    },
    marketCap: 270000000000, // Example market cap in dollars
  },
  {
    id: 3,
    name: 'Google',
    symbol: 'GOOGL',
    price: 2800.75,
    change: {
      '1h': -0.8,
      '4h': 2.0,
      '24h': 5.6,
    },
    marketCap: 1900000000000, // Example market cap in dollars
  },
  {
    id: 4,
    name: 'Microsoft',
    symbol: 'MSFT',
    price: 320.0,
    change: {
      '1h': 0.5,
      '4h': 1.3,
      '24h': 2.7,
    },
    marketCap: 2100000000000, // Example market cap in dollars
  },
];

export const getStocks = async () => stocks;

export const buyShare = (share: Stock) => {};
