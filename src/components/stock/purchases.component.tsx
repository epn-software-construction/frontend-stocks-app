import React from 'react';
import type { StockPurchase } from '@/types/stock';
import PurchaseCard from './purchase-card.component';

export default function StockList({ purchases }: { purchases: StockPurchase[] }): JSX.Element {
    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Transacciones</h2>
            <table className="min-w-full bg-white border rounded">
                <thead>
                    <tr className="text-center">
                        <th className="py-2 px-4 border-b">Símbolo</th>
                        <th className="py-2 px-4 border-b">Fecha</th>
                        <th className="py-2 px-4 border-b">Cantidad</th>
                        <th className="py-2 px-4 border-b">Precio</th>
                        <th className="py-2 px-4 border-b">Precio Total</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase: StockPurchase) => (
                        <PurchaseCard purchase={purchase} key={`purchase-card-${purchase.id}`} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
