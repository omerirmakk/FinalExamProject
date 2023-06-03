import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Russia = () => {
  const [russiaData, setRussiaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Russia');
      setRussiaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {russiaData.map((russia) => (
        <div key={russia.Id}>
          <Flag ImageSrc={russia.ImageSrc} Title={russia.Title} />
          <GridInfo
            Population={russia.Population}
            Capital={russia.Capital}
            City={russia.City}
            Currency={russia.Currency}
            Language={russia.Language}
            Statue={russia.Statue}
            SehirPhoto={russia.CityPhoto}
            VisitNumber={russia.CityNumber}
            Title={russia.Title}
            Desc={russia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Russia;
