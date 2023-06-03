import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Denmark = () => {
  const [denmarkData, setDenmarkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Denmark');
      setDenmarkData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {denmarkData.map((denmark) => (
        <div key={denmark.Id}>
          <Flag ImageSrc={denmark.ImageSrc} Title={denmark.Title} />
          <GridInfo
            Population={denmark.Population}
            Capital={denmark.Capital}
            City={denmark.City}
            Currency={denmark.Currency}
            Language={denmark.Language}
            Statue={denmark.Statue}
            SehirPhoto={denmark.CityPhoto}
            VisitNumber={denmark.CityNumber}
            Title={denmark.Title}
            Desc={denmark.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Denmark;
