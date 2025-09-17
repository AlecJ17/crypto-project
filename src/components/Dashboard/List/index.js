import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";

function List({ coin }) {
  return (
    <tr className="list-row">
      <Tooltip title="Coin Logo" arrow placement="bottom-end">
        <td className="td-image">
          <img src={coin.image} alt={coin.name} className="coin-logo" />
        </td>
      </Tooltip>
      <Tooltip title="Coin Name" arrow placement="bottom-start">
        <td>
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="24h % Change" arrow placement="bottom-start">
        {coin.price_change_percentage_24h !== null &&
        coin.price_change_percentage_24h !== undefined ? (
          coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip">
                <TrendingUpRoundedIcon className="up-icon" />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
              <div className="icon-chip icon-chip-red">
                <TrendingDownRoundedIcon className="down-icon" />
              </div>
            </td>
          )
        ) : (
          <div className="price-chip">N/A</div>
        )}
      </Tooltip>
      <Tooltip title="Current Price" arrow placement="bottom">
        <td>
          <h3
            className="coin-price td-center-align"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
        </td>
      </Tooltip>
      <Tooltip title="Trading Volume" arrow placement="bottom">
        <td>
          <p className="total-volume td-right-align">
            ${coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" arrow placement="bottom">
        <td>
          <p className="total-volume td-right-align">
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
    </tr>
  );
}

export default List;
