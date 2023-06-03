import Base from "../Base";
import "./index.scss";

interface IProps {}

export default function ExitConfirm() {
  return (
    <Base withBlur>
      <div className="exit-confirm-container">
        确认退出?
      </div>
    </Base>
  );
}