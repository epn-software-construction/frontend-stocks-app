export interface Stock {
    id: number;
    name: string;
    symbol: string;
    price: number;
}

export interface StockPurchase {
    id: number;
    stockSymbol: string;
    stockName: string;
    date: string;
    unitPrice: number;
    amount: number;
    totalPrice: number;
}

export interface RequestStockPurchase {
    stockName: string;
    stockSymbol: string;
    unitPrice: number;
    amount: number;
    totalPrice: number;
}
