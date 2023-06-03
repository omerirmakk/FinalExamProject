import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Kosovo = () => {
  const [kosovoData, setKosovoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Kosovo');
      setKosovoData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {kosovoData.map((kosovo) => (
        <div key={kosovo.Id}>
          <Flag ImageSrc={kosovo.ImageSrc} Title={kosovo.Title} />
          <GridInfo
            Population={kosovo.Population}
            Capital={kosovo.Capital}
            City={kosovo.City}
            Currency={kosovo.Currency}
            Language={kosovo.Language}
            Statue={kosovo.Statue}
            SehirPhoto={kosovo.CityPhoto}
            VisitNumber={kosovo.CityNumber}
            Title={kosovo.Title}
            Desc={kosovo.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Kosovo;
