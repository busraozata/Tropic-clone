import React from "react";
import Hero from "../components/Hero/Hero";
import useScrollToTop from "../hooks/useScrollToTop";

export default function Pricing() {
  useScrollToTop();
  return (
    <>
      <Hero isDynamic> Pricing </Hero>
    </>
  );
}
