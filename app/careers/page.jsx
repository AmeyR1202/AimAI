import Header from "@/components/header";
import React from "react";
import JoinUs from "./components/JoinUs";
import CareerCards from "./components/Roles";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <JoinUs />
      <CareerCards />
      <Footer />
    </div>
  );
};

export default page;
