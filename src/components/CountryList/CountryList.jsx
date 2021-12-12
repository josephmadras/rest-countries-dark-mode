import Country from "../Country/Country";
import RegionFilter from "../RegionFilter/RegionFilter";
import SearchField from "../SearchField/SearchField";
import "./CountryList.css";

const CountryList = ({ countries }) => {
  return (
    <>
      <div class="search-filter-container">
        <SearchField />
        <RegionFilter />
      </div>
      <div className="countries">
        {countries.map(({ flag, name, population, region, capital }) => {
          return (
            <Country
              key={name}
              flag={flag}
              country={name}
              population={population}
              capital={capital}
              region={region}
            />
          );
        })}
      </div>
    </>
  );
};

export default CountryList;
