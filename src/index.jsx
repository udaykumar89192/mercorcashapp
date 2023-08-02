import React from "react";
import ReactDOMClient from "react-dom/client";
import { CashApp } from "./screens/CashApp";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CashApp />);
