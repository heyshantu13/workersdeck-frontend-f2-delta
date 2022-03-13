import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {store}  from './app/store';
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import Loader from "./components/Loader";
import ErrorBoundary from "./Hoc/ErrorBoundary";


Sentry.init({
  dsn: "https://ee069fb59d054b899b89421f4fcfd6f9@o1163934.ingest.sentry.io/6252573",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
    <Provider store={store}>
      <PersistGate loading={ <Loader size={30} thickness={8} color={"#3f51b5"}/>} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
