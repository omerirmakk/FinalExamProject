import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Spain = () => {
  const [spainData, setSpainData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Spain');
      setSpainData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {spainData.map((spain) => (
        <>
          <Flag ImageSrc={spain.ImageSrc} Title={spain.Title} />
          <GridInfo
            Population={spain.Population}
            Capital={spain.Capital}
            City={spain.City}
            Currency={spain.Currency}
            Language={spain.Language}
            Statue={spain.Statue}
            SehirPhoto={spain.CityPhoto}
            VisitNumber={spain.CityNumber}
            Title={spain.Title}
            Desc={spain.Desc}
          />
        </>
      ))}
    </Layout>
  );
};

export default Spain;
