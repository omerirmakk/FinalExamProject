import Layout from '@/components/Layout';
import MainCard from '@/components/MainCard';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Germany = () => {
  const [germanyData, setGermanyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Germany');
      setGermanyData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {germanyData.map((germany) => (
        <MainCard
          mainTitle={germany.Title}
          mainP={germany.Desc}
          mainPop={germany.Population}
          key={germany.Id}
        />
      ))}
    </Layout>
  );
};

export default Germany;
