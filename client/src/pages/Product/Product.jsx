import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const images = {
    0: "https://media.gq.com.tw/photos/63045d2933573953698338e9/master/w_960,c_limit/GQ0922_Nike_06-crop.jpg",
    1: "https://media.gq.com.tw/photos/63045d2cc2e51595d1c9620a/master/w_960,c_limit/GQ0922_Nike_56.jpg",
  };

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
              <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
            </div>
            <div className="mainImg">
              <img src={images[selectedImg]} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>莆田假鞋 </h1>
            <span>$250</span>
            <p>品质一流，超级无敌便宜</p>
            <div className="quantity">
              <button onClick={() => setQuantity((prev) => prev===1?1:prev-1)}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: 莆田假鞋</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>描述在product，这个整个界面都在product</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
