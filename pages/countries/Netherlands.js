import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Netherlands = () => {
  const [netherlandsData, setNetherlandsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Netherlands');
      setNetherlandsData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {netherlandsData.map((netherlands) => (
        <div key={netherlands.Id}>
          <Flag
            ImageSrc={netherlands.ImageSrc}
            Title={(netherlands.Title = 'Netherl.')}
          />
          <GridInfo
            Population={netherlands.Population}
            Capital={netherlands.Capital}
            City={netherlands.City}
            Currency={netherlands.Currency}
            Language={netherlands.Language}
            Statue={netherlands.Statue}
            SehirPhoto={netherlands.CityPhoto}
            VisitNumber={netherlands.CityNumber}
            Title={netherlands.Title}
            Desc={netherlands.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Netherlands;
