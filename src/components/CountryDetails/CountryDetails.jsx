import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CountryDetails.css";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryInfo, setCountryInfo] = useState([]);

  useEffect(() => {
    const getCountryDetails = async () => {
      const result = await axios.get(
        `https://restcountries.com/v2/name/${name}`
      );
      const data = await result.data;
      setCountryInfo(data);
    };

    getCountryDetails();
  });

  return (
    <div>
      <h1>Country Details</h1>
      <p>{JSON.stringify(countryInfo)}</p>
    </div>
  );
};

export default CountryDetails;
