import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import "swiper/css";
import { FaStar } from "react-icons/fa";

export default function Professionals() {
  const slideContent = [
    {
      img: "1.png",
      name: "JHON DOE",
      rate: 3,
    },
    {
      img: "2.png",
      name: "JANE DOE",
      rate: 5,
    },
    {
      img: "3.png",
      name: "JHON DOE",
      rate: 5,
    },
    {
      img: "4.png",
      name: "JANE DOE",
      rate: 5,
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      style={{ marginTop: "100px" }}
    >
      {slideContent.map((item, i) => (
        <SwiperSlide key={i}>
          <div className={styles.item}>
            <picture>
              <img src={item.img} alt="" />
            </picture>
            <p>{item.name}</p>
            <div>
              {Array.from(Array(item.rate).keys()).map((item, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
