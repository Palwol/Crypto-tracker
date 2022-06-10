import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Price from "./routes/Price";
import Chart from "./routes/Chart";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/:coinId"} element={<Coin />}>
          <Route path={process.env.PUBLIC_URL + "chart"} element={<Chart />} />
          <Route path={process.env.PUBLIC_URL + "price"} element={<Price />} />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Coins />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
