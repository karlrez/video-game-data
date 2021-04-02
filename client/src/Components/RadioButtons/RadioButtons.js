import "./RadioButtons.css";
import Arrow from "../../Assets/up-arrow.png";

function RadioButtons(props) {
  return (
    <div className="radio-buttons__wrapper">
      <table className="radio-buttons__table">
        <tbody>
          <tr>
            <td
              className={
                props.buttonVal === "-YearReleased"
                  ? "radio-buttons__td first radio-button--highlight"
                  : "radio-buttons__td first"
              }
              onClick={(e) => props.onClick("-YearReleased")}
            >
              Year
            </td>
            <td
              className={
                props.buttonVal === "-US Sales (millions)"
                  ? "radio-buttons__td second radio-button--highlight"
                  : "radio-buttons__td second"
              }
              onClick={(e) => props.onClick("-US Sales (millions)")}
            >
              Sales
            </td>
            <td
              className={
                props.buttonVal === "-Review Score"
                  ? "radio-buttons__td third radio-button--highlight"
                  : "radio-buttons__td third"
              }
              onClick={(e) => props.onClick("-Review Score")}
            >
              Review Score
            </td>
            <td
              className={
                props.arrowBtn
                  ? "radio-button__arrow"
                  : "radio-button__arrow arrowDown"
              }
            >
              <button className="radio-button__arrow__button">
                <img src={Arrow} alt="up-arrow" onClick={props.onArrowClick} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RadioButtons;
