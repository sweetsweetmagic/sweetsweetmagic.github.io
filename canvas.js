let cox; //花心x坐标
let coy; //花心y坐标
let cpx; //根部x坐标
let cpy; //根部y坐标
let cpxR; //根部x坐标偏差值
let cpyR; //根部y坐标偏差值
let cex; //sin 函数x
let cey; //sin函数y
let cev; //sin函数x的速度及方向
let cvx;
let ca;
let cb;
let cR1; //花瓣半径1
let cR2; //花瓣半径2
let cR3; //花蕊半径
let cR4;//叶子半径1
let cR5;//叶子半径2
let colorL1; //叶子色彩1
let colorL2; //叶子色彩1

let cBoxP;//人造像素的点坐标 是一个2d数列。
let cBoxS;//人造像素大小
let cCol; //列数
let cRow; //行数


function init() { //当窗口启动时重置内容模块, 只执行1次
    ca = random(-20,-100);
    cb = random(0.1,0.025);
    cev = (PI/cb)/random(35,55);
    cex = 0;
    cey = ca * sin(cex * cb);
    cox = (width / 2) - 0.5 * (PI / cb) + cex;
    coy = height / 2 + cey;
    cpxR = random(80, 120);
    cpyR = random(150, 250);
    cpx = width / 2 - cpxR;
    cpy = height / 2 + cpyR;
    cvx = 1;

    cBoxS = 35;
    cCol = floor(height / cBoxS);
    cRow = floor(width / cBoxS);

    cR1 = random(150, 220);
    cR2 = random(150 - random(100), 220 - random(70));
    cR3 = random(cR2 / 3, cR2 / 5 * 3);
    let cRR = random(0.5, 1);
    cR4 = cRR*random(100, 280);
    cR5 = cRR*random(35, 100);
    colorL1 = random(170, 210);
    colorL2 = random(170, 210);

}

function reinit() { //当窗口 重新被设定时重置内容模块
    cox = (width / 2) - 0.5 * (PI / cb) + cex;
    coy = height / 2 + cey;
    cpx = width / 2 - cpxR;
    cpy = height / 2 + cpyR;

    cCol = floor(height / cBoxS);
    cRow = floor(width / cBoxS);

}



function CanvasGo() {
 canvasUpdateA();
 displayA();
 canvasUpdateB();
 //displayB();
}

function canvasUpdateA() {
    clear();
    //background(255);
    if (cex > PI / cb) {
        cex = PI / cb;
        cev = cev * -1;
    } else if (cex < 0) {
        cex = 0;
        cev = cev * -1;
    }
    cex += cev;
    cey = ca * sin(cex * cb);
    cox = width / 2 - 0.5 * (PI / cb) + cex;
    coy = height / 2 + cey;
}

function canvasUpdateB() {
    let cPC;
    noStroke();
    for (let i = 0; i < cRow; i++) {
        for (let j = 0; j < cCol; j++) {
            cPC = get(i * cBoxS + floor(cBoxS / 2), j * cBoxS + floor(cBoxS / 2));
                fill(cPC);
                rect(i * cBoxS, j * cBoxS, cBoxS, cBoxS);
        }
    }
}

function displayA() {
    //茎
    strokeCap(ROUND);
    strokeWeight(cBoxS);
    stroke(0, random(254,255), 0);
    noFill();
    bezier(cox, coy, cox - 120, coy - 100, width / 2 - 280 + cex, height / 2 + cey, cpx, cpy);
    //叶1＆2
    noStroke();
    push();
    translate(cpx, cpy + cBoxS/2);
    rotate(PI / 4);
    fill(0, colorL1, 0);
    ellipse(- cR4/2, 0, cR4, cR5);
    rotate(-PI / 2);
    fill(0, colorL2, 0);
    ellipse(+ cR4/2, 0, cR4, cR5);
    pop();
    //花＆花芯
    fill(255, 0, 0);
    ellipse(cox, coy, cR2, cR1);
    ellipse(cox, coy, cR1, cR2);
    fill(255,255,0);
    ellipse(cox, coy, cR3, cR3);

    fill(0, 0, 255);
    ellipse(mouseX, mouseY, cBoxS, cBoxS);
}

function displayB() {
    clear();
    noStroke();
    fill(random(254, 255), 0, 0);
    for (let i = 0; i < cRow; i++) {
        for (let j = 0; j < cCol; j++) {
            if (cBoxP[i][j] == 1) {
                rect(i * cBoxS, j * cBoxS, cBoxS, cBoxS);
            }
        }
    }
}



function make2dArray(tempx, tempy) {
    let cArray = new Array(tempx);
    for (let i = 0; i < cArray.length; i++) {
        cArray[i] = new Array(tempy);
    }
    return cArray;
}