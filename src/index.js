import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from "react-redux";
import {store, persistor} from "./_store";
import Loader from "./components/layout/loader/Loader";


ReactDOM.render(
    <Suspense fallback={<Loader/>}>
        <HashRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <App/>
                    </PersistGate>
                </Provider>
            </React.StrictMode>
        </HashRouter>
    </Suspense>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
