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
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }


  const settings = {
    customPaging: function (i) {
      return (
        <a>
          {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#FBD062", marginTop: "50px" }}></div>
        </a>
      );
    },
    dots: true,
    infinite: true,
    className: "center",
    centerMode: true,
    speed: 500,
    slidesToShow: 2,
    centerPadding: "60px",
    // slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Here are some of <span>our works</span></h1>
      <div style={{ margin: "50px" }}>
        <Slider {...settings}>
          <div>
            <Image
              className={styles.image}
              src={img1}
              alt="image"
            // width={465}
            // height={335}
            />
          </div>
          <div>
            <Image
              className={styles.image}
              src={img5}
              alt="image"
            // width={465}
            // height={335}
            />
          </div>
          <div>
            <Image
              className={styles.image}
              src={img3}
              alt="image"
            // width={465}
            // height={335}
            />
          </div>
          <div>
            <Image
              className={styles.image}
              src={img4}
              alt="image"
            // width={465}
            // height={335}
            />
          </div>
          <div>
            <Image
              className={styles.image}
              src={img2}
              alt="image"
            // width={465}
            // height={335}
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Works