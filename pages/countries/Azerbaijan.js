import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Azerbaijan = () => {
  const [azerbaijanData, setAzerbaijanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Azerbaijan');
      setAzerbaijanData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {azerbaijanData.map((azerbaijan) => (
        <div key={azerbaijan.Id}>
          <Flag ImageSrc={azerbaijan.ImageSrc} Title={azerbaijan.Title} />
          <GridInfo
            Population={azerbaijan.Population}
            Capital={azerbaijan.Capital}
            City={azerbaijan.City}
            Currency={azerbaijan.Currency}
            Language={azerbaijan.Language}
            Statue={azerbaijan.Statue}
            SehirPhoto={azerbaijan.CityPhoto}
            VisitNumber={azerbaijan.CityNumber}
            Title={azerbaijan.Title}
            Desc={azerbaijan.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Azerbaijan;
