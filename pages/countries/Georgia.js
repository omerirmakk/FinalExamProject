import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Georgia = () => {
  const [georgiaData, setGeorgiaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Georgia');
      setGeorgiaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {georgiaData.map((georgia) => (
        <div key={georgia.Id}>
          <Flag ImageSrc={georgia.ImageSrc} Title={georgia.Title} />
          <GridInfo
            Population={georgia.Population}
            Capital={georgia.Capital}
            City={georgia.City}
            Currency={georgia.Currency}
            Language={georgia.Language}
            Statue={georgia.Statue}
            SehirPhoto={georgia.CityPhoto}
            VisitNumber={georgia.CityNumber}
            Desc={georgia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Georgia;
