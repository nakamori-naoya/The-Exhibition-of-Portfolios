export const FETCH_PORTFOLIOS = "FETCH_PORTFOLIOS";
export const fetchPortfoliosAction = (portfolios) => {
    return {
        type: "FETCH_PORTFOLIOS",
        payload: portfolios
    }
  }

export const DELETE_PORTFOLIO = "DELETE_PORTFOLIO";
export const deletePortfolioAction = (portfolios) => {
    return {
        type: "DELETE_PORTFOLIO",
        payload: portfolios
    }
}
