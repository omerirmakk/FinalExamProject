import React from 'react';

const GridInfo = ({
  Capital,
  City,
  Currency,
  Language,
  Statue,
  Population,
  Desc,
  VisitNumber,
}) => {
  return (
    <div className="Grid_container">
      <div className="parent">
        <div className="div1 main_things">
          Başkent<div>{Capital}</div>
        </div>
        <div className="div2 main_things">
          En Çok Ziyaret Edilen Şehir
          <div>{City}</div>
          <br />
          <div>{VisitNumber}</div>
        </div>
        <div className="div3 main_things">
          Popülasyon
          <div>{Population}</div>
        </div>
        <div className="div4 main_things">
          Resmi Para Birimi <div>{Currency}</div>
        </div>
        <div className="div5 main_things">
          Ünlü Eser <div>{Statue}</div>{' '}
        </div>
        <div className="div6 main_things">
          Resmi Dil
          <div>{Language}</div>
        </div>
      </div>
      <div className="Grid_flex2">
        Ülke Hakkında Bilgi
        <div style={{ marginTop: '30px' }}>{Desc}</div>
      </div>
    </div>
  );
};

export default GridInfo;
