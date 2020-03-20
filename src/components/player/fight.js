import store from "../../config/store";
import { tiles } from "../../data/maps/1";
import knight from "../npc/knight";

export default function fight(attackInput) {
  const enemyMaxHP = store.getState().player.eMaxHp;
  let enemyHP = store.getState().player.enemyHealth;
  let playerHP = store.getState().player.health;
  let fightingNow = true;
  let visibility = "none";

  let newDialogue = [];
  if (enemyHP && playerHP) {
    if (attackInput === "attack") {
      console.log("attack");
      playerAttack();
    } else if (attackInput === "heal") {
      console.log("heal");
      playerHeal();
    }
  }
  //CHANGE S
  console.log(`This is the newDialogue Arr ${newDialogue}`);
  if (enemyHP) {
    console.log("ENEMY ATTACK -------------------------------------");

    if (Math.floor(Math.random() * (2 - 0) + 0)) {
      enemyAttack();
    } else {
      enemyHeal();
    }
  }
  if (enemyHP <= 0) {
    fightingNow = false;
    setTimeout(knightBattleWin, 5000);
    if (store.getState().player.talkingTo === "knightBattle") {
    }
    newDialogue.push("Congratulations!", "YOU WIN!!!");
  } else if (playerHP <= 0) {
    fightingNow = false;
    newDialogue.push("you lost....");
  } else {
    newDialogue.push(" I to Attack \xa0\xa0\xa0\xa0 L to Heal");
  }

  console.log(`This is the newDialogue Arr ${newDialogue}`);
  fightingNow ? (visibility = "none") : (visibility = "visible");

  dispatchCombat(newDialogue, playerHP, enemyHP, fightingNow, visibility);

  function dispatchCombat(
    newDialogue,
    playerHP,
    enemyHP,
    fightingNow,
    visibility
  ) {
    store.dispatch({
      type: "FIGHT_SEQUENCE",
      payload: {
        currDialogue: newDialogue,
        enemyHealth: enemyHP,
        health: playerHP,
        page: 0,
        fightingNow: fightingNow
      }
    });

    setTimeout(function() {
      dispatchVisibility(visibility);
    }, 5000);
  }
  function dispatchVisibility(visibility) {
    store.dispatch({
      type: "VISIBILITY",
      payload: {
        visibility
      }
    });
  }

  function knightBattleWin() {
    store.dispatch({
      type: "ADD_TILES",
      payload: {
        tiles: tiles,
        name: "Stage1"
      }
    });
    store.dispatch({
      type: "SHOW_SIGN",
      payload: {
        display: "flex"
      }
    });
    store.dispatch({
      type: "KNIGHT_DISPLAY",
      payload: {
        display: "none"
      }
    });
    dispatchCombat(null, 20, null, false, "visible");
  }

  function playerAttack() {
    let ability = Math.floor(Math.random() * (3 - 1) + 1);
    enemyHP -= ability;
    newDialogue.push(`YOU ATTACK FOR ${ability}HP`);
    // return ability;
  }
  function enemyAttack() {
    let ability = Math.floor(Math.random() * (4 - 0) + 0);
    playerHP -= ability;
    newDialogue.push(`ENEMY ATTACKS YOU FOR ${ability}HP`);
    // return ability;
  }
  function playerHeal() {
    let ability = Math.floor(Math.random() * (2 - 0) + 0);
    playerHP += ability;
    if (playerHP >= 20) {
      playerHP = 20;
    }
    newDialogue.push(`YOU HEAL ${ability}HP`);
    // return ability;
  }

  function enemyHeal() {
    let ability = Math.floor(Math.random() * (1 - 0) + 0);
    enemyHP += ability;
    if (enemyHP >= enemyMaxHP) {
      enemyHP = enemyMaxHP;
    }
    newDialogue.push(`ENEMY HEALS ${ability}HP`);
    // return `ENEMY HEALS ${ability}HP`;
  }
  //   return fightingNow;
  //Need a return
  //   return true;
}
