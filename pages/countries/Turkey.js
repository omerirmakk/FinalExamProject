import Layout from "@/components/Layout";
import MainCard from "@/components/MainCard";
import Country from "../../data.json";
import { useEffect } from "react";

const Turkey = () => {
  return (
    <Layout>
      {Country.turkey.map((t) => (
        <MainCard
          source={t.countryPhoto}
          mainTitle={t.countryTitle}
          mainP={t.countryDesc}
        ></MainCard>
      ))}
    </Layout>
  );
};
export default Turkey;
