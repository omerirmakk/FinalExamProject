import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Finland = () => {
  const [finlandData, setFinlandData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Finland');
      setFinlandData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {finlandData.map((finland) => (
        <div key={finland.Id}>
          <Flag ImageSrc={finland.ImageSrc} Title={finland.Title} />
          <GridInfo
            Population={finland.Population}
            Capital={finland.Capital}
            City={finland.City}
            Currency={finland.Currency}
            Language={finland.Language}
            Statue={finland.Statue}
            SehirPhoto={finland.CityPhoto}
            VisitNumber={finland.CityNumber}
            Title={finland.Title}
            Desc={finland.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Finland;
