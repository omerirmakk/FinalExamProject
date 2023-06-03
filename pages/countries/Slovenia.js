import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Slovenia = () => {
  const [sloveniaData, setSloveniaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Slovenia');
      setSloveniaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {sloveniaData.map((slovenia) => (
        <div key={slovenia.Id}>
          <Flag ImageSrc={slovenia.ImageSrc} Title={slovenia.Title} />
          <GridInfo
            Population={slovenia.Population}
            Capital={slovenia.Capital}
            City={slovenia.City}
            Currency={slovenia.Currency}
            Language={slovenia.Language}
            Statue={slovenia.Statue}
            SehirPhoto={slovenia.CityPhoto}
            VisitNumber={slovenia.CityNumber}
            Title={slovenia.Title}
            Desc={slovenia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Slovenia;
