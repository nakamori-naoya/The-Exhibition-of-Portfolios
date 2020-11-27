export const FETCH_PORTFOLIOS = "FETCH_PORTFOLIOS";
export const fetchPortfoliosAction = (portfolios) => {
    return {
        type: "FETCH_PORTFOLIOS",
        payload: portfolios
    }
  }
