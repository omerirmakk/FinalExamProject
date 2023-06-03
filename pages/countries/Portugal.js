import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Portugal = () => {
  const [portugalData, setPortugalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Portugal');
      setPortugalData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {portugalData.map((portugal) => (
        <>
          <Flag ImageSrc={portugal.ImageSrc} Title={portugal.Title}></Flag>
          <GridInfo
            Population={portugal.Population}
            Capital={portugal.Capital}
            City={portugal.City}
            Currency={portugal.Currency}
            Language={portugal.Language}
            Statue={portugal.Statue}
            SehirPhoto={portugal.CityPhoto}
            VisitNumber={portugal.CityNumber}
            Title={portugal.Title}
            Desc={portugal.Desc}
          ></GridInfo>
        </>
      ))}
    </Layout>
  );
};

export default Portugal;
