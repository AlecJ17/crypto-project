import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";

function DashboardPage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&order=market_cap_desc&per_page=100&page=1&include_tokens=all&locale=en&precision=2"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response);
        setCoins(response.data);
      })
      .catch((error) => {
        console.log("Error>>>", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  );
}

export default DashboardPage;
