import "./card-list.css";
import { Card } from "../card/card";
import { useState } from "react";

export const CardList = (props) => {
  const {
    items,
    guessCount,
    word,
    onSubmit,
    color1,
    color2,
    color3,
    color4,
    color5,
    colors,
  } = props;

  const keyHandler1 = (event) => {
    items[guessCount].letter1 = event.target.value;
  };

  const keyHandler2 = (event) => {
    items[guessCount].letter2 = event.target.value;
  };

  const keyHandler3 = (event) => {
    items[guessCount].letter3 = event.target.value;
  };

  const keyHandler4 = (event) => {
    items[guessCount].letter4 = event.target.value;
  };

  const keyHandler5 = (event) => {
    items[guessCount].letter5 = event.target.value;
  };

  return (
    <div className="card-list">
      {/* {props.items.map((item) => {  
        return <Card key={item.id} item={item} />;
      })} */}

      {items.map((item, index) => {
        return (
          <>
            <Card
              backColor={colors[index][0]} //{index === guessCount - 1 ? color1 : ""}
              key={index}
              item={item.letter1}
              onKeyPress={keyHandler1}
            />
            <Card
              backColor={colors[index][1]} //{index === guessCount - 1 ? color2 : ""}
              key={index}
              item={item.letter2}
              onKeyPress={keyHandler2}
            />
            <Card
              backColor={colors[index][2]} //{index === guessCount - 1 ? color3 : ""}
              key={index}
              item={item.letter3}
              onKeyPress={keyHandler3}
            />
            <Card
              backColor={colors[index][3]} //{index === guessCount - 1 ? color4 : ""}
              key={index}
              item={item.letter4}
              onKeyPress={keyHandler4}
            />
            <Card
              backColor={colors[index][4]} //{index === guessCount - 1 ? color5 : ""}
              key={index}
              item={item.letter5}
              onKeyPress={keyHandler5}
            />
            <button onClick={onSubmit}>Submit</button>
          </>
        );
      })}
    </div>
  );
};
