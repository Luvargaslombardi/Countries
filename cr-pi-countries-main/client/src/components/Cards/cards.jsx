import Card from "../Card/card";

export default function Cards({ countries, firstIndex, lastIndex }) {
  return (
    <div>
      {countries?.slice(firstIndex, lastIndex).map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
}
