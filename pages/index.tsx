import styles from "../styles/home.module.scss";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>
            READY TO TRAIN <span> YOUR BODY</span>
          </h1>
          <p>
            Gym training is a structured and disciplined approach to physical
            exercise that focuses on strength, endurance and overall fitness
            improvement.
          </p>
          <button>LETS JOIN NOW</button>
          <div className={styles.slugContainer}>
            <div>
              <p>20+</p>
              <span>Years of Experience</span>
            </div>
            <div>
              <p>15k+</p>
              <span>Members Join</span>
            </div>
            <div>
              <p>14k+</p>
              <span>Happy members</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <p>
            LEVEL
            <br /> UP
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.header}>
          <h2>
            <b>WHY</b> CHOOSE US
          </h2>
          <p>
            Gym workouts offer a versatile and customisable experience, allowing
            everyone to set specific fitness goals.
          </p>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <span>01</span>
            <p className={styles.title}>PERSONAL TRAINING</p>
            <p className={styles.text}>
              Our gyms offer personalized training sessions with certified
              personal trainers who create customized workout plans based on
              individual goals
            </p>
          </div>
          <div className={styles.card}>
            <span>02</span>
            <p className={styles.title}>EQUIPMENT AND FACILITIES</p>
            <p className={styles.text}>
              Our gyms offer personalized training sessions with certified
              personal trainers who create customized workout plans based on
              individual goals
            </p>
          </div>
          <div className={styles.card}>
            <span>03</span>
            <p className={styles.title}>NUTRITION COUNSELING</p>
            <p className={styles.text}>
              Our gyms offer personalized training sessions with certified
              personal trainers who create customized workout plans based on
              individual goals
            </p>
          </div>
          <div className={styles.card}>
            <span>04</span>
            <p className={styles.title}>SPECIALITY PROGRAMS</p>
            <p className={styles.text}>
              Our gyms offer personalized training sessions with certified
              personal trainers who create customized workout plans based on
              individual goals
            </p>
          </div>
        </div>
      </section>

      <section className={styles.experience}>
        <div className={styles.left}>
          <h2>
            WE HAVE A LOT OF <b>EXPERIENCE</b>
          </h2>
          <p>
            In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam
            lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at
            lacus consequat justo odio condimentum dui. Faucibus id blandit
            feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut
            facilisi vel.
          </p>
          <p>
            Sem consequat fermentum pellentesque risus purus quis gravida. Nulla
            porttitor ultrices facilisis non commodo diam morbi cursus eu.
            Semper ut in mauris gravida id cursus urna. Magnis vulputate orci
            risus felis eget lectus morbi. Et cursus mauris condimentum pretium
            arcu sed dignissim.
          </p>

          <button>ABOUT US</button>
        </div>
        <div className={styles.right}>
          <img src="experience.png" alt="" />
        </div>
        <div></div>
      </section>

      <section className={styles.professionals}>
        <div className={styles.header}>
          <h2>
            OUR PROFESSIONAL <br />
            <b>TRAINERS</b>
          </h2>
          <p>
            Whether you're looking to set up a home gym or enhance your current
            workout routine
          </p>
        </div>
      </section>
    </>
  );
}
