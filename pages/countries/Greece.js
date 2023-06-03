import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Greece = () => {
  const [greeceData, setGreeceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Greece');
      setGreeceData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {greeceData.map((greece) => (
        <div key={greece.Id}>
          <Flag ImageSrc={greece.ImageSrc} Title={greece.Title} />
          <GridInfo
            Population={greece.Population}
            Capital={greece.Capital}
            City={greece.City}
            Currency={greece.Currency}
            Language={greece.Language}
            Statue={greece.Statue}
            SehirPhoto={greece.CityPhoto}
            VisitNumber={greece.CityNumber}
            Title={greece.Title}
            Desc={greece.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Greece;
