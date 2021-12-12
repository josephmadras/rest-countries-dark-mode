import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  const [countryInfo, setCountryInfo] = useState([]);

  return <div>{/* <h1>{countryInfo[0].name}</h1> */}</div>;
};

export default CountryDetails;
