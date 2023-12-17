import { useAsyncValue, useNavigate } from "react-router-dom";
import { Test } from "../../types/test";
import "./style.css";
import { BackArrow } from "../back-arrow/back-arrow";

export function TestInfo() {
  const test = useAsyncValue() as Test;

  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <>
      <h1 className="main-title">
        {test.status === "DRAFT" ? "Finalize" : "Results"}
      </h1>
      <p className="test-info-name">{test.name}</p>
      <button className="test-info-button" onClick={handleClick}>
        <BackArrow />
        {`Back`}
      </button>
    </>
  );
}
