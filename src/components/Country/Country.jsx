const Country = ({flag, country, population, region, capital, props}) => {
  return (
    <div class="country" {...props}>
      <div>
        <img src={flag} alt="country card"/>
      </div>
      <div>
      <h1>{Country}</h1>
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
