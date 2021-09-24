import { createAction, props } from "@ngrx/store";
import { Stock } from "../../models/stock";

export const fetchStocks = createAction(
    '[STOCKS] Fetch stocks'
)
export const fetchStocksSucces = createAction(
    '[STOCKS] Fetch stocks success',
    props<{stocks: Stock[]}>()
)
export const fetchStocksHistorySuccess = createAction(
    '[STOCKS] Fetch stocks history success',
    props<{stocks: Stock[]}>()
)