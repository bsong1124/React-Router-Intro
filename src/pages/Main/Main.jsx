const Main = (props) => {
    return (
      <section className="main-page">
        <h2>Featured Starship</h2>
        <figure className="featured-figure">
          <img
            referrerPolicy="no-referrer"
            className="featured-image"
            src="https://static.wikia.nocookie.net/starwars/images/5/52/Millennium_Falcon_Fathead_TROS.png/revision/latest/scale-to-width-down/1000?cb=20221029015218"
            alt="Millenium Falcon"
          />
          <figcaption> Millennium Falcon - YT-1300 light freighter </figcaption>
        </figure>
      </section>
    );
  };
  
  export default Main;