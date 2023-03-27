import React from "react";

const Card=({name,gender,hair_color,homeworld})=>{
    
return (
<div className="bg-light-yellow dib br3 pa6 ma2 grow bw2 shadow-5">
    <h2>{name}</h2>
    <p>{gender}</p>
    <p>{hair_color}</p>
    <p><a href={homeworld}>Planet</a></p>
</div>
)

}

export default Card;