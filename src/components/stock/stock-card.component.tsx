'use client';
import { buyStock } from '@/services/stock.service';
import type { RequestStockPurchase, Stock } from '@/types/stock';
import React, { useState } from 'react';

export default function StockCard({ stock }: { stock: Stock }): JSX.Element {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);
    const [date, setDate] = useState('');

    const handleBuyStock = async (): Promise<void> => {
        if (quantity === 0) {
            return;
        }

        const stockPurchase: RequestStockPurchase = {
            stockName: stock.name,
            amount: quantity,
            date,
            unitPrice: stock.price,
            totalPrice: total,
        };

        await buyStock(stockPurchase);
        setQuantity(0);
        setTotal(0);
        setDate('');
        alert('Compra realizada con éxito');
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

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value === '') {
            setDate('');
            return;
        }

        setDate(e.target.value);
    };

    return (
        <tr className="text-center">
            <td className="py-2 px-4 border-b">{stock.name}</td>
            <td className="py-2 px-4 border-b">${stock.price.toFixed(2)}</td>
            <td className="py-2 px-4 border-b">
                <input
                    type="number"
                    value={quantity}
                    onChange={handleChange}
                    className="pl-3 w-20 border border-gray-400 rounded text-center"
                />
            </td>
            <td className="py-2 px-4 border-b w-28">${total.toFixed(2)}</td>
            <td className="py-2 px-4 border-b w-42">
                <input
                    type="string"
                    value={date}
                    onChange={handleDateChange}
                    className="pl-3 border border-gray-400 rounded text-center"
                />
            </td>
            <td className="py-2 px-4 border-b">
                <button onClick={handleBuyStock} className="bg-blue-500 text-white px-2 py-1 rounded">
                    Registrar
                </button>
            </td>
        </tr>
    );
}
