import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const  data = [
    {
      id: 1,
      
      img: "https://media.gq.com.tw/photos/63045d2033573953698338e7/master/w_1280,c_limit/GQ0922_Nike_70.jpg",
      img2: "https://media.gq.com.tw/photos/63045d2133573953698338e8/master/w_1280,c_limit/GQ0922_Nike_15.jpg",
      title: "第一双鞋子",
      isNew: true,
      price:250,
      oldPrice:1
    },
    {
      id: 2,
      img: "https://media.gq.com.tw/photos/63045d25c2e51595d1c96209/master/w_1280,c_limit/GQ0922_Nike_18.jpg",
      title: "第二双2",
      isNew: true
    }
    
  ];
  

  return (
    <div className="list">{data?.map(item=>(
      <Card item={item} key={item.id}/>
    ))}</div>
  )
}
      
      

export default List;
