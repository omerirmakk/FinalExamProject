import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const FaroeIslands = () => {
  const [faroeIslandsData, setFaroeIslandsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Faroe Islands');
      setFaroeIslandsData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {faroeIslandsData.map((faroeIslands) => (
        <div key={faroeIslands.Id}>
          <Flag ImageSrc={faroeIslands.ImageSrc} Title={faroeIslands.Title = "Faroe I."} />
          <GridInfo
            Population={faroeIslands.Population}
            Capital={faroeIslands.Capital}
            City={faroeIslands.City}
            Currency={faroeIslands.Currency}
            Language={faroeIslands.Language}
            Statue={faroeIslands.Statue}
            SehirPhoto={faroeIslands.CityPhoto}
            VisitNumber={faroeIslands.CityNumber}
            Title={faroeIslands.Title}
            Desc={faroeIslands.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default FaroeIslands;
