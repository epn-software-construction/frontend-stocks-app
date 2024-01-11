'use client';

import React from 'react';

import type { StockPurchase } from '@/types/stock';

export default function PurchaseCard({ purchase }: { purchase: StockPurchase }): JSX.Element {
    return (
        <tr className="text-center">
            <td className="py-2 px-4 border-b">{purchase.stockSymbol}</td>
            <td className="py-2 px-4 border-b">{purchase.date}</td>
            <td className="py-2 px-4 border-b">{purchase.amount}</td>
            <td className="py-2 px-4 border-b">${purchase.unitPrice.toFixed(2)}</td>
            <td className="py-2 px-4 border-b">${purchase.totalPrice.toFixed(2)}</td>
        </tr>
    );
}
