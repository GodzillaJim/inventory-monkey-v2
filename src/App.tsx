import React from "react";
import { Provider } from "react-redux";
import ThemeCustomization from "./theme";
import "./styles.css";
import { store } from "./store";
import AllRoutes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeCustomization>
        <AllRoutes />
      </ThemeCustomization>
    </Provider>
  );
};
export default App;
