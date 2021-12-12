import Country from "../Country/Country";

const CountryList = ({countries}) => {
  return (
    <div className='countries'>
      {
        countries.map(({flag, country, population, region, capital}) => {
          return (
            <Country 
             key={country} 
             flag={flag} 
             country={country} 
             population={population} 
             capital={capital}/>
          )
        })
      }
    </div>
  )
}

export default CountryList
