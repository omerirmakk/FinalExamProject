import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Albania = () => {
  const [albaniaData, setAlbaniaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Albania');
      setAlbaniaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {albaniaData.map((albania) => (
        <div key={albania.Id}>
          <Flag ImageSrc={albania.ImageSrc} Title={albania.Title} />
          <GridInfo
            Population={albania.Population}
            Capital={albania.Capital}
            City={albania.City}
            Currency={albania.Currency}
            Language={albania.Language}
            Statue={albania.Statue}
            SehirPhoto={albania.CityPhoto}
            VisitNumber={albania.CityNumber}
            Title={albania.Title}
            Desc={albania.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Albania;
