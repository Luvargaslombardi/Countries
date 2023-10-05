import { Link } from "react-router-dom";

export default function Card({ country }) {
  return (
    <div>
      <h1>{country.name}</h1>
      <Link to={`/detail/${country.id}`}>
        <img src={country.flag} alt={country.name} />
      </Link>
      <h2>{country.region}</h2>
    </div>
  );
}
