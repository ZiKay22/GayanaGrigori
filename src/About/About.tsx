import "../Home/home.css";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const achievements = t("about.achievements", { returnObjects: true }) as string[];


  return (
    <section className="about">
      <div className="container">
        <div className="mb-5">
          <div className="row g-0">
            <h2 className="text-silver text-center mb-5">
              {t("about.bioTitle")}
            </h2>

            <div className="col-md-5 d-flex justify-content-center">
              <img
                src="https://i.postimg.cc/XXSdkR0h/photo-2025-06-02-20-07-10.jpg"
                className="img-fluid"
                alt="portrait"
              />
            </div>

            <div className="col-md-5">
              <div className="card-body">
                <p className="text-silver fs-5">{t("about.bioText")}</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-silver text-center">{t("about.certificates")}</h2>

        {/* Карусель с дипломами */}
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {[
              "k4PycRFw/photo-2025-06-02-20-25-27-removebg-preview.png",
              "vTNg0pwM/photo-2025-06-02-20-25-28-removebg-preview.png",
              "DzvvbBRc/photo-2025-06-02-20-25-29-removebg-preview.png",
              "8kJ65zRz/photo-2025-06-02-20-25-29-2-removebg-preview.png",
              "wMLMk325/photo-2025-06-02-20-25-30-removebg-preview.png"
            ].map((src, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="d-flex justify-content-center">
                  <img
                    src={`https://i.postimg.cc/${src}`}
                    className="d-block img-fluid"
                    alt="certificate"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Конкурсы */}
        <div className="row">
          <h2 className="text-silver text-center mb-5">
            {t("about.contests")}
          </h2>

          <div className="col-md-6">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
              <div className="carousel-inner">
                {[
                  "J4yWDtKt/photo-2025-06-02-20-41-53.jpg",
                  "nrggYYTr/photo-2025-06-02-20-41-56.jpg",
                  "RZcyKttC/photo-2025-06-02-20-41-58.jpg",
                  "QC7GzyF1/photo-2025-06-02-20-42-27.jpg"
                ].map((src, index) => (
                  <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                    <div className="d-flex justify-content-center">
                      <img
                        height={500}
                        src={`https://i.postimg.cc/${src}`}
                        className="d-block"
                        alt="contest"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="card col-md-6 bg-dark">
            <ul className="list-group list-group-flush bg-dark">
        {achievements.map((item, index) => (
    <li key={index} className="list-group-item bg-dark text-silver">
      {item}
    </li>
  ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
