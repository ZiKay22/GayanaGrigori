import  { useEffect, useState } from 'react';
import './home.min.css';
import { useTranslation } from 'react-i18next'; // 👈 импорт i18n

const ANIMATION_INTERVAL = 4000;

export const Hero = () => {
  const [animate, setAnimate] = useState(true);
  const { t } = useTranslation(); // 👈 хук для переводов

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 50);
    }, ANIMATION_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container1">
        <div className="d-flex1">
          {/* Блок с картинкой */}
          <div className="div-img">
            <img
              src="https://i.postimg.cc/sgY3CJJy/Chat-GPT-Image-26-2025-15-19-04.png"
              alt="avatar"
              className="img avatar"
            />
          </div>

          {/* Блок с текстом */}
          <div className="div-txt">
            <div>
              <div className="d-flex flex-wrap f">
                <h2
                  className={`line ${animate ? 'animate' : ''}`}
                  style={{ animationDelay: `${0.3}s` }}
                >
                  <strong className="fs-1">{t('hero.name')}</strong>
                  <p>{t('hero.subtitle')}</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
