import React from "react";
import { MAP_WIDTH, MAP_HEIGHT, SPRITE_SIZE } from "../../config/constants";
import "./styles.scss";
import { connect } from "react-redux";

//Depending on the value of the map array in data/maps/array changes the
//css class of the tile.
//The class is located in maps/style.scss
function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 10:
      return "void";
    case 5:
      return "rock";
    case 6:
      return "tree";
    case 50:
      return "sign";
  }
}

function MapTile(props) {
  //styles the div based on the case statement of getTileSprite!!!!
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        marginBottom: "-4px"
      }}
    ></div>
  );
}
function MapRow(props) {
  return (
    <div className="row">
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}
function Map(props) {
  return (
    <div
      style={{
        // marginTop: '4px',

        width: MAP_WIDTH,
        height: MAP_HEIGHT - "4px",
        // backgroundColor: "black",
        border: "4px solid lightblue"
      }}
    >
      {props.tiles.map(row => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    tiles: state.map.tiles
  };
}
export default connect(mapStateToProps)(Map);
