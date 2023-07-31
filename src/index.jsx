import React from "react";
import ReactDOMClient from "react-dom/client";
import { HowItWorks } from "./screens/HowItWorks";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<HowItWorks />);
