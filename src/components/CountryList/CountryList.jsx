import Country from "../Country/Country";
import "./CountryList.css";

const CountryList = ({countries}) => {
  return (
    <div className='countries'>
      {
        countries.map(({flag, name, population, region, capital}) => {
          return (
            <Country 
             key={name} 
             flag={flag} 
             country={name} 
             population={population} 
             capital={capital}
             region={region}/>
          )
        })
      }
    </div>
  )
}

export default CountryList
