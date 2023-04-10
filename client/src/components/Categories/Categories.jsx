import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://media.gq.com.tw/photos/63045d27cbd50a7dcc4ed031/master/w_1600,c_limit/GQ0922_Nike_59.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://media.gq.com.tw/photos/63045d26cbd50a7dcc4ed030/master/w_1600,c_limit/GQ0922_Nike_05.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://media.gq.com.tw/photos/63045d2244cb128bdc435153/master/w_1280,c_limit/GQ0922_Nike_17.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://media.gq.com.tw/photos/63045d23cbd50a7dcc4ed02f/master/w_960,c_limit/GQ0922_Nike_13.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://media.gq.com.tw/photos/63045d28cbd50a7dcc4ed032/master/w_960,c_limit/GQ0922_Nike_57.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://media.gq.com.tw/photos/63045d28cbd50a7dcc4ed032/master/w_960,c_limit/GQ0922_Nike_57.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
