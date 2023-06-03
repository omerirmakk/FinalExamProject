import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Kazakhstan = () => {
  const [kazakhstanData, setKazakhstanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Kazakhstan');
      setKazakhstanData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {kazakhstanData.map((kazakhstan) => (
        <div key={kazakhstan.Id}>
          <Flag
            ImageSrc={kazakhstan.ImageSrc}
            Title={(kazakhstan.Title = 'Kazakh.')}
          />
          <GridInfo
            Population={kazakhstan.Population}
            Capital={kazakhstan.Capital}
            City={kazakhstan.City}
            Currency={kazakhstan.Currency}
            Language={kazakhstan.Language}
            Statue={kazakhstan.Statue}
            SehirPhoto={kazakhstan.CityPhoto}
            VisitNumber={kazakhstan.CityNumber}
            Title={kazakhstan.Title}
            Desc={kazakhstan.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Kazakhstan;
