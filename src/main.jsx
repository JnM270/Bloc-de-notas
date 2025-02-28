//Bloc de notas. Juan Bauza

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BlocContextProvider from "./Contenido/BlocNCont";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BlocContextProvider>
      <App />
    </BlocContextProvider>
  </React.StrictMode>
);

