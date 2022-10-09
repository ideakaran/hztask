const API_ERROR = "API_ERROR";
const BEER_API = "https://api.punkapi.com/v2/beers";
const BEER_DESC_LIMIT_ON_MOB = 150;
const BEER_DESC_LIMIT = 100;
const BEER_DESC_SEPARATOR = "...";
const FETCH_STATUS_SUCCESS = "success";
const FETCH_STATUS_ERROR = "error";
const FETCH_STATUS_LOADING = "loading";
const PAGINATION_PER_PAGE = 1;
const PAGINATION_PAGE_NUM = 10;
const PAGINATION_BTN_TEXT_LOAD_MORE = "Load More";
const PAGINATION_BTN_TEXT_LOAD_MORE_BEERS = "Load More Beers";
const PAGINATION_BTN_TEXT_NEXT = "Next";
const TXT_SKIP_TO_MAIN_CONTENT = "Skip to main content";
const SCROLL_BEHAVIOR_SMOOTH = "smooth";
const SHOW_SCROLL_TO_TOP_PAGE_Y_OFFSET = 200;
const TXT_BEERS = "Beers";
const TXT_BEERS_NOT_FOUND = "Beers Not Found";

const MEDIA = {
  desktop: "@media(min-width: 1000px)",
  tablet: "@media(min-width: 768px)",
};

const ACTION_FETCH_ALL_BEERS = "fetch-all-beers";

export {
  ACTION_FETCH_ALL_BEERS,
  API_ERROR,
  BEER_API,
  BEER_DESC_LIMIT_ON_MOB,
  BEER_DESC_LIMIT,
  BEER_DESC_SEPARATOR,
  FETCH_STATUS_SUCCESS,
  FETCH_STATUS_ERROR,
  FETCH_STATUS_LOADING,
  PAGINATION_PER_PAGE,
  PAGINATION_PAGE_NUM,
  PAGINATION_BTN_TEXT_LOAD_MORE,
  PAGINATION_BTN_TEXT_LOAD_MORE_BEERS,
  PAGINATION_BTN_TEXT_NEXT,
  SCROLL_BEHAVIOR_SMOOTH,
  SHOW_SCROLL_TO_TOP_PAGE_Y_OFFSET,
  TXT_BEERS,
  TXT_BEERS_NOT_FOUND,
  TXT_SKIP_TO_MAIN_CONTENT,
  MEDIA,
};
