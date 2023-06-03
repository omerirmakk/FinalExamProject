import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Poland = () => {
  const [polandData, setPolandData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Poland');
      setPolandData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {polandData.map((poland) => (
        <>
          <Flag ImageSrc={poland.ImageSrc} Title={poland.Title}></Flag>
          <GridInfo
            Population={poland.Population}
            Capital={poland.Capital}
            City={poland.City}
            Currency={poland.Currency}
            Language={poland.Language}
            Statue={poland.Statue}
            SehirPhoto={poland.CityPhoto}
            VisitNumber={poland.CityNumber}
            Title={poland.Title}
            Desc={poland.Desc}
          ></GridInfo>
        </>
      ))}
    </Layout>
  );
};

export default Poland;
