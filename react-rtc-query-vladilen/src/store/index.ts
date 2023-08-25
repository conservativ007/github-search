import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { gitHubApi } from './github/gitHubApi';

import userReducer from './reducers/UserSlice';
import githubReducer from './github/github.slice';

const rootReducer = combineReducers({
  [gitHubApi.reducerPath]: gitHubApi.reducer,
  userReducer,
  githubReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(gitHubApi.middleware),
  });
};

// export const store = configureStore({
//   reducer: {
//     rootReducer,
//   },
// });

// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
