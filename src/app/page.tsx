import styles from "./page.module.css";
import Header from "./components/structure/Header";
import Footer from "./components/structure/Footer";
import Landing from "./components/structure/home/Landing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Landing />
      <Footer />
    </main>
  );
}
