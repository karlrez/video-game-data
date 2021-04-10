import React, { useEffect } from "react";
import "./Games.css";
import Game from "../Game/Game";
import SearchBar from "../SearchBar/SearchBar";
import RadioButtons from "../RadioButtons/RadioButtons";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import MoonLoader from "react-spinners/ClipLoader";

function Games() {
  const [data, setData] = React.useState({});
  const [searchInput, setSearchInput] = React.useState({
    titleInput: "",
    publisherInput: "",
    radioButtonInput: "-YearReleased",
    arrowBtn: true, // pointing up if true
    pageNum: 1, // pagination number
    limit: 20, // records per page
  });
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    // API appends '-' to radioButtonInput for desc sort
    let radioButtonVal;
    if (searchInput.arrowBtn) {
      radioButtonVal =
        searchInput.radioButtonInput.charAt(0) === "-"
          ? searchInput.radioButtonInput
          : "-" + searchInput.radioButtonInput;
    } else
      radioButtonVal =
        searchInput.radioButtonInput.charAt(0) === "-"
          ? searchInput.radioButtonInput.substring(1)
          : searchInput.radioButtonInput;

    setLoading(true);
    fetch(
      `https://video-game-data-api.herokuapp.com/api/video-game-data/data/?page=${searchInput.pageNum}&limit=${searchInput.limit}&sort=${radioButtonVal}&filterTitle=${searchInput.titleInput}&filterPublisher=${searchInput.publisherInput}`,
      //`http://localhost:5000/api/video-game-data/data/?page=${searchInput.pageNum}&limit=${searchInput.limit}&sort=${radioButtonVal}&filterTitle=${searchInput.titleInput}&filterPublisher=${searchInput.publisherInput}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log("Something wrong with api :("));
  }, [searchInput]);

  const onTitleInputChange = (e) => {
    setSearchInput({
      ...searchInput,
      titleInput: e.target.value.toLowerCase(),
    });
  };

  const onPublisherInputChange = (e) => {
    setSearchInput({
      ...searchInput,
      publisherInput: e.target.value.toLowerCase(),
    });
  };

  const onRadioButtonClick = (selection) => {
    setSearchInput({
      ...searchInput,
      radioButtonInput: selection,
    });
  };

  const onArrowClick = () => {
    setSearchInput({ ...searchInput, arrowBtn: !searchInput.arrowBtn });
  };

  const onLoadMoreBtnClick = () => {
    setSearchInput({
      ...searchInput,
      limit: searchInput.limit + 20,
    });
  };

  // Takes the records from the data array and returns game components for each
  const createGameComponents = () => {
    let gamesList = data.data.videoGames.map((row, index) => {
      return <Game gameData={row} key={index} />;
    });
    return gamesList;
  };

  return (
    <div className="games">
      <SearchBar
        placeholder="Search by Title..."
        onChange={onTitleInputChange}
      />
      <SearchBar
        placeholder="Search by Publisher..."
        onChange={onPublisherInputChange}
      />
      <RadioButtons
        onClick={onRadioButtonClick}
        onArrowClick={onArrowClick}
        buttonVal={searchInput.radioButtonInput}
        arrowBtn={searchInput.arrowBtn}
      />

      {loading && (
        <div className="spinner">
          <MoonLoader color="red" loading={loading} size={180} />
        </div>
      )}

      <p>
        {data.data &&
          `Showing ${data.data.videoGames.length} of ${data.totalResults} Games`}
      </p>

      {data.data && createGameComponents()}

      {data.hasNextPage === true && (
        <LoadMoreBtn onClick={onLoadMoreBtnClick} />
      )}
    </div>
  );
}

export default Games;
