import React from "react";
import Card from "./Card";

const CardList = ({ people }) => {
  const cardComponent = people.map((user, i) => {
 
    return (
      <Card
        key={i}
        id={people[i].id}
        name={people[i].name}
        gender={people[i].gender}
        hair_color={people[i].hair_color}
        homeworld={people[i].homeworld}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
