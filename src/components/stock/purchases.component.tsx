'use client';

import React from 'react';
import type { StockPurchase } from '@/types/stock';
import PurchaseCard from './purchase-card.component';
import { getPurchases } from '@/services/stock.service';

export default function StockList(): JSX.Element {
    const [purchases, setPurchases] = React.useState<StockPurchase[]>([]);
    const [filteredPurchases, setFilteredPurchases] = React.useState<StockPurchase[]>([]);

    const handleFilter = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const sortedPurchases = [...purchases].sort((a, b) => a.stockName.localeCompare(b.stockName));
        setFilteredPurchases(sortedPurchases);
    };

    const handleSortByDate = (e: React.MouseEvent<HTMLButtonElement>): void => {
        // eslint-disable-next-line array-callback-return
        const sortedPurchases = [...purchases].sort((a, b) => {
            // Ordenar por fecha
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            if (dateA.getTime() !== dateB.getTime()) {
                return dateB.getTime() - dateA.getTime();
            }
            return 0; // Add this line to return 0 if the dates are equal
        });

        setFilteredPurchases(sortedPurchases);
    };

    const hanldeSortByPrice = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const sortedPurchases = [...purchases].sort((a, b) => b.totalPrice - a.totalPrice);
        setFilteredPurchases(sortedPurchases);
    };

    React.useEffect(() => {
        getPurchases()
            .then((purchases) => {
                setPurchases(purchases);
                setFilteredPurchases(purchases);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Lista de Transacciones</h2>
            <div className="flex gap-4 py-4 items-center">
                <div className="text-md font-semibold">Ordenar por:</div>
                <button className="bg-cyan-500 px-4 py-1 rounded-lg" onClick={handleFilter}>
                    Nombre
                </button>
                <button className="bg-cyan-500 px-4 py-1 rounded-lg" onClick={handleSortByDate}>
                    Fecha
                </button>
                <button className="bg-cyan-500 px-4 py-1 rounded-lg" onClick={hanldeSortByPrice}>
                    Precio
                </button>
            </div>
            <table className="min-w-full bg-white border rounded">
                <thead>
                    <tr className="text-center">
                        <th className="py-2 px-4 border-b">Nombre</th>
                        <th className="py-2 px-4 border-b">Fecha</th>
                        <th className="py-2 px-4 border-b">Precio</th>
                        <th className="py-2 px-4 border-b">Cantidad</th>
                        <th className="py-2 px-4 border-b">Precio Total</th>
                        <th className="py-2 px-4 border-b">Cambio</th>
                        <th className="py-2 px-4 border-b">
                            Ganancia/ <br />
                            Pérdida
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPurchases.map((purchase: StockPurchase) => (
                        <PurchaseCard purchase={purchase} key={`purchase-card-${purchase.id}`} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
