import React, { useEffect } from "react";
import "./Games.css";
import Game from "../Game/Game";
import SearchBar from "../SearchBar/SearchBar";
import RadioButtons from "../RadioButtons/RadioButtons";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import MoonLoader from "react-spinners/ClipLoader";

function Games() {
  const [data, setData] = React.useState([0]);
  const [searchInput, setSearchInput] = React.useState({
    titleInput: "",
    publisherInput: "",
    radioButtonInput: "year",
    arrowBtn: true, // pointing up if true
    numOfGames: 20, // pagination number
  });

  useEffect(() => {
    fetch(
      "https://video-game-data-api.herokuapp.com/api/video-game-data/data",
      //"http://localhost:5000/api/video-game-data/data",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((error) => alert("Sorry! Looks like my api is not working :("));
  }, []);

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
      numOfGames: searchInput.numOfGames + 20,
    });
  };

  // Takes the records from the dataset as an array and returns
  // Game components for each
  const createGameComponents = (gamesArray) => {
    let gamesList = gamesArray.slice(0, searchInput.numOfGames).map((row) => {
      return <Game gameData={row} key={row.id} />;
    });
    console.log("finished creating game components");
    return gamesList;
  };

  let resultsCount; // Just want this for load more btn

  const sortGames = (gamesArray) => {
    // These variables need to change for ascending/descending ordering
    const val1 = searchInput.arrowBtn ? -1 : 1;
    const val2 = searchInput.arrowBtn ? 1 : -1;

    switch (searchInput.radioButtonInput) {
      case "year":
        resultsCount = gamesArray.length;
        return gamesArray.sort((a, b) =>
          a.YearReleased > b.YearReleased ? val1 : val2
        );
      case "sales":
        resultsCount = gamesArray.length;
        return gamesArray.sort((a, b) =>
          a["US Sales (millions)"] > b["US Sales (millions)"] ? val1 : val2
        );
      case "review-score":
        resultsCount = gamesArray.length;
        return gamesArray.sort((a, b) =>
          a["Review Score"] > b["Review Score"] ? val1 : val2
        );
      default:
        break;
    }
  };

  // Here we either pass all our game data to createGameComponents()
  // or filter some out
  let gamesList;

  if (!searchInput.titleInput && !searchInput.publisherInput) {
    gamesList = createGameComponents(sortGames(data));
  } else {
    let rowsCopy = [...data]; // dont want to manipulate actual data
    if (searchInput.titleInput) {
      rowsCopy = rowsCopy.filter((row) =>
        row.Title.toLowerCase().includes(searchInput.titleInput.toLowerCase())
      );
    }
    if (searchInput.publisherInput) {
      rowsCopy = rowsCopy.filter((row) =>
        row.Publisher.toLowerCase().includes(
          searchInput.publisherInput.toLowerCase()
        )
      );
    }
    gamesList = createGameComponents(sortGames(rowsCopy));
  }

  //let spinner = <MoonLoader />;
  //if (data < 1) {
  //spinner = <Spinner />;
  //}

  return (
    <div className="games">
      <SearchBar
        placeholder="Search by Tile..."
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
      {gamesList}
      <MoonLoader color="red" loading={data < 1} size={150} />
      <p>
        Showing{" "}
        {searchInput.numOfGames > resultsCount
          ? resultsCount
          : searchInput.numOfGames}{" "}
        of {resultsCount} results
      </p>
      {resultsCount > 20 ? <LoadMoreBtn onClick={onLoadMoreBtnClick} /> : null}
    </div>
  );
}
export default Games;
