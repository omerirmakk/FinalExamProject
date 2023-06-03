import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Croatia = () => {
  const [croatiaData, setCroatiaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Croatia');
      setCroatiaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {croatiaData.map((croatia) => (
        <div key={croatia.Id}>
          <Flag ImageSrc={croatia.ImageSrc} Title={croatia.Title} />
          <GridInfo
            Population={croatia.Population}
            Capital={croatia.Capital}
            City={croatia.City}
            Currency={croatia.Currency}
            Language={croatia.Language}
            Statue={croatia.Statue}
            SehirPhoto={croatia.CityPhoto}
            VisitNumber={croatia.CityNumber}
            Title={croatia.Title}
            Desc={croatia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Croatia;
