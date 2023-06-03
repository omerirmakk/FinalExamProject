import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Bosnia = () => {
  const [bosniaData, setBosniaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Bosnia and Herzegovina');
      setBosniaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {bosniaData.map((bosnia) => (
        <div key={bosnia.Id}>
          <Flag ImageSrc={bosnia.ImageSrc} Title={(bosnia.Title = 'Bosnia')} />
          <GridInfo
            Population={bosnia.Population}
            Capital={bosnia.Capital}
            City={bosnia.City}
            Currency={bosnia.Currency}
            Language={bosnia.Language}
            Statue={bosnia.Statue}
            SehirPhoto={bosnia.CityPhoto}
            VisitNumber={bosnia.CityNumber}
            Title={bosnia.Title}
            Desc={bosnia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Bosnia;
