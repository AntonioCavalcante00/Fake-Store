import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

import { DefaultLayout } from "./components/layout/Main/DefaultLayout.tsx";

import { Home } from "./pages/Home.tsx";

import { client } from "./services/client.ts";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
