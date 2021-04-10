import "./RadioButtons.css";
import Arrow from "../../Assets/up-arrow.png";
import ReactTooltip from "react-tooltip";

function RadioButtons(props) {
  return (
    <div className="radio-buttons__wrapper">
      <table className="radio-buttons__table">
        <tbody>
          <tr>
            <td
              id="first"
              className={
                props.buttonVal === "-YearReleased"
                  ? "radio-buttons__td first radio-button--highlight"
                  : "radio-buttons__td first"
              }
              onClick={(e) => props.onClick("-YearReleased")}
              data-tip="Sort by year"
            >
              Year
            </td>
            <td
              id="second"
              className={
                props.buttonVal === "-US Sales (millions)"
                  ? "radio-buttons__td second radio-button--highlight"
                  : "radio-buttons__td second"
              }
              onClick={(e) => props.onClick("-US Sales (millions)")}
              data-tip="Sort by sales"
            >
              Sales
            </td>
            <td
              id="third"
              className={
                props.buttonVal === "-Review Score"
                  ? "radio-buttons__td third radio-button--highlight"
                  : "radio-buttons__td third"
              }
              onClick={(e) => props.onClick("-Review Score")}
              data-tip="Sort by review score"
            >
              Review Score
            </td>
            <td
              id="arrowBtn"
              className={
                props.arrowBtn
                  ? "radio-button__arrow"
                  : "radio-button__arrow arrowDown"
              }
              data-tip={
                props.arrowBtn
                  ? "Change to ascending order"
                  : "Change to descending order"
              }
            >
              <button className="radio-button__arrow__button">
                <img
                  src={Arrow}
                  alt="up-arrow"
                  onClick={props.onArrowClick}
                  id="arrowBtnImage"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <ReactTooltip place="top" type="dark" effect="float" />
    </div>
  );
}

export default RadioButtons;
