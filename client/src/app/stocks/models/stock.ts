export interface Stock {
    ticker: string,
    exchange: string,
    price: number,
    prev_price?: number
    change: number,
    change_percent: number,
    dividend: number,
    yield: number,
    last_trade_time: string,
}

export interface StocksHistory {
    [ticker: string]: Stock[];
}