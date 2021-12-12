import { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CountryList/CountryList";
import Header from "./components/Header/Header";
import "./App.css";
import { Route, Routes } from "react-router";
import Country from "./components/Country/Country";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const result = await axios.get("https://restcountries.com/v2/all");
      const data = await result.data;
      setCountries(data);
    };

    getCountries();
    // console.log(countries);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<CountryList countries={countries} />} />
          <Route path="/:name" element={<CountryDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
