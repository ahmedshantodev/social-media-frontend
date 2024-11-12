import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-loading-skeleton/dist/skeleton.css'

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </HelmetProvider>
  // </StrictMode>
);
