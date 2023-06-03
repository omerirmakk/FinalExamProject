import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const France = () => {
  const [franceData, setFranceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('France');
      setFranceData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {franceData.map((france) => (
        <div key={france.Id}>
          <Flag ImageSrc={france.ImageSrc} Title={france.Title} />
          <GridInfo
            Population={france.Population}
            Capital={france.Capital}
            City={france.City}
            Currency={france.Currency}
            Language={france.Language}
            Statue={france.Statue}
            SehirPhoto={france.CityPhoto}
            VisitNumber={france.CityNumber}
            Title={france.Title}
            Desc={france.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default France;
