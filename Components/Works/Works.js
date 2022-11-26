import React from 'react'
import styles from "./Works.module.css"
import Slider from "react-slick";
import Image from 'next/image';
import img1 from "../../images/carousel-1.png"
import img2 from "../../images/carousel-2.png"
import img3 from "../../images/carousel-3.png"
import img4 from "../../images/carousel-4.png"
import img5 from "../../images/carousel-5.png"




const Works = () => {
  const reviews = [
    { id: 1, name: "adf", ratings: 3, text: "a;lksdfj;alksdjf" },
    { id: 1, name: "adf", ratings: 3, text: "a;lksdfj;alksdjf" },
    { id: 1, name: "adf", ratings: 3, text: "a;lksdfj;alksdjf" },
    { id: 1, name: "adf", ratings: 3, text: "a;lksdfj;alksdjf" },
    { id: 1, name: "adf", ratings: 3, text: "a;lksdfj;alksdjf" },
  ]

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "yellow" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "yellow" }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#FBD062", marginTop: "50px" }}></div>
        </a>
      );
    },
    dots: true,
    infinite: true,
    // className: "center",
    // centerMode: true,
    speed: 500,
    slidesToShow: 2,
    centerPadding: "60px",
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Here are some of <span>our works</span></h1>
      <div style={{ margin: "50px" }}>
        <Slider {...settings}>
          <div className={styles.slide}>
            <Image
              className={styles.image}
              src={img1}
              alt="image"
            />
          </div>
          <div className={styles.slide}>
            <Image
              className={styles.image}
              src={img5}
              alt="image"
            />
          </div>
          <div className={styles.slide}>
            <Image
              className={styles.image}
              src={img3}
              alt="image"
            />
          </div>
          <div className={styles.slide}>
            <Image
              className={styles.image}
              src={img4}
              alt="image"
            />
          </div>
          <div className={styles.slide}>
            <Image
              className={styles.image}
              src={img2}
              alt="image"
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Works