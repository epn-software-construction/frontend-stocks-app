export interface Stock {
    id: number;
    name: string;
    symbol: string;
    price: number;
}

export interface StockPurchase {
    id: number;
    stockSymbol: string;
    date: string;
    unitPrice: number;
    amount: number;
    totalPrice: number;
}

export interface RequestStockPurchase {
    stockSymbol: string;
    unitPrice: number;
    amount: number;
    totalPrice: number;
}
