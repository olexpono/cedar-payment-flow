import styles from "./App.module.css";

function App() {
  return (
    <>
      <nav className={styles.nav}>
        <h1>
          <span className="sr-only">ABC Health System</span>
          <img
            alt="ABC Health System Logo"
            src="/assets/providers/ABC_Health.svg"
          />
        </h1>
      </nav>
    </>
  );
}

export default App;
