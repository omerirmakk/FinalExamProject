import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Romania = () => {
  const [romaniaData, setRomaniaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Romania');
      setRomaniaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {romaniaData.map((romania) => (
        <div key={romania.Id}>
          <Flag ImageSrc={romania.ImageSrc} Title={romania.Title} />
          <GridInfo
            Population={romania.Population}
            Capital={romania.Capital}
            City={romania.City}
            Currency={romania.Currency}
            Language={romania.Language}
            Statue={romania.Statue}
            SehirPhoto={romania.CityPhoto}
            VisitNumber={romania.CityNumber}
            Title={romania.Title}
            Desc={romania.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Romania;
