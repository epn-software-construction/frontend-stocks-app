import { type StockPurchase, type Stock, type RequestStockPurchase } from '@/types/stock';
import { config } from '@/config';

const stocks: Stock[] = [
    {
        id: 1,
        name: 'Apple',
        symbol: 'AAPL',
        price: 150.5,
    },
    {
        id: 2,
        name: 'Netflix',
        symbol: 'NFLX',
        price: 550.25,
    },
    {
        id: 3,
        name: 'Google',
        symbol: 'GOOGL',
        price: 2800.75,
    },
    {
        id: 4,
        name: 'Microsoft',
        symbol: 'MSFT',
        price: 320.0,
    },
];

const stockPurchases: StockPurchase[] = [
    {
        id: 1,
        stockSymbol: 'AAPL',
        date: '06-01-24',
        unitPrice: 150.5,
        totalPrice: 1505,
        amount: 10,
    },
    {
        id: 2,
        stockSymbol: 'NFLX',
        date: '06-01-24',
        unitPrice: 550.25,
        totalPrice: 550.25,
        amount: 1,
    },
    {
        id: 3,
        stockSymbol: 'GOOGL',
        date: '06-01-24',
        unitPrice: 2800.75,
        totalPrice: 2800.75,
        amount: 1,
    },
    {
        id: 4,
        stockSymbol: 'MSFT',
        date: '06-01-24',
        unitPrice: 320.0,
        totalPrice: 3200,
        amount: 10,
    },
];

export const getStocks = async (): Promise<Stock[]> => {
    const response = await fetch(`${config.API_URL}/stocks`);
    const data = await response.json();
    console.log(data);
    return stocks;
};

export const getPurchases = async (): Promise<StockPurchase[]> => {
    // const response = await fetch(`${config.API_URL}/user-stocks`);

    // const data = await response.json();
    // console.log(data);
    return stockPurchases;
};

export const buyStock = async (stockPurchase: RequestStockPurchase): Promise<RequestStockPurchase> => {
    // const response = await fetch(`${config.API_URL}/user-stocks`, {
    //     method: 'POST',
    //     body: JSON.stringify(stockPurchase),
    // });

    // const data = await response.json();
    // console.log(data);

    return stockPurchase;
};
