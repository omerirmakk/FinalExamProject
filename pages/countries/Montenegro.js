import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Montenegro = () => {
  const [montenegroData, setMontenegroData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Montenegro');
      setMontenegroData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {montenegroData.map((montenegro) => (
        <div key={montenegro.Id}>
          <Flag ImageSrc={montenegro.ImageSrc} Title={montenegro.Title} />
          <GridInfo
            Population={montenegro.Population}
            Capital={montenegro.Capital}
            City={montenegro.City}
            Currency={montenegro.Currency}
            Language={montenegro.Language}
            Statue={montenegro.Statue}
            SehirPhoto={montenegro.CityPhoto}
            VisitNumber={montenegro.CityNumber}
            Title={montenegro.Title}
            Desc={montenegro.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Montenegro;
