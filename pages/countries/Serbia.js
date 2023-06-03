import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Serbia = () => {
  const [serbiaData, setSerbiaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Serbia');
      setSerbiaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {serbiaData.map((serbia) => (
        <div key={serbia.Id}>
          <Flag ImageSrc={serbia.ImageSrc} Title={serbia.Title} />
          <GridInfo
            Population={serbia.Population}
            Capital={serbia.Capital}
            City={serbia.City}
            Currency={serbia.Currency}
            Language={serbia.Language}
            Statue={serbia.Statue}
            SehirPhoto={serbia.CityPhoto}
            VisitNumber={serbia.CityNumber}
            Title={serbia.Title}
            Desc={serbia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Serbia;
