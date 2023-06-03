import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Armenia = () => {
  const [armeniaData, setArmeniaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Armenia');
      setArmeniaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {armeniaData.map((armenia) => (
        <div key={armenia.Id}>
          <Flag ImageSrc={armenia.ImageSrc} Title={armenia.Title} />
          <GridInfo
            Population={armenia.Population}
            Capital={armenia.Capital}
            City={armenia.City}
            Currency={armenia.Currency}
            Language={armenia.Language}
            Statue={armenia.Statue}
            SehirPhoto={armenia.CityPhoto}
            VisitNumber={armenia.CityNumber}
            Title={armenia.Title}
            Desc={armenia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Armenia;
