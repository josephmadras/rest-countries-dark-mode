import { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import axios from "axios";
import "./App.css";

const CountryDetails = lazy(() =>
  import("./components/CountryDetails/CountryDetails")
);
const Countries = lazy(() => import("./components/CountryList/CountryList"));

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
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Countries countries={countries} />} />
            <Route path="/:name" element={<CountryDetails />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
