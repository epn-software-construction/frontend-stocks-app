export type Stock = {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change: {
    "1h": number;
    "4h": number;
    "24h": number;
  };
  marketCap: number;
};
