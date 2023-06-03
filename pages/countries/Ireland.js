import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Ireland = () => {
  const [irelandData, setIrelandData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Ireland');
      setIrelandData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {irelandData.map((ireland) => (
        <div key={ireland.Id}>
          <Flag ImageSrc={ireland.ImageSrc} Title={ireland.Title} />
          <GridInfo
            Population={ireland.Population}
            Capital={ireland.Capital}
            City={ireland.City}
            Currency={ireland.Currency}
            Language={ireland.Language}
            Statue={ireland.Statue}
            SehirPhoto={ireland.CityPhoto}
            VisitNumber={ireland.CityNumber}
            Title={ireland.Title}
            Desc={ireland.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Ireland;
