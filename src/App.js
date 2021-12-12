import {useState, useEffect} from "react";
import axios from "axios";
import CountryList from "./components/CountryList/CountryList"
import "./App.css";

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {

     const getCountries = async() => {
        const result = await axios.get("https://restcountries.com/v2/all");
        const data = await result.data;
        setCountries(data);
    }

    getCountries();

  }, []);

  return (
    <div className="app">
      {/* <h1>REST Countries API</h1> */}
      <CountryList countries={countries}/>
    </div>
  );
}

export default App;
