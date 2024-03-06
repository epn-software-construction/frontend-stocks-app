'use client';

import React from 'react';

import type { StockPurchase } from '@/types/stock';

export default function PurchaseCard({ purchase }: { purchase: StockPurchase }): JSX.Element {
    const change = (Math.random() * 12 - 6).toFixed(2);
    return (
        <tr className="text-center">
            <td className="py-2 px-4 border-b">{purchase.stockName}</td>
            <td className="py-2 px-4 border-b">{purchase.date.slice(0, 10)}</td>
            <td className="py-2 px-4 border-b">{purchase.amount}</td>
            <td className="py-2 px-4 border-b">${purchase.unitPrice.toFixed(2)}</td>
            <td className="py-2 px-4 border-b">${purchase.totalPrice.toFixed(2)}</td>
            <td
                className={`py-2 px-4 border-b ${Number(change) > 0 ? 'text-lime-700' : 'text-red-700'}`}
            >{`${change}%`}</td>
            <td className={`py-2 px-4 border-b ${Number(change) > 0 ? 'text-lime-700' : 'text-red-700'}`}>
                {((Number(change) / 100) * purchase.totalPrice).toFixed(2)} USD
            </td>
        </tr>
    );
}
