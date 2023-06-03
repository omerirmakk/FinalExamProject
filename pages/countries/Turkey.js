import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Turkey = () => {
  const [turkeyData, setTurkeyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Turkey');
      setTurkeyData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {turkeyData.map((turkey) => (
        <>
          <Flag ImageSrc={turkey.ImageSrc} Title={turkey.Title}></Flag>
          <GridInfo
            Population={turkey.Population}
            Capital={turkey.Capital}
            City={turkey.City}
            Currency={turkey.Currency}
            Language={turkey.Language}
            Statue={turkey.Statue}
            SehirPhoto={turkey.CityPhoto}
            VisitNumber={turkey.CityNumber}
            Title={turkey.Title}
            Desc={turkey.Desc}
          ></GridInfo>
        </>
      ))}
    </Layout>
  );
};

export default Turkey;
