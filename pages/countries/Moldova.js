import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Moldova = () => {
  const [moldovaData, setMoldovaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Moldova');
      setMoldovaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {moldovaData.map((moldova) => (
        <div key={moldova.Id}>
          <Flag ImageSrc={moldova.ImageSrc} Title={moldova.Title} />
          <GridInfo
            Population={moldova.Population}
            Capital={moldova.Capital}
            City={moldova.City}
            Currency={moldova.Currency}
            Language={moldova.Language}
            Statue={moldova.Statue}
            SehirPhoto={moldova.CityPhoto}
            VisitNumber={moldova.CityNumber}
            Title={moldova.Title}
            Desc={moldova.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Moldova;
