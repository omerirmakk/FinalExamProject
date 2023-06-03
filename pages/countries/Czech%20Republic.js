import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const CzechRepublic = () => {
  const [czechRepublicData, setCzechRepublicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Czech Republic');
      setCzechRepublicData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {czechRepublicData.map((czechRepublic) => (
        <div key={czechRepublic.Id}>
          <Flag
            ImageSrc={czechRepublic.ImageSrc}
            Title={(czechRepublic.Title = 'Czech')}
          />
          <GridInfo
            Population={czechRepublic.Population}
            Capital={czechRepublic.Capital}
            City={czechRepublic.City}
            Currency={czechRepublic.Currency}
            Language={czechRepublic.Language}
            Statue={czechRepublic.Statue}
            SehirPhoto={czechRepublic.CityPhoto}
            VisitNumber={czechRepublic.CityNumber}
            Title={czechRepublic.Title}
            Desc={czechRepublic.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default CzechRepublic;
