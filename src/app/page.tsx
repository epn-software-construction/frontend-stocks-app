import React from 'react';

import { StockList, Purchases } from '@/components/stock';

export default async function Index(): Promise<JSX.Element> {
    return (
        <main className="min-h-screen flex flex-col gap-5 justify-center items-center p-16">
            <StockList />
            <Purchases />
        </main>
    );
}
