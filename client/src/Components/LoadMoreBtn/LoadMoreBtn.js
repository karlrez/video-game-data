import "./LoadMoreBtn.css";

function LoadMoreBtn(props) {
  return (
    <button className="load-more-btn" onClick={props.onClick}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
