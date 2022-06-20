import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

export default function LearnMore() {
  useScrollToTop();
  return (
    <>
      <Hero isDynamic> Learn More </Hero>
    </>
  );
}
