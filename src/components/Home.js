import { React, useState, useEffect } from "react";
import "../style/ContentFirst.css";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { FaPhoneAlt } from "react-icons/fa";

const apiJakarta = `https://developers.zomato.com/api/v2.1/search?entity_id=170&count=5&entity_type=city&order=asc`;
const apiBali = `https://developers.zomato.com/api/v2.1/search?entity_id=74&count=5&entity_type=city&order=asc`;
const apiAllJakarta = `https://developers.zomato.com/api/v2.1/search?entity_id=170&entity_type=city&order=asc`;
const apiAllBali = `https://developers.zomato.com/api/v2.1/search?entity_id=74&entity_type=city&order=asc`;

function Home() {
  const [jakarta, setJakarta] = useState([]);
  const [bali, setBali] = useState([]);
  const [allJakarta, setAllJakarta] = useState([]);
  const [allBali, setAllBali] = useState([]);

  useEffect(() => {
    axios
      .get(apiJakarta, {
        headers: { "user-key": "38885e95d5c6fd6331ba43a8f569b9cf" },
      })
      .then((res) => {
        setJakarta(res.data.restaurants);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  useEffect(() => {
    axios
      .get(apiBali, {
        headers: { "user-key": "38885e95d5c6fd6331ba43a8f569b9cf" },
      })
      .then((res) => {
        setBali(res.data.restaurants);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  useEffect(() => {
    axios
      .get(apiAllJakarta, {
        headers: { "user-key": "38885e95d5c6fd6331ba43a8f569b9cf" },
      })
      .then((res) => {
        setAllJakarta(res.data.restaurants);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  useEffect(() => {
    axios
      .get(apiAllBali, {
        headers: { "user-key": "38885e95d5c6fd6331ba43a8f569b9cf" },
      })
      .then((res) => {
        setAllBali(res.data.restaurants);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  const arrJakarta = jakarta;
  const arrBali = bali;
  const mergeArr = [...arrJakarta, ...arrBali];
  const dataJakarta = allJakarta;
  const dataBali = allBali;
  const mergeAll = [...dataJakarta, ...dataBali];

  let datas = mergeAll.reduce(function (index, value) {
    index[value.restaurant.establishment] =
      index[value.restaurant.establishment] || [];
    index[value.restaurant.establishment].push(value);
    return index;
  }, Object.create(null));

  return (
    <div className="container">
      <div className="content">
        <div className="items">
          <h1 className="text_h1">Resto Indo</h1>
          <p className="text_p">Jelajahi Restoran Yang Anda Inginkan Segera!</p>
          <button className="button">Cari Restoran</button>
        </div>
      </div>
      <div className="content_first">
        <h1 className="content_first_h1">Restoran Terbaru</h1>
        <hr className="content_first_line" />
      </div>
      <ul className="cards">
        {mergeArr.map((item) => (
          <li key={item.restaurant.id}>
            <div href="/" className="card">
              <img
                src={item.restaurant.featured_image}
                className="card__name "
                alt={item.restaurant.name}
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    src={item.restaurant.thumb}
                    className="card__thumb"
                    alt={item.restaurant.name}
                  />
                  <div className="card__header__text">
                    <h1 className="card__title">{item.restaurant.name}</h1>
                    {(() => {
                      if (
                        item.restaurant.user_rating.aggregate_rating > 1 &&
                        item.restaurant.user_rating.aggregate_rating < 2
                      ) {
                        return (
                          <>
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <p>{item.restaurant.user_rating.rating_text}</p>
                            <small>
                              Rating:
                              {item.restaurant.user_rating.aggregate_rating}
                            </small>
                          </>
                        );
                      } else if (
                        item.restaurant.user_rating.aggregate_rating > 2 &&
                        item.restaurant.user_rating.aggregate_rating < 3
                      ) {
                        return (
                          <>
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <p>{item.restaurant.user_rating.rating_text}</p>
                            <small>
                              Rating:{" "}
                              {item.restaurant.user_rating.aggregate_rating}
                            </small>
                          </>
                        );
                      } else if (
                        item.restaurant.user_rating.aggregate_rating > 3 &&
                        item.restaurant.user_rating.aggregate_rating < 4
                      ) {
                        return (
                          <>
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <p>{item.restaurant.user_rating.rating_text}</p>
                            <small>
                              Rating:{" "}
                              {item.restaurant.user_rating.aggregate_rating}
                            </small>
                          </>
                        );
                      } else if (
                        item.restaurant.user_rating.aggregate_rating > 4 &&
                        item.restaurant.user_rating.aggregate_rating < 5
                      ) {
                        return (
                          <>
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <FaStar
                              style={{
                                color: "#df0a74",
                              }}
                            />
                            <p>{item.restaurant.user_rating.rating_text}</p>
                            <small>
                              Rating:{" "}
                              {item.restaurant.user_rating.aggregate_rating}
                            </small>
                          </>
                        );
                      } else if (
                        item.restaurant.user_rating.aggregate_rating === 5
                      ) {
                        <>
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <p>{item.restaurant.user_rating.rating_text}</p>
                          <small>
                            {item.restaurant.user_rating.aggregate_rating}
                          </small>
                        </>;
                      }
                    })()}
                    <h4 className="card__tagline">
                      {item.restaurant.location.address}
                    </h4>
                    <span className="card__status">
                      Open At : {item.restaurant.timings}
                    </span>
                  </div>
                </div>
                <a
                  href={item.restaurant.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card__description"
                >
                  Kunjungi Restoran
                </a>
              </div>
              {/* For Mobile */}
              <div className="card__body">
                <div className="card_header_mobile">
                  <h1 className="card_title_mobile">{item.restaurant.name}</h1>
                  {(() => {
                    if (
                      item.restaurant.user_rating.aggregate_rating > 1 &&
                      item.restaurant.user_rating.aggregate_rating < 2
                    ) {
                      return (
                        <>
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <p className="p_mobile">{item.restaurant.user_rating.rating_text}</p>
                          <small className="small_mobile">
                            Rating:
                            {item.restaurant.user_rating.aggregate_rating}
                          </small>
                        </>
                      );
                    } else if (
                      item.restaurant.user_rating.aggregate_rating > 2 &&
                      item.restaurant.user_rating.aggregate_rating < 3
                    ) {
                      return (
                        <>
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <p className="p_mobile">{item.restaurant.user_rating.rating_text}</p>
                          <small className="small_mobile">
                            Rating:{" "}
                            {item.restaurant.user_rating.aggregate_rating}
                          </small>
                        </>
                      );
                    } else if (
                      item.restaurant.user_rating.aggregate_rating > 3 &&
                      item.restaurant.user_rating.aggregate_rating < 4
                    ) {
                      return (
                        <>
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <p className="p_mobile">{item.restaurant.user_rating.rating_text}</p>
                          <small className="small_mobile">
                            Rating:{" "}
                            {item.restaurant.user_rating.aggregate_rating}
                          </small>
                        </>
                      );
                    } else if (
                      item.restaurant.user_rating.aggregate_rating > 4 &&
                      item.restaurant.user_rating.aggregate_rating < 5
                    ) {
                      return (
                        <>
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <FaStar
                            style={{
                              color: "#df0a74",
                            }}
                          />
                          <p className="p_mobile">{item.restaurant.user_rating.rating_text}</p>
                          <small className="small_mobile">
                            Rating:{" "}
                            {item.restaurant.user_rating.aggregate_rating}
                          </small>
                        </>
                      );
                    } else if (
                      item.restaurant.user_rating.aggregate_rating === 5
                    ) {
                      <>
                        <FaStar
                          style={{
                            color: "#df0a74",
                          }}
                        />
                        <FaStar
                          style={{
                            color: "#df0a74",
                          }}
                        />
                        <FaStar
                          style={{
                            color: "#df0a74",
                          }}
                        />
                        <FaStar
                          style={{
                            color: "#df0a74",
                          }}
                        />
                        <FaStar
                          style={{
                            color: "#df0a74",
                          }}
                        />
                        <p className="p_mobile">{item.restaurant.user_rating.rating_text}</p>
                        <small className="small_mobile">
                          {item.restaurant.user_rating.aggregate_rating}
                        </small>
                      </>;
                    }
                  })()}
                  <h4 className="card_tagline_mobile">
                    {item.restaurant.location.address}
                  </h4>
                  <span className="card_status_mobile">
                    Open At : {item.restaurant.timings}
                  </span>
                </div>
              </div>
              {/* For Mobile */}
            </div>
          </li>
        ))}
      </ul>
      <div className="content_slider">
        <Slide easing="ease">
          {mergeArr.map((fadeImage, index) => (
            <div className="content_first_fade_image" key={index}>
              <div
                style={{
                  // backgroundImage: `url(${fadeImage.restaurant.featured_image})`,
                  background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
                    url(${fadeImage.restaurant.featured_image})`,
                  width: "100%",
                  height: "20rem",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h5 className="content_text_image_slide">
                  {fadeImage.restaurant.name}
                  <br />
                  <FaPhoneAlt /> {fadeImage.restaurant.phone_numbers}
                </h5>
              </div>
            </div>
          ))}
        </Slide>
        <div className="content_slider_right">
          <div className="content_slider_right_item">
            <h1 className="content_slider_right_item_h1">
              Lorem ipsum dolor sit amet
            </h1>
            <hr className="content_slider_right_line" />
            <p className="content_slider_right_item_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              laborum accusantium odit ullam ab architecto nemo quidem nostrum?
              Deleniti adipisci, ipsa voluptatum cupiditate, modi quae vel,
              accusantium est ullam minus a. Nam ratione provident quaerat, cum
              at voluptas temporibus doloribus sunt aliquid iusto, veritatis
              modi doloremque ipsa beatae mollitia consequatur deserunt.
              Voluptates fugit quos id modi eos? Natus nihil animi dignissimos
              officia vero quo hic eum! Ab quasi tempora rem, quaerat
              accusantium nemo officiis perspiciatis recusandae dolores optio
              magni ratione iure ipsa quia obcaecati repellendus in enim veniam
              placeat facere? Obcaecati quos ad sint cum pariatur laboriosam
              autem doloribus error!
            </p>
          </div>
        </div>
      </div>
      <div className="content_category">
        <h1 className="content_title_category">Kategori Restoran</h1>
        <hr className="content_category_line" />
        <div className="categories">
          {Object.keys(datas).map((item) => {
            return (
              <div className="item_one">
                <div className="item_text">
                  <h3>{item}</h3>
                  <p>({datas[item].length} Restoran)</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="content_first_newsletter">
        <div className="content_first_newsletter_box">
          <h3 className="content_first_newsletter_h1">Get Newsletter</h3>
          <hr className="content_first_newsletter_line" />
          <div className="form">
            <input
              type="text"
              placeholder="Input Your Email Address"
              className="form_input"
              required
            />
            <button type="submit" className="content_first_newsletter_button">
              Submit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
