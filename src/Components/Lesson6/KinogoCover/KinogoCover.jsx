import React from 'react';
import './KinogoCover.css'

const KinogoCover = () => {
  return (
    <div className="container-fluid">
      {/* Обложка на весь экран */}
      <div className="row">
        <div className="col-12">
          <img
            src="https://www.film.ru/sites/default/files/styles/epsa_600x400/public/articles/50572773-2515569.jpeg"
            alt="Обложка"
            style={{ width: '100%', height: '300px' }}
          />
        </div>
      </div>

      {/* Изображение */}
      <div className="row mt-3">
        <div className="col-4">
          <img
            src="https://top.filmy-smotret.one/uploads/posts/2023-11/1698836176-ooo-dom-ada-osobnyak-karmayklov-img.webp"
            alt="Фото"
            style={{ width: '150px', height: '350px' }}
          />
        </div>

        {/* Информация */}
        <div className="col-8">
          <div>
            <h2>Название фильма</h2>
            <p>Описание фильма</p>
            <p>Рейтинг: 8.5</p>
            <p>Год выпуска: 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KinogoCover;
