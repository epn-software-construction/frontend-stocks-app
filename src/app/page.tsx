import React from 'react';

import { StockList, Purchases } from '@/components/stock';
import { getStocks, getPurchases } from '@/services/stock.service';

export default async function Index(): Promise<JSX.Element> {
    const stocks = await getStocks();
    const purchases = await getPurchases();

    return (
        <main className="min-h-screen flex flex-col gap-5 justify-center items-center">
            <StockList stocks={stocks} />
            <Purchases purchases={purchases} />
        </main>
    );
}
