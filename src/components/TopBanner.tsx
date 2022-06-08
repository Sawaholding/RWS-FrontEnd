import "../styles/TopBanner.css";

export function TopBanner() {
  const bannerImage = "";

  return (
    <a href="/">
      <div className="banner-container">
        <div className="logo">Sawaholding.</div>
        {/* <div className="search-bar" /> */}
        {/* <div className="banner" style={{ backgroundImage: `url(${bannerImage})` }} /> */}
      </div>
    </a>
  );
}
