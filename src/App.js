import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import axios from "axios";
import CountryList from "./components/CountryList/CountryList";
import Header from "./components/Header/Header";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const result = await axios.get("https://restcountries.com/v2/all");
      const data = await result.data;
      setCountries(data);
    };

    getCountries();
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
