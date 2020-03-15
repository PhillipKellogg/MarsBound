import store from "../../config/store";
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from "../../config/constants";
export default function handleMovement(player) {
  // function collision(newPos, npcPos) {
  //   return !newPos === npcPos;
  // }

  function observeBoundaries(oldPos, newPos) {
    return (
      newPos[0] >= 0 &&
      newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
      newPos[1] >= 0 &&
      newPos[1] <= MAP_HEIGHT - SPRITE_SIZE
    );
  }

  function observeImpassable(oldPos, newPos) {
    const tiles = store.getState().map.tiles;
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];

    if (nextTile === 50) startDialogue();
    // if (nextTile<20){startDialogue();}
    return nextTile < 5;
  }

  // function startDialogue (character){
  //   if character.get.state dialogue ===true{
  // store.getState().character[nextTile].dialogue;
  //   }
  // }

  function getNewPosition(oldPos, direction) {
    //   if direction
    // return[oldPos[0]-SPRITE_SIZE, oldPos[1]-SPRITE_SIZE]
    switch (direction) {
      default:
        console.log(direction);

      case "left":
        return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
      case "right":
        return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
      case "up":
        return [oldPos[0], oldPos[1] - SPRITE_SIZE];
      case "down":
        return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    }
  }

  function getSpriteLocation(direction, walkIndex) {
    switch (direction) {
      case `down`:
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
      case `right`:
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
      case `left`:
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
      case `up`:
        return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
    }
  }

  function getWalkIndex() {
    const walkIndex = store.getState().player.walkIndex;
    return walkIndex >= 7 ? 0 : walkIndex + 1;
  }

  function dispatchMove(direction, newPos, currDialogue) {
    const walkIndex = getWalkIndex();

    store.dispatch({
      type: "MOVE_PLAYER",
      payload: {
        position: newPos,
        direction,
        walkIndex,
        currDialogue,
        spriteLocation: getSpriteLocation(direction, walkIndex)
      }
    });
  }

  function startDialogue(interact) {
    switch (interact) {
      case "1":
        return changePage(1);
      case "2":
        return changePage(1);
      case "3":
        return changePage(-1);
      case "4":
        return changePage(1);
    }
  }

  function valueBoundary(value) {
    let currDialogue = store.getState().player.currDialogue;
    // let currDialogueLength = store.getState().player.currDialogue.length;

    let newVal = store.getState().player.page + value;
    if (
      !!currDialogue &&
      newVal < store.getState().player.currDialogue.length &&
      newVal >= 0
    ) {
      return true;
    }
    return false;
  }

  function changePage(value) {
    let index;
    index = valueBoundary(value);
    // if (index) {
    // console.log(value);
    // console.log(`Value Boundary ${valueBoundary(value)}`);
    if (index) {
      store.dispatch({
        type: "CHANGE_PAGE",
        payload: { value }
      });
    }
  }

  function hasDialogue(npc) {
    if (npc.dialogue !== null || npc.dialogue !== undefined) {
      console.log(npc.dialogue[0]);
      return npc.dialogue;
    }
  }

  function npcCheck(direction, oldPos, newPos) {
    //NPC List
    const sign = store.getState().sign;
    const signPos = sign.position;
    let move = true;
    //repeat for each NPC
    if (newPos[1] === signPos[1] && newPos[0] === signPos[0]) {
      // console.log(hasDialogue(sign));
      dispatchMove(direction, oldPos, hasDialogue(sign));
      move = false; //Is it ok to move?
    }
    return move;
  }

  function attemptMove(direction) {
    //Old Pos is old position before moving the player
    const oldPos = store.getState().player.position;

    //newPos is the calculated new position
    const newPos = getNewPosition(oldPos, direction);
    let check = 0;
    // console.log(startDialogue( check));
    //  startDialogue();
    if (
      observeBoundaries(oldPos, newPos) &&
      npcCheck(direction, oldPos, newPos) &&
      observeImpassable(oldPos, newPos)
    )
      dispatchMove(direction, newPos);
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
      case 73:
        return startDialogue("1");
      case 74:
        return startDialogue("2");
      case 75:
        return startDialogue("3");
      case 76:
        return startDialogue("4");

      default:
        console.log(e.keyCode);
    }
  }

  // const npcCheck = () => {
  //   if (store.getState().player.position === store.getState().sign.position) {
  //     console.log("standing on sign");
  //   }
  // };

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });

  return player;
}
