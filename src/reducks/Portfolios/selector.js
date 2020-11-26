import { createSelector } from "reselect";

const portfoliosSelector = (state) => state.portfolios;

export const getProducts = createSelector(
    [portfoliosSelector],
    state => state.list
);
