import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 5000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={
            [
              {
                name: "price",
                data: data?.map((price) => [
                  price.time_close,
                  price.open.toFixed(2),
                  price.high.toFixed(2),
                  price.low.toFixed(2),
                  price.close.toFixed(2),
                ]),
              },
            ] as any
          }
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: "candlestick",
              height: 300,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            xaxis: {
              type: "datetime",
              labels: {
                style: {
                  fontSize: "10px",
                },
              },
              tooltip: {
                enabled: false,
              },
            },
            yaxis: {
              labels: {
                show: false,
              },
              tooltip: {
                enabled: true,
              },
            },
            grid: {
              show: false,
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
