import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Latvia = () => {
  const [latviaData, setLatviaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Latvia');
      setLatviaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {latviaData.map((latvia) => (
        <div key={latvia.Id}>
          <Flag ImageSrc={latvia.ImageSrc} Title={latvia.Title} />
          <GridInfo
            Population={latvia.Population}
            Capital={latvia.Capital}
            City={latvia.City}
            Currency={latvia.Currency}
            Language={latvia.Language}
            Statue={latvia.Statue}
            SehirPhoto={latvia.CityPhoto}
            VisitNumber={latvia.CityNumber}
            Title={latvia.Title}
            Desc={latvia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Latvia;
