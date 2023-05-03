import { useHistory } from "react-router-dom";

export default function BackButton({ text }) {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-end mb-3">
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "#042743" }}
        onClick={() => {
          history.goBack();
        }}
      >
        {text}
      </button>
    </div>
  );
}
