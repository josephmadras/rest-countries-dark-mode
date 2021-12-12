import "./Country.css";

const Country = ({flag, country, population, region, capital, props}) => {
  return (
    <div className="country" {...props}>
      <div className='country__flag'>
        <img src={flag} alt="country flag" className='flag'/>
      </div>
      <div className='country__details'>
        <h1>{country}</h1>
        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default Country
