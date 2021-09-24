import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Stock, StocksHistory } from "../../models/stock";
import { fetchStocksHistorySuccess, fetchStocksSucces } from "./stocks.actions";

export const STOCKS_REDUCER_NODE = 'stocks'

export interface StocksState {
    stocks: Stock[];
    stocksHistory: StocksHistory;
}

export const initialState: StocksState = {
    stocks: [],
    stocksHistory: {}
}

export const stocksReducer = createReducer(
    initialState,
    on(fetchStocksSucces, (state,{stocks}) => ({
        ...state,
        stocks: stocks,
    })),
    on(fetchStocksHistorySuccess, (state, {stocks}) => {
        const newHistory = {
            ...state.stocksHistory
        };
        stocks.forEach((stock) => {
            if (newHistory[stock.ticker]) {
                const history = newHistory[stock.ticker];
                newHistory[stock.ticker] = [...history,stock]
                return;
            }
            newHistory[stock.ticker] = [stock];
        })
        return {
            ...state,
            stocksHistory: newHistory
        }
}))
