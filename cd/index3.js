function initXY(x0, y0) {
    let posX = [];
    let posY = [];
    for (let i = 0; i < 20; i++) {
        posX[i] = x0 + i * 40;
        posY[i] = y0 + i * 30;
    }
    return {posX, posY};
}


const pos = initXY(10, 20);

console.log(pos.posX)
console.log(pos.posY)