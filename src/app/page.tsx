import React from 'react';

import { StockList } from '@/components/stock';
import { getStocks } from '@/services/stock.service';

export default async function Index(): Promise<JSX.Element> {
    const stocks = await getStocks();

    return (
        <main className="min-h-screen flex justify-center items-center">
            <StockList stocks={stocks} />
        </main>
    );
}
