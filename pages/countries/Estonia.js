import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Estonia = () => {
  const [estoniaData, setEstoniaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Estonia');
      setEstoniaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {estoniaData.map((estonia) => (
        <div key={estonia.Id}>
          <Flag ImageSrc={estonia.ImageSrc} Title={estonia.Title} />
          <GridInfo
            Population={estonia.Population}
            Capital={estonia.Capital}
            City={estonia.City}
            Currency={estonia.Currency}
            Language={estonia.Language}
            Statue={estonia.Statue}
            SehirPhoto={estonia.CityPhoto}
            VisitNumber={estonia.CityNumber}
            Title={estonia.Title}
            Desc={estonia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Estonia;
