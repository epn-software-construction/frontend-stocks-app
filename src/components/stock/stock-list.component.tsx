'use client';
import React from 'react';
import { type Stock } from '@/types/stock';
import StockCard from './stock-card.component';
import { getStocks } from '@/services/stock.service';

export default function StockList(): JSX.Element {
    const [stocks, setStocks] = React.useState<Stock[]>([]);

    React.useEffect(() => {
        getStocks()
            .then((stocks) => {
                setStocks(stocks);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Acciones Disponibles</h2>
            <table className="min-w-full bg-white border rounded">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Precio</th>
                        <th className="py-2 px-4 border-b">Cantidad</th>
                        <th className="py-2 px-4 border-b w-20">Total</th>
                        <th className="py-2 px-4 border-b">Fecha</th>
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
