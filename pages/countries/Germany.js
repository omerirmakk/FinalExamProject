import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Germany = () => {
  const [germanyData, setGermanyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Germany');
      setGermanyData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {germanyData.map((germany) => (
        <>
          <Flag ImageSrc={germany.ImageSrc} Title={germany.Title}></Flag>
          <GridInfo
            Population={germany.Population}
            Capital={germany.Capital}
            City={germany.City}
            Currency={germany.Currency}
            Language={germany.Language}
            Statue={germany.Statue}
            SehirPhoto={germany.CityPhoto}
            VisitNumber={germany.CityNumber}
            Title={germany.Title}
            Desc={germany.Desc}
          ></GridInfo>
        </>
      ))}
    </Layout>
  );
};

export default Germany;
