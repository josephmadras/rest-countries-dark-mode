import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Country from "../Country/Country";
import "./CountryList.css";

const CountryList = ({ countries, history }) => {
  const [query] = useState("");
  const navigate = useNavigate();
  const countriesFiltered = query
    ? countries.filter((country) => country.name === query)
    : countries;

  return (
    <div>
      <div className="countries">
        {countriesFiltered.map(
          ({ flag, name, population, region, capital }) => {
            return (
              <Country
                key={name}
                flag={flag}
                country={name}
                population={population}
                capital={capital}
                region={region}
                onClick={() => navigate(`/${name}`)}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default CountryList;
