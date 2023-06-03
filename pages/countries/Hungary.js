import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Hungary = () => {
  const [hungaryData, setHungaryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Hungary');
      setHungaryData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {hungaryData.map((hungary) => (
        <div key={hungary.Id}>
          <Flag ImageSrc={hungary.ImageSrc} Title={hungary.Title} />
          <GridInfo
            Population={hungary.Population}
            Capital={hungary.Capital}
            City={hungary.City}
            Currency={hungary.Currency}
            Language={hungary.Language}
            Statue={hungary.Statue}
            SehirPhoto={hungary.CityPhoto}
            VisitNumber={hungary.CityNumber}
            Title={hungary.Title}
            Desc={hungary.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Hungary;
