function node(arr){
    let pos = [arr[0],arr[1]];
    let turn = 0;
    let parent = null;
    let oj = {
        left:null,
        right:null
    }
    let up = oj,down = oj,left = oj,right= oj;
    return {pos,parent,turn,up,down,left,right};
}

function knightMove(start,end){
    let minimum = null;
    let tree = null;
    let minMove =[];
    let output = [];

    const moveCheck = (coordinate,past,turn)=>{
        let [x,y] = coordinate;
        if(turn >= 10){
            false;
        }
        if(turn > minimum && minimum !== null){
            return false;
        }
        if(coordinate[0] === past[0] && coordinate[1] === past[1]){
            return false;
        }
        if(x > 7 || y > 7 || x < 0 || y < 0){
            return false;
        }
        return true
    }

    const buildTree = (now = start,past = [])=>{
        let begin = node(now)
        let queue = [begin];
        let brach = ["up","down","left","right"];
        let hand = ["left","right"];
        while(queue[0] !== undefined){
            let move = queue.splice(0,1);
            move = move[0];
            let [x,y] = move.pos;
            let preMove = [[x-1,y+2],[x+1,y+2],[x+1,y-2],[x-1,y-2],[x-2,y-1],[x-2,y+1],[x+2,y+1],[x+2,y-1]];
            if(end[0] === x && end[1] === y){
                minimum = move.turn;
                minMove.push(move);
                continue;
            }
            let count = 0;
            for(let i = 0;i < 4;i++){
                for(let j = 0;j < 2;j++){
                    if(moveCheck(preMove[count],[x,y],move.turn)){
                        let newNode = node(preMove[count])
                        move[brach[i]][hand[j]] =  newNode;
                        newNode.parent = move;
                        newNode.turn  = move.turn + 1;
                        queue.push(newNode);
                    }
                    count++;
                }
            }
        }
        return begin;
    }

    const trace = (nod,arr=[]) =>{
        if(nod === null){
            return;
        }
        trace(nod.parent,arr);
        arr.push(nod.pos);
        return arr;
    }

    const findMinimum = ()=>{
        let queue = minMove.slice()
        while(queue[0] !== undefined){
            let min = queue.splice(0,1);
            min = min[0];
            output.push(trace(min));
        }
        return
    }

    tree = buildTree(start);
    findMinimum();
    return output[0];
}

export default knightMove;