import { type StockPurchase, type Stock, type RequestStockPurchase } from '@/types/stock';
import { config } from '@/config';

export const getStocks = async (): Promise<Stock[]> => {
    const response = await fetch(`${config.API_URL}/stocks`);
    const data = await response.json();

    return data;
};

export const getPurchases = async (): Promise<StockPurchase[]> => {
    const response = await fetch(`${config.API_URL}/user-stocks`);

    const data = await response.json();
    console.log(data);

    return data;
};

export const getChange = async (stockSymbol: string, priceToCalculate: number): Promise<number> => {
    const data = await getStocks();
    const stock = data.find((stock) => stock.symbol === stockSymbol);

    if (!stock) {
        return 0;
    }

    const change = stock.price - priceToCalculate;
    const percentage = (change / priceToCalculate) * 100;
    return percentage;
};

export const buyStock = async (stockPurchase: RequestStockPurchase): Promise<RequestStockPurchase> => {
    const response = await fetch(`${config.API_URL}/user-stocks`, {
        method: 'POST',
        body: JSON.stringify(stockPurchase),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    return data;
};
