import React from "react";
import "./MovieList.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import CardFilm from "../cardFilm/CardFilm";

function MovieList(props) {
  const items = props.items;

  return (
    <div className="movie-list">
      {items.find((item) => item.homeSectionName) ? (
        items.map((item, index) => (
          <div key={index}>
            <h1>{item.homeSectionName || item.name}</h1>
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
              {item.recommendContentVOList.map((detailItem, detailIndex) => (
                <SwiperSlide key={detailIndex}>
                  <CardFilm
                    imageUrl={detailItem.imageUrl}
                    title={detailItem.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))
      ) : (
        <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <CardFilm imageUrl={item.coverVerticalUrl} title={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default MovieList;
