import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Lithuania = () => {
  const [lithuaniaData, setLithuaniaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Lithuania');
      setLithuaniaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {lithuaniaData.map((lithuania) => (
        <div key={lithuania.Id}>
          <Flag ImageSrc={lithuania.ImageSrc} Title={lithuania.Title} />
          <GridInfo
            Population={lithuania.Population}
            Capital={lithuania.Capital}
            City={lithuania.City}
            Currency={lithuania.Currency}
            Language={lithuania.Language}
            Statue={lithuania.Statue}
            SehirPhoto={lithuania.CityPhoto}
            VisitNumber={lithuania.CityNumber}
            Title={lithuania.Title}
            Desc={lithuania.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Lithuania;
