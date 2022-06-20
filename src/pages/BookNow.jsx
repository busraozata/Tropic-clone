import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

export default function BookNow() {
  useScrollToTop();
  return (
    <>
      <Hero isDynamic> Book Now </Hero>
    </>
  );
}
