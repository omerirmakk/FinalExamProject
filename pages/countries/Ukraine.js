import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Ukraine = () => {
  const [ukraineData, setUkraineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Ukraine');
      setUkraineData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {ukraineData.map((ukraine) => (
        <>
          <Flag ImageSrc={ukraine.ImageSrc} Title={ukraine.Title} />
          <GridInfo
            Population={ukraine.Population}
            Capital={ukraine.Capital}
            City={ukraine.City}
            Currency={ukraine.Currency}
            Language={ukraine.Language}
            Statue={ukraine.Statue}
            SehirPhoto={ukraine.CityPhoto}
            VisitNumber={ukraine.CityNumber}
            Title={ukraine.Title}
            Desc={ukraine.Desc}
          />
        </>
      ))}
    </Layout>
  );
};

export default Ukraine;
