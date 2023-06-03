import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Italy = () => {
  const [italyData, setItalyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Italy');
      setItalyData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {italyData.map((italy) => (
        <div key={italy.Id}>
          <Flag ImageSrc={italy.ImageSrc} Title={italy.Title} />
          <GridInfo
            Population={italy.Population}
            Capital={italy.Capital}
            City={italy.City}
            Currency={italy.Currency}
            Language={italy.Language}
            Statue={italy.Statue}
            SehirPhoto={italy.CityPhoto}
            VisitNumber={italy.CityNumber}
            Title={italy.Title}
            Desc={italy.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Italy;
