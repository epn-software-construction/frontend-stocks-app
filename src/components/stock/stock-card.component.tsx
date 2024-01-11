'use client';
import { buyStock } from '@/services/stock.service';
import type { Stock, RequestStockPurchase } from '@/types/stock';
import React, { useState } from 'react';

export default function StockCard({ stock }: { stock: Stock }): JSX.Element {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const handleBuyStock = async (stock: Stock): Promise<void> => {
        const stockPurchase: RequestStockPurchase = {
            stockSymbol: stock.symbol,
            amount: quantity,
            unitPrice: stock.price,
            totalPrice: total,
        };

        await buyStock(stockPurchase);

        console.log('bought stock', stockPurchase);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value === '') {
            setQuantity(0);
            setTotal(0);
            return;
        }

        const newQuantity = Math.max(0, parseInt(e.target.value));
        setQuantity(newQuantity);
        setTotal(stock.price * newQuantity);
    };

    return (
        <tr className="text-center">
            <td className="py-2 px-4 border-b">{stock.symbol}</td>
            <td className="py-2 px-4 border-b">${stock.price.toFixed(2)}</td>
            <td className="py-2 px-4 border-b">
                <input
                    type="number"
                    value={quantity}
                    onChange={handleChange}
                    className="pl-3 w-20 border border-cyan-400 rounded"
                />
            </td>
            <td className="py-2 px-4 border-b w-28">${total}</td>
            <td className="py-2 px-4 border-b">
                <button onClick={() => handleBuyStock} className="bg-blue-500 text-white px-2 py-1 rounded">
                    Comprar
                </button>
            </td>
        </tr>
    );
}
