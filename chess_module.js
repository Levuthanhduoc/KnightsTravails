function chessBroad(){
    let location =document.querySelector("body");
    let box =document.createElement("div");
    box.setAttribute("id","chessBroad");
    box.setAttribute("style",
    `height:480px; width:480px;border: solid black 1px; 
    display:grid; grid-template-columns:repeat(8,60px); grid-template-rows:repeat(8,60px);background-color:gray;gap:0px; `);
    location.append(box);
    let color = ["white","black"];
    for(let i =0;i < 8;i++){
        for( let j = 0;j < 8;j++){
            if(j !== 0){
                let sw = color.splice(0,1)
                color.push(sw[0]);
            }
            let div = document.createElement("div");
            div.setAttribute("style",`height:60px; width:60px; background-color:${color[0]}`);
            div.setAttribute("data-id",`${i},${j}`);
            box.append(div);
        }
    }
}

export default chessBroad;