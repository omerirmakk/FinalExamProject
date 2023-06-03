import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const Slovakia = () => {
  const [slovakiaData, setSlovakiaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Slovakia');
      setSlovakiaData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {slovakiaData.map((slovakia) => (
        <div key={slovakia.Id}>
          <Flag ImageSrc={slovakia.ImageSrc} Title={slovakia.Title} />
          <GridInfo
            Population={slovakia.Population}
            Capital={slovakia.Capital}
            City={slovakia.City}
            Currency={slovakia.Currency}
            Language={slovakia.Language}
            Statue={slovakia.Statue}
            SehirPhoto={slovakia.CityPhoto}
            VisitNumber={slovakia.CityNumber}
            Title={slovakia.Title}
            Desc={slovakia.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default Slovakia;
