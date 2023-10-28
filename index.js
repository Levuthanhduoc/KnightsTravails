import chessBroad from "./chess_module.js";
import knightMove from "./knightMoves_module.js";
function main(){
    chessBroad();
    let a = knightMove([3,3],[0,0]);
    console.log(a);
}main()