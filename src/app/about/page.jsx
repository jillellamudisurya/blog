import AboutCard from "./components/card";
import Styles from "./style.module.css";

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <div className={Styles.cardsContainer}>
        <AboutCard className={Styles.card1} />
        <AboutCard className={Styles.card2} />
        <AboutCard className={Styles.card3} />
        <AboutCard className={Styles.card4} />
      </div>
    </main>
  );
}
