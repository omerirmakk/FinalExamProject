import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Belgium = () => {
  const [belgiumData, setBelgiumData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Belgium');
      setBelgiumData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {belgiumData.map((belgium) => (
        <div key={belgium.Id}>
          <Flag ImageSrc={belgium.ImageSrc} Title={belgium.Title} />
          <GridInfo
            Population={belgium.Population}
            Capital={belgium.Capital}
            City={belgium.City}
            Currency={belgium.Currency}
            Language={belgium.Language}
            Statue={belgium.Statue}
            SehirPhoto={belgium.CityPhoto}
            VisitNumber={belgium.CityNumber}
            Title={belgium.Title}
            Desc={belgium.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Belgium;
