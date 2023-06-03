import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Austria = () => {
  const [austriaData, setAustriaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Austria');
      setAustriaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {austriaData.map((austria) => (
        <div key={austria.Id}>
          <Flag ImageSrc={austria.ImageSrc} Title={austria.Title} />
          <GridInfo
            Population={austria.Population}
            Capital={austria.Capital}
            City={austria.City}
            Currency={austria.Currency}
            Language={austria.Language}
            Statue={austria.Statue}
            SehirPhoto={austria.CityPhoto}
            VisitNumber={austria.CityNumber}
            Title={austria.Title}
            Desc={austria.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Austria;
