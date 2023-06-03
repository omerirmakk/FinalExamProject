import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const AlandIslands = () => {
  const [alandData, setAlandData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Aland Islands');
      setAlandData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {alandData.map((aland) => (
        <div key={aland.Id}>
          <Flag ImageSrc={aland.ImageSrc} Title={aland.Title = "Aland I."} />
          <GridInfo
            Population={aland.Population}
            Capital={aland.Capital}
            City={aland.City}
            Currency={aland.Currency}
            Language={aland.Language}
            Statue={aland.Statue}
            SehirPhoto={aland.CityPhoto}
            VisitNumber={aland.CityNumber}
            Title={aland.Title}
            Desc={aland.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default AlandIslands;
