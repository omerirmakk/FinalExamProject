import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Luxembourg = () => {
  const [luxembourgData, setLuxembourgData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Luxembourg');
      setLuxembourgData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {luxembourgData.map((luxembourg) => (
        <div key={luxembourg.Id}>
          <Flag
            ImageSrc={luxembourg.ImageSrc}
            Title={(luxembourg.Title = 'Luxemb.')}
          />
          <GridInfo
            Population={luxembourg.Population}
            Capital={luxembourg.Capital}
            City={luxembourg.City}
            Currency={luxembourg.Currency}
            Language={luxembourg.Language}
            Statue={luxembourg.Statue}
            SehirPhoto={luxembourg.CityPhoto}
            VisitNumber={luxembourg.CityNumber}
            Title={luxembourg.Title}
            Desc={luxembourg.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Luxembourg;
