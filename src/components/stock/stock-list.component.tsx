import React from 'react';
import { type Stock } from '@/types/stock';
import StockCard from './stock-card.component';

export default function StockList({ stocks }: { stocks: Stock[] }): JSX.Element {
    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Acciones Disponibles</h2>
            <table className="min-w-full bg-white border rounded">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Símbolo</th>
                        <th className="py-2 px-4 border-b">Precio</th>
                        <th className="py-2 px-4 border-b">Cantidad</th>
                        <th className="py-2 px-4 border-b w-20">Total</th>
                        <th className="py-2 px-4 border-b">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock: Stock) => (
                        <StockCard stock={stock} key={`stock-card-${stock.id}`} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
