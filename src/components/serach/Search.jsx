import SearchIcon from "@mui/icons-material/Search";
import "./search.styles.scss"

const Search = () => {
  return (
    <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Rechercher"
          />
          <button type="submit" className="searchButton">
            <SearchIcon />
          </button>
        </div>
      </div>
  )
}

export default Search