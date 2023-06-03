import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Norway = () => {
  const [norwayData, setNorwayData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Norway');
      setNorwayData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {norwayData.map((norway) => (
        <div key={norway.Id}>
          <Flag ImageSrc={norway.ImageSrc} Title={norway.Title} />
          <GridInfo
            Population={norway.Population}
            Capital={norway.Capital}
            City={norway.City}
            Currency={norway.Currency}
            Language={norway.Language}
            Statue={norway.Statue}
            SehirPhoto={norway.CityPhoto}
            VisitNumber={norway.CityNumber}
            Title={norway.Title}
            Desc={norway.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Norway;
