import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './store/store';
import { fetchStockInfo, fetchStockIntradayData, fetchStockDailyData } from './actions/stock_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
    if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchStockInfo = fetchStockInfo;
  window.fetchStockIntradayData = fetchStockIntradayData;
  window.fetchStockDailyData = fetchStockDailyData;
  ReactDOM.render(<Root store={store}/>, root);
});
