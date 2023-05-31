const MainCard = ({ source, mainTitle, mainP, mainPop }) => {
  return (
    <>
      <div className="mainCard_container">
        <div className="mainCard_photo">
          <img src={source}></img>
        </div>
        <div className="mainCard_text">
          <h1>{mainTitle}</h1>
          <p>{mainP}</p>
          <p>{mainPop}</p>
        </div>
      </div>
    </>
  );
};
export default MainCard;
