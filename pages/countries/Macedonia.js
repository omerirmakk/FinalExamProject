import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Macedonia = () => {
  const [macedoniaData, setMacedoniaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Macedonia');
      setMacedoniaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {macedoniaData.map((macedonia) => (
        <div key={macedonia.Id}>
          <Flag ImageSrc={macedonia.ImageSrc} Title={macedonia.Title} />
          <GridInfo
            Population={macedonia.Population}
            Capital={macedonia.Capital}
            City={macedonia.City}
            Currency={macedonia.Currency}
            Language={macedonia.Language}
            Statue={macedonia.Statue}
            SehirPhoto={macedonia.CityPhoto}
            VisitNumber={macedonia.CityNumber}
            Title={macedonia.Title}
            Desc={macedonia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Macedonia;
