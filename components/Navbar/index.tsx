import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.wrapper}>
          <img src="logo.png" alt="" />
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>Trainers</li>
            <li>Testimonials</li>
            <li>Contact us</li>
          </ul>
          <button>Started now</button>
        </div>
      </nav>
    </>
  );
}
