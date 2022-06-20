import React from "react";
import classes from "./Hero.module.scss";
import coverVID from "./../../assets/cover.mp4";
import Button from "./../../UI/Button/Button";

const HomePageContent = () => {
  return (
    <>
      <h1 className={classes.hero__content__title}>the tropics are waiting</h1>
      <span className={classes.hero__content__tagline}>
        Let us know when you're finished packing
      </span>
      <p className={classes.hero__content__description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae
        itaque ea ducimus, mollitia voluptate laudantium.
      </p>
      <div className={classes.hero__content__cta}>
        <Button to="/booknow">Book Now</Button>
        <Button to="/learnmore">Learn More</Button>
      </div>
    </>
  );
};

export default function Hero({ isDynamic, children }) {
  return (
    <section
      className={`${classes.heroArea} d-flex justify-content-center align-items-center`}
    >
      <div className={`container`}>
        <video
          muted
          loop
          className={`${classes.video}`}
          id={"video"}
          src={coverVID}
          autoPlay={true}
        ></video>
        <div className={classes.hero__content}>
          {!isDynamic && <HomePageContent />}
          {isDynamic && (
            <h1 className={classes.hero__content__title}>{children}</h1>
          )}
        </div>
      </div>
    </section>
  );
}
