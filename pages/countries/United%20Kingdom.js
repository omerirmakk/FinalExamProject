import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const UnitedKingdom = () => {
  const [ukData, setUkData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('United Kingdom');
      setUkData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {ukData.map((uk) => (
        <div key={uk.Id}>
          <Flag ImageSrc={uk.ImageSrc} Title={(uk.Title = 'United K')} />
          <GridInfo
            Population={uk.Population}
            Capital={uk.Capital}
            City={uk.City}
            Currency={uk.Currency}
            Language={uk.Language}
            Statue={uk.Statue}
            SehirPhoto={uk.CityPhoto}
            VisitNumber={uk.CityNumber}
            Title={uk.Title}
            Desc={uk.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default UnitedKingdom;
