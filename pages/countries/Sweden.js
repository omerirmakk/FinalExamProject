import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Sweden = () => {
  const [swedenData, setSwedenData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Sweden');
      setSwedenData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {swedenData.map((sweden) => (
        <div key={sweden.Id}>
          <Flag ImageSrc={sweden.ImageSrc} Title={sweden.Title} />
          <GridInfo
            Population={sweden.Population}
            Capital={sweden.Capital}
            City={sweden.City}
            Currency={sweden.Currency}
            Language={sweden.Language}
            Statue={sweden.Statue}
            SehirPhoto={sweden.CityPhoto}
            VisitNumber={sweden.CityNumber}
            Title={sweden.Title}
            Desc={sweden.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Sweden;
