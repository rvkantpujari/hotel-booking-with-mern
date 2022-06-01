import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/653283.webp?k=8f625d3ee6d894c07cdac1d47fb431d13047b3b51fe7b951e99756736c66ef67&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Victoria</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/653184.webp?k=ea64ef994e603b61b0310df8df27ec5ef746d05c0514e2207f58cbae8948b359&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Banff</h1>
          <h2>213 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/653271.webp?k=0b58e19803f5dc0a2911feff42b9d4c94cec51c15882a070f5a1f06c10b5e242&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Richmond</h1>
          <h2>321 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
