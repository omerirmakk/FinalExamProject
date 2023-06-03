import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Bulgaria = () => {
  const [bulgariaData, setBulgariaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Bulgaria');
      setBulgariaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {bulgariaData.map((bulgaria) => (
        <div key={bulgaria.Id}>
          <Flag ImageSrc={bulgaria.ImageSrc} Title={bulgaria.Title} />
          <GridInfo
            Population={bulgaria.Population}
            Capital={bulgaria.Capital}
            City={bulgaria.City}
            Currency={bulgaria.Currency}
            Language={bulgaria.Language}
            Statue={bulgaria.Statue}
            SehirPhoto={bulgaria.CityPhoto}
            VisitNumber={bulgaria.CityNumber}
            Title={bulgaria.Title}
            Desc={bulgaria.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Bulgaria;
