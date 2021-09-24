import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StocksState, STOCKS_REDUCER_NODE } from "./stocks.reducer";

export const selectFeature = createFeatureSelector<StocksState>(STOCKS_REDUCER_NODE);
 
export const selectFeatureStock = createSelector(
  selectFeature,
  (state) => state.stocks
);

export const selectFeatureStockHistory = createSelector(
  selectFeature,
  (state) => state.stocksHistory
);