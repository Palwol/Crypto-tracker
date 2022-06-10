import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.boxColor};
  padding: 10px;
`;

const Item = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 12px;
  margin: 5px;
  display: flex;
  align-items: center;
  span:first-child {
    font-weight: 100;
    color: ${(props) => props.theme.accentColor};
    margin-right: 5px;
  }
`;

interface PriceProps {
  tickersData: {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  };
}

function Price() {
  const { tickersData } = useOutletContext<PriceProps>();
  const priceData = tickersData.quotes.USD;
  return (
    <Container>
      <Item>
        <span>Price</span>
        <span>${Number(priceData.price.toFixed(2)).toLocaleString("en")}</span>
      </Item>
      <Item>
        <span>Change Percentage(24h)</span>
        <span>{priceData.percent_change_24h}%</span>
      </Item>
      <Item>
        <span>Volume(24h)</span>
        <span>
          {Number(priceData.volume_24h.toFixed(2)).toLocaleString("en")}
        </span>
      </Item>
      <Item>
        <span>Market cap</span>
        <span>
          ${Number(priceData.market_cap.toFixed(2)).toLocaleString("en")}
        </span>
      </Item>
      <Item>
        <span>All-Time-High</span>
        <span>
          ${Number(priceData.ath_price.toFixed(2)).toLocaleString("en")}
        </span>
      </Item>
    </Container>
  );
}

export default Price;
