import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Belarus = () => {
  const [belarusData, setBelarusData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Belarus');
      setBelarusData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {belarusData.map((belarus) => (
        <div key={belarus.Id}>
          <Flag ImageSrc={belarus.ImageSrc} Title={belarus.Title} />
          <GridInfo
            Population={belarus.Population}
            Capital={belarus.Capital}
            City={belarus.City}
            Currency={belarus.Currency}
            Language={belarus.Language}
            Statue={belarus.Statue}
            SehirPhoto={belarus.CityPhoto}
            VisitNumber={belarus.CityNumber}
            Title={belarus.Title}
            Desc={belarus.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Belarus;
