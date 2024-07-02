import '../styles/footer.css';

function Footer() {
  return (
    <footer className="content-footer">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-front">
        <path
          fill="#F7CD00"
          fillOpacity="1"
          d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,122.7C672,149,768,171,864,176C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-back">
        <path
          fill="#0241A2"
          fillOpacity="1"
          d="M0,224L60,229.3C120,235,240,245,360,261.3C480,277,600,299,720,272C840,245,960,171,1080,149.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg> */}

      <svg
        className="svg-front"
        viewBox="0 0 1200 465"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 103L40 60.6748C158 -30 267 0.278414 400 31.3394C533 62.4004 660 195.799 793 226.86C926 257.921 1058 123 1133 138.327L1168 144L1200 162.486V464.994H1133C1067 464.994 933 464.994 800 464.994C667 464.994 533 464.994 400 464.994C267 464.994 133 464.994 67 464.994H0V103Z"
          fill="#F7CD00"
        />
      </svg>

      <svg
        viewBox="0 0 1200 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 140.611L50 179.176C100 217.741 200 294.871 300 304.512C400 314.153 500 256.306 600 188.817C700 121.329 800 44.1996 900 15.2761C1000 -13.6475 1100 5.63488 1150 15.2761L1200 24.9173V372H1150C1100 372 1000 372 900 372C800 372 700 372 600 372C500 372 400 372 300 372C200 372 100 372 50 372H0V140.611Z"
          fill="#0241A2"
        />
      </svg>

      <div>
        <section>
            <div>
                <p>OFERTAS Y PROMOCIONES</p>
                <p>No te pierdas nuestras ofertas!</p>
            </div>

            <div></div>
        </section>

        <section>section 2</section>

        <section>section 3</section>
      </div>
    </footer>
  );
}

export default Footer;
