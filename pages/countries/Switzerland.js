import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Switzerland = () => {
  const [switzerlandData, setSwitzerlandData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Switzerland');
      setSwitzerlandData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {switzerlandData.map((switzerland) => (
        <div key={switzerland.Id}>
          <Flag
            ImageSrc={switzerland.ImageSrc}
            Title={(switzerland.Title = 'Switzerl.')}
          />
          <GridInfo
            Population={switzerland.Population}
            Capital={switzerland.Capital}
            City={switzerland.City}
            Currency={switzerland.Currency}
            Language={switzerland.Language}
            Statue={switzerland.Statue}
            VisitNumber={switzerland.CityNumber}
            Title={switzerland.Title}
            Desc={switzerland.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Switzerland;
