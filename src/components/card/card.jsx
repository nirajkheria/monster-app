import "./card.css";

export const Card = (props) => {
  return (
    <>
      {/* <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      ></img> */}
      <input
        className="card-container"
        style={{ backgroundColor: props.backColor }}
        type="text"
        onChange={props.onKeyPress}
        defaultValue={props.item || ""}
      />
      {/* <p>{props.monster.email}</p> */}
    </>
  );
};
