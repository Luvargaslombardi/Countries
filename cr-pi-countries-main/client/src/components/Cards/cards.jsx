import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ countries, firstIndex, lastIndex }) {
  return (
    <div className={styles.cardsContainer}>
      {" "}
      {countries?.slice(firstIndex, lastIndex).map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
}
