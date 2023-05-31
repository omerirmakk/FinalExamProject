import Layout from '@/components/Layout';
import MainCard from '@/components/MainCard';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Poland = () => {
  const [polandData, setPolandData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Poland');
      setPolandData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {polandData.map((poland) => (
        <MainCard
          mainTitle={poland.Title}
          mainP={poland.Desc}
          mainPop={poland.Population}
          key={poland.Id}
        />
      ))}
    </Layout>
  );
};

export default Poland;
