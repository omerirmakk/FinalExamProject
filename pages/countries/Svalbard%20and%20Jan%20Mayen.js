import Layout from '@/components/Layout';
import GridInfo from '@/components/GridInfo';
import Flag from '@/components/Flag';
import { useEffect, useState } from 'react';
import { fetchCountryData, getCountryData } from '@/api';

const SvalbardAndJanMayen = () => {
  const [svalbardData, setSvalbardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchCountryData();
      const data = getCountryData('Svalbard and Jan Mayen');
      setSvalbardData(data);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      {svalbardData.map((svalbard) => (
        <div key={svalbard.Id}>
          <Flag
            ImageSrc={svalbard.ImageSrc}
            Title={(svalbard.Title = 'Svalbard')}
          />
          <GridInfo
            Population={svalbard.Population}
            Capital={svalbard.Capital}
            City={svalbard.City}
            Currency={svalbard.Currency}
            Language={svalbard.Language}
            Statue={svalbard.Statue}
            SehirPhoto={svalbard.CityPhoto}
            VisitNumber={svalbard.CityNumber}
            Title={svalbard.Title}
            Desc={svalbard.Desc}
          />
        </div>
      ))}
    </Layout>
  );
};

export default SvalbardAndJanMayen;
