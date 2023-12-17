import { Test } from "../../types/test";
import { testType } from "../../lib/test-type";
import { testStatus } from "../../lib/test-status";
import { testState } from "../../lib/test-state";
import { Button } from "../button/button";
import "./style.css";

type ListItemProps = {
  item: Test;
};

export function ListItem({ item }: ListItemProps) {
  const status =
    item.status.slice(0, 1).toUpperCase() + item.status.slice(1).toLowerCase();

  const statusStyle = testStatus[status.toUpperCase()].color
    ? {
        color: testStatus[status.toUpperCase()].color,
      }
    : undefined;

  const buttonValue =
    item.status.toLowerCase() === "draft" ? "Finalize" : "Results";

  const buttonStyle =
    item.status.toLowerCase() === "draft"
      ? {
          fontWeight: 500,
          backgroundColor: "#7D7D7D",
        }
      : undefined;

  return (
    <li className="list-item">
      <div className="list-item-bg" />
      <div className="list-item-container">
        <div
          className="list-item-state"
          style={{ backgroundColor: testState[item.siteId] }}
        />
        <p className="list-item-name">{item.name}</p>
        <p className="list-item-type">{testType[item.type]}</p>
        <p className="list-item-status" style={statusStyle}>
          {status}
        </p>
        <p className="list-item-site">{item.site}</p>
        <Button
          type="button"
          className="list-item-button"
          value={buttonValue}
          style={buttonStyle}
        />
      </div>
    </li>
  );
}
