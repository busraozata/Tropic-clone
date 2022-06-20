import React from "react";
import Locations from "../components/Locations/Locations";
import useScrollToTop from "../hooks/useScrollToTop";

export default function LocationPage() {
  useScrollToTop();
  return (
    <>
      <Locations page={true} />
    </>
  );
}
