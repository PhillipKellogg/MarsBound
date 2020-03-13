import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
export default function handleMovement(player) {


function collision(newPos, npcPos){
  return !newPos === npcPos 
}


    function observeBoundaries(oldPos, newPos){
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
         (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT -SPRITE_SIZE) 
       
    }

    function observeImpassable(oldPos, newPos){
      const tiles = store.getState().map.tiles;
      const y = newPos[1] / SPRITE_SIZE;
      const x = newPos[0] / SPRITE_SIZE;

      const nextTile = tiles[y][x];




      if (nextTile ===50) startDialogue();
      // if (nextTile<20){startDialogue();}
      return nextTile < 5;

    }

    // function startDialogue (character){
    //   if character.get.state dialogue ===true{
// store.getState().character[nextTile].dialogue;
    //   }
    // }

function startDialogue(){
  // if  (handleKeyDown() === 32) {
    console.log("Hello There")
    
  // }

  
}

  function getNewPosition(oldPos, direction) {
    //   if direction
    // return[oldPos[0]-SPRITE_SIZE, oldPos[1]-SPRITE_SIZE]
    switch (direction) {
        default:
            console.log(direction);
            
      case "left":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
      case "right":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
      case "up":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE]
      case "down":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE]
    }
  }

function getSpriteLocation(direction, walkIndex){
  switch(direction){
    case `down`:
      return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`
      case `right`:
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`
  case `left`:
    return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`
    case `up`:
      return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`

}
}

function getWalkIndex(){
  const walkIndex = store.getState().player.walkIndex;
  return walkIndex >=7 ? 0 : walkIndex + 1
}

  function dispatchMove(direction, newPos) {
const walkIndex = getWalkIndex();

    store.dispatch({
      type: "MOVE_PLAYER",
      payload: { 
        position:  newPos, 
        direction,
        walkIndex,
         spriteLocation: getSpriteLocation(direction, walkIndex)
        }
    });
  }

function attemptMove(direction){
  
  const oldPos = store.getState().player.position;
  const newPos = getNewPosition(oldPos, direction);

  if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
    dispatchMove( direction, newPos)
  
}


  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 87:
        return attemptMove("up");
      case 38:
        return attemptMove("up");
      case 83:
        return attemptMove("down");
      case 40:
        return attemptMove("down");
      case 65:
        return attemptMove("left");
      case 37:
        return attemptMove("left");
      case 68:
        return attemptMove("right");
      case 39:
        return attemptMove("right");
        case 32:
          return startDialogue("interact");
      default:
        console.log(e.keyCode);
    }
  }

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });

  return player;
}
