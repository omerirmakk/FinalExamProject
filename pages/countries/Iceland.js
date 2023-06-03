import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Iceland = () => {
  const [icelandData, setIcelandData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Iceland');
      setIcelandData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {icelandData.map((iceland) => (
        <div key={iceland.Id}>
          <Flag ImageSrc={iceland.ImageSrc} Title={iceland.Title} />
          <GridInfo
            Population={iceland.Population}
            Capital={iceland.Capital}
            City={iceland.City}
            Currency={iceland.Currency}
            Language={iceland.Language}
            Statue={iceland.Statue}
            SehirPhoto={iceland.CityPhoto}
            VisitNumber={iceland.CityNumber}
            Title={iceland.Title}
            Desc={iceland.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Iceland;
