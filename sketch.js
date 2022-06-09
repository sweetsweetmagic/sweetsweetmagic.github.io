 let l;
 let t;
 let n;
 let nw;
 let nl;
 let body;
 let  windowWidthP; //上帧windWidth的宽度，用于检测window正在放大还是正在缩小
 let homePageLeft;
 let homePageLeftW;
 let homePageLeftH;
 let homePageLeftX;
 let homePageLeftY;

 let homePageRight;
 let homePageRightW;
 let homePageRightH;
 let homePageRightX;
 let homePageRightY;

 let homePageRightXv;
 let homePageRightXa;

 //right

let rightbutton;
let rightbuttonStatus;
let rbs;
let rightbuttonBack;

let apple;


//left
let homeCanvas;


//LogoDiv
let logodiv;
let logoLink;
let logoLinkBorderW;// 左边标签按钮当前标签前的方块宽度
let logoh1;
let logoh2;
let logoDivS;
let logoDivSHtml;
let lx;
let ly;
let vx;
let vy;
let maxX;
let maxY;
let minX;
let minY;
let s;
let logoYmin;
let logoXmin;
let logoXmax;
let logoYmax;
let logoX_v;
let logoY_v;
let positionMore;
let positionMoreX;

//canvas
let canvas;
let canvasY;
let canvasX;
let canvasW;
let canvasH;


//about Onoaix
let aboutOnoaix;
let minSS;
let minHh;
let minHS;
let AlphaSS;
let ms;
let onoBack;
let ono;
let os;//nonoaix canvas 的开关状态。Button state of canvas on or off
let oSt;//nonoaix canvas 的开关当前稳定状态
let oXMin;
let oYMin;
let oXMax;
let oYMax;
let oX;
let oY;
//about Code Links
let aboutCode;


//left Link
let icons;
let iconSize;
let leftLink;
let leftLinkPosition;
let leftPositionX;
let leftPositionY;
let ss;
let xl;
let yl;
let minXl;
let minYl;
let maxXl;
let maxYl;
let vxl;
let vyl;
let Alpha;

//barbackgtound
let QQbar;
let Wecheatbar;
let X;
let barBackground;
let protfoliobarDiv;
let protfolioBarDivS;
let protfolioBarImg;
let InlfuenceBarImg;
let InfluenceHopeBarImg;
let downloadProtfolio;





function preload(){}

function mouseClicked(){}

function windowResized(){
  n = map(windowWidth*windowHeight,0,1280*720,0,1);
  nw = map(windowWidth,0,1280,0,1);
  nl = map(windowHeight,0,720,0,1);
  if (n>=1) n=1;
  else if (n<=3/4) n=3/4;
  if (nw>=1) nw=1;
  else if (nw<=3/4) nw=3/4;
  if (nl>=1) nl=1;
  else if (nl<=3/4) nl=3/4;

  //resizePlan
  resetSizePlan();

  //apple 
  apple.position(l+windowWidth*62/100+homePageRightW/2,t+windowHeight/2);
}


function setup() {
  body = select('body');

  l = document.documentElement.scrollLeft;
  t = document.documentElement.scrollTop;
  n = map(windowWidth*windowHeight,0,1280*720,0,1);
  nw = map(windowWidth,0,1280,0,1);
  nl = map(windowHeight,0,720,0,1);
  if (n>=1) n=1;
  else if (n<=3/4) n=3/4;
  if (n>=1) n=1;
  else if (n<=3/4) n=3/4;
  if (nw>=1) nw=1;
  else if (nw<=3/4) nw=3/4;
  if (nl>=1) nl=1;
  else if (nl<=3/4) nl=3/4;


  //▲  Set parameter

  //homePageLeft&Right;
  homePageLeft = select('#homePageLeft');
  homePageLeftW = windowWidth*62/100;
  homePageLeftH = windowHeight;
  homePageLeft.size(homePageLeftW,homePageLeftH);
  homePageLeftX = l;
  homePageLeftY = t;
  homePageLeft.position(homePageLeftX,homePageLeftY);
  //homePageLeft.style('background-color','white');
  //homePageLeft.style('z-index','-1');

  homePageRight = select('#homePageRight');
  homePageRight.style('overflow','hidden');
  homePageRight.style('z-index','2');
  homePageRight.style('background-color','white');
  homePageRight.mouseOver(rightDivOver);
  homePageRight.mouseOut(rightDivOut);
  homePageRightW = windowWidth*38/100 ;
  homePageRightH = windowHeight ;
  homePageRight.size(homePageRightW,homePageRightH);
  homePageRightX = l+windowWidth*62/100;
  homePageRightY = t;
  homePageRight.position(homePageRightX,homePageRightY);

  homePageRightXa = 0;
  homePageRightXv = sin(homePageRightXa)*30*n;

  //rightbutton
  rightbutton = createDiv('>');
  rightbuttonBack = 0;
  rightbuttonStatus = 21;
  rbs = 0;
  rightbutton.style('z-index','2');  
  rightbutton.style('cursor','pointer');
  rightbutton.style('background-color','black');
  rightbutton.style('color','white');  
  rightbutton.style('font-size','26px');  
  rightbutton.style('font-weight','normal');
  rightbutton.size(36,36);
  rightbutton.position(windowWidth-50,windowHeight/2);
  rightbutton.mouseOver(rightbuttonOver);
  rightbutton.mouseOut(rightbuttonOut);
  rightbutton.mouseClicked(homePageRightClicked);

  //left
  homeCanvas = select('#homeCanvas');





  //canvas p5.js
  canvasW = homePageLeftW;
  canvasH = homePageLeftH;
  canvasX = homePageLeftX;
  canvasY = homePageLeftY;
  canvas = createCanvas(canvasW,canvasH);
  canvas.parent('#homeCanvas');
  canvas.style('z-index',-1);
  canvas.position(canvasX,canvasY);
  init();
  canvas.show();


  //rightDivAll
  createScrollbar();
  createRightDivBig();
  createPlaygroundRight();
  createProtfolioRight();
    //createAboutmeRight();
    //createIdeasharingRight();

  idRightDivBigs();

  //createLeftAll();
  createPlaygroundLeft();
  createProtfolioLeft();

  idLeftDivBigs();
  idprotfolioLeftSIntroduction();

  //displaydivs
  displayRightDivBigs();




  // logoDIV
  logodiv = select('#logoDIV');
  logodiv.class('logo');
  logoh1 = select('#logo1');
  logoh2 = select('#logo2');
  logoLink = selectAll('.linkInLogo');
  logoDivS = select('#logoDivS');
  positionMore = select('#positionMore');
    logoLinkBorderW = 3;
  s = 20;
  minX = 170*n;
  minY = 120*n;
  lx = minX; 
  ly = minY;
  maxX = minX+12;
  maxY = windowHeight;
  vx = (maxX-minX)/9;
  vy = (maxY-minY)/9;
  logoXmin = minX*6/27;
  logoYmin = minY*6/27;
  logoXmax = logoXmin;
  logoYmax = logoYmin+50*n;
  logoX = logoXmin;
  logoY = logoYmin;
  logoY_v = (logoYmax-logoYmin)/9;
  logoX_v = (logoXmax-logoXmin)/9;
  positionMoreX = -35;
    logoDivSHtml = ["This page is a personal page whitch was build in 24th-november-2019. <br>I'll put things interesting on it, Hope you like it~ )✧∀✧)欢迎欢迎~",
                  "Here is the Playground where I'll put visual things I was tried to play with, icluding some programming sketch, design or art.",
                  "This is a place I'll put things I've done which is looks like can be a opus or portfolio,and I'll put more and more on it if I still remember to update the it. Xp",
                  "more about me just like my name, my job even or photos.",
                  "share some recent ideas or thinking I am interesting in.",
                  "would you like to say something to me or send me an E-mail."]
  logodiv.style('width',lx+'px');
  logodiv.style('height',ly+'px');
  logodiv.mouseOver(Over);
  logodiv.mouseOut(Out);
  logoh1.position(logoX,logoY);
  logoh1.style('line-height',22*n+'px');
  logoh2.style('line-height',12*n+'px');
  logoh1.style('font-size',16*n+'px');
  logoh2.style('font-size',9*n+'px');
  positionMore.position(positionMoreX,29);
  for(let i=0;i<logoLink.length;i++){
    logoLink[i].mouseOver(HighLightLinkOfLogo);
    logoLink[i].mouseOut(unHighLightLinkOfLogo);
    logoLink[i].mouseClicked(changeToRightDivBig);
    logoLink[i].hide();
    logoLink[i].style('font-size',15*n+'px');
      logoLink[0].style('border-left', 'solid ' + logoLinkBorderW +'px orangered');
    if (i==1||i==2) logoLink[i].position(15,(220+(i+1)*35)*nl);
    else if (i==3||i==4||i==5) logoLink[i].position(15,(220+(i+2)*35)*nl);
    else logoLink[i].position(15,(220+i*35)*nl);
  }
  logoDivS.style('font-size',13*n+'px');
  logoDivS.style('width',140*n+'px');
  logoDivS.position(20,520*nl);

  // aboutOnoaix
  aboutOnoaix = select('#minH');
  minHh = selectAll('.minHh');
  minHS = select('#minHS');
  minSS = select('#minSS');
  AlphaSS = 0;
  ms = 20;
  onoBack = select('#onoBack');
  ono = select('#ono');
  os = 20;
  oSt = 1;

  aboutOnoaix.style('transform','translate(-50%,-50%)');
  aboutOnoaix.position(homePageLeftW/2+homePageLeftW/45,t+homePageLeftH/2-homePageLeftH/25);
  aboutOnoaix.style('width',homePageLeftW/2+'px');

  for (let i = 0; i < minHh.length; i++) {
    minHh[i].style('font-size',28*n+'px');
  }
  minHS.style('font-size',17*n+'px');
  minSS.style('font-size',13*n+'px')
  minSS.mouseOver(changeMinSS);
  minSS.mouseOut(BackMinSS);
  ono.mouseClicked(onoBackClicked);
  oXMin = document.getElementById('ono').offsetLeft;
  oYMin = document.getElementById('ono').offsetTop;
  oXMax = document.getElementById('ono').offsetLeft*13/11;
  oYMax = document.getElementById('ono').offsetTop;
  oX = oXMin;
  oY = oYMin;
  onoBack.position(oX,oY);
  onoBack.style('border-top-width',6*n+'px');
  onoBack.size(36*n,32*n);

  // leftLinks
  icons  = selectAll('i');
  iconSize = [27,29,31,35];
  leftLink = selectAll('.leftLink');
  leftLinkPosition = selectAll('.leftLinkPosition');
  ss = new Array(leftLink.length);
  xl = new Array(leftLink.length);
  yl = new Array(leftLink.length);
  Alpha = new Array(leftLink.length);
  minXl = 60;
  minYl = 60;
  maxXl = minXl*1.5;
  maxYl = minYl*1.5;
  vxl = (maxXl - minXl)/5;
  vyl = (maxYl - minYl)/5;
  for (let i = 0; i < leftLink.length; i++) {
    xl[i] = minXl;
    yl[i] = minYl;
    Alpha[i] = 0;
    ss[i] = 20;
    leftLink[i].mouseOver(overSS);
    leftLink[i].mouseOut(outSS);
    leftLink[i].style('width',xl[i]+'px');
    leftLink[i].style('height',yl[i]+'px');
    if (i==0||i==1) {
      leftLink[i].mouseClicked(barBackgroundOver);
    }
    icons[i].style('font-size',iconSize[i]*n+'px');
    icons[i].hide();
  }

  //barbackground
  X = select('#X');
  QQbar = select('#QQbar');
  Wecheatbar = select('#Wecheatbar');
  barBackground = select('#barBackground');
  protfoliobarDiv = selectAll('.protfoliobarDiv');
  protfolioBarDivS = selectAll('.protfolioBarDivS');
  protfolioBarImg = select('#protfolioBarImg');
  InlfuenceBarImg = select('#InlfuenceBarImg');
  InfluenceHopeBarImg = select('#InfluenceHopeBarImg');
  downloadProtfolio = selectAll('.downloadProtfolio');

  barBackground.style('width',canvasW+'px');
  barBackground.style('height',canvasH+'px');
  barBackground.hide();

  for (let i = 0; i < protfoliobarDiv.length; i++) {
    protfoliobarDiv[i].size(0,0);
    protfoliobarDiv[i].position(homePageLeftW/2,homePageLeftH*2/5);
    //protfoliobarDiv[i].attribute('align','left');
    protfoliobarDiv[i].hide();
  }
  for (let i = 0; i < protfolioBarDivS.length; i++) {
    protfolioBarDivS[i].style('max-width',250+'px');
  }
  for (let i = 0; i < downloadProtfolio.length; i++) {
    downloadProtfolio[i].mouseOver(pdfOver);
    downloadProtfolio[i].mouseOut(pdfOut);
  }

  protfolioBarImg.size(350,450);  
  InlfuenceBarImg.size(320,450);
  InfluenceHopeBarImg.size(350,250);

  QQbar.hide();
  Wecheatbar.hide();
  QQbar.position(l+canvasW/2,t+canvasH/2);
  Wecheatbar.position(l+canvasW/2,t+canvasH/2);
  X.hide();
  X.mouseClicked(barBackgroundOut);
  X.position(l+homePageLeftW-15,t+0);


  // aboutCode Link
  aboutCode = selectAll('.aboutCode');
  for (let i = 0; i < aboutCode.length; i++) {
    aboutCode[i].style('border-bottom-width',1+'px');
    aboutCode[i].style('border-bottom-style','solid');
    aboutCode[i].style('color','gray');
    aboutCode[i].style('border-bottom-color','gray');
    aboutCode[i].mouseOver(HighLightLinkOfSketch);
    aboutCode[i].mouseOut(unHighLightLinkOfSketch);
  }


  //apple 
  apple = select('#apple');
  apple.position(l+windowWidth*62/100+homePageRightW/2,t+windowHeight/2);


  //bodyshow
  body.show();



  //resizePlan
    //setup 只在窗口打开时运行一次 （窗口适配方案 是否为大屏横屏浏览，打开时）
  if (windowWidth>=980&&windowWidth>=windowHeight) {
      apple.show();
      rightbutton.show();
    for(let i=0; i<protfolioLeftSAll.length; i++){
      //protfolioLeftSAll[i].style('float','left');
        protfolioLeftSAll[i].style('margin', '30px');
        //protfolioLeftSAll[i].style('margin', 'auto');
    }
  }else{
      apple.hide();
      rightbutton.hide();
      rightbuttonStatus = 0;
      for (let i = 0; i < protfolioLeftSAll.length; i++){
          //protfolioLeftSAll[i].style('float', 'none');
        protfolioLeftSAll[i].style('margin', '30px auto');
        //protfolioLeftSAll[i].style('margin', 'auto');
    }
  }
    //
  resetSizePlan();
  repositionLeftAll();


}


function draw() {

  t = document.documentElement.scrollTop;
  l = document.documentElement.scrollLeft;

  // logoGo
    logoBigger();
    logoSmaller();

   // minHGo
    minSSOver();
    minSSOut();
    onoBackGo();
    onoBackBack();

  // leftLinkGo
  for (let i = 0; i < ss.length; i++) {
      linkBigger(i);
      linkSmaller(i);
  }





  //homePageRightGo
  homePageRightGo();

  //rightDivGo
  if (bs==1) {
    rightDivGo();
  }else if (bs==0) {
    rightDivBack();
  }

  for (let i = 0; i < rightDivSAll.length; i++) {
    if (rightDivSS[i]==1){
      rightDivSGo(i);
    }else if (rightDivSS[i]==0) {
      rightDivSBack(i);
    }
  }

  //ProtfolioRightGo
  for(let i=0; i<protfolioRightSS.length; i++){
    if(protfolioRightSS[i] == 1){
      protfolioRightGo(i);
    }else if(protfolioRightSS[i] == 0){
      protfolioRightBack(i);
    }
  }

  //ProtfolioLeftGo!
  for(let i=0; i<protfolioLeftSS.length; i++){
    if(protfolioLeftSS[i]==1){
      protfolioLeftSGo(i);
    }else if(protfolioLeftSS[i]==0){
      protfolioLeftSBack(i);
    }
  }


  //reposition
  repositionLeftAll();




  //canvas.clear();
  if (os!=21) {
   CanvasGo();
  }
  // noFill();
  // strokeWeight(1);
  // stroke(0);
  // rect(0,0,width,height);

}



function resetSizePlan(){ //启动时 和改变窗口时发生

  //resize homePageDiv(left&right);


    if (windowWidth>=980&&windowWidth>=windowHeight) {
        homePageLeftW = windowWidth * 62 / 100;
    } else {
        homePageLeftW = windowWidth;
    }

  homePageLeftH = windowHeight
  homePageLeft.size(homePageLeftW,homePageLeftH);

  homePageRightW = windowWidth*38/100;
  homePageRightH = windowHeight ;
  homePageRight.size(homePageRightW,homePageRightH);

  //resize rightbuttonStatus 让右侧栏目快速回收或打开
  if (rightbuttonStatus == 21 || rightbuttonStatus == 1) {
    homePageRightX = l+windowWidth*62/100;
  }else if (rightbuttonStatus == 20 || rightbuttonStatus == 0) {
    homePageRightX = l+windowWidth;
  }


  //resize canves
  canvasW = homePageLeftW;
  canvasH = homePageLeftH;
  canvasX = homePageLeftX;
  canvasY = homePageLeftY;
  canvas.position(canvasX, canvasY);
  canvas.resize(canvasW,canvasH);
  reinit();

 ////logoDIV
    minX = 170*n+(1-n)*60;
    minY = 120*n;
    lx = minX;
    ly = minY;
    maxX = minX+12;
    maxY = windowHeight;
    vx = (maxX-minX)/9;
    vy = (maxY-minY)/9;
    logodiv.style('width',lx+'px');
    logodiv.style('height',ly+'px');
    logoXmin = minX*6/27;
    logoYmin = minY*6/27;
    logoXmax = logoXmin;
    logoYmax = logoYmin+50*n;
    logoX = logoXmin;
    logoY = logoYmin;
    logoX_v = (logoXmax-logoXmin)/9;
    logoY_v = (logoYmax-logoYmin)/9;
    logoh1.position(logoX,logoY);
    logoh1.style('line-height',22*n+'px');
    logoh2.style('line-height',12*n+'px');
    logoh1.style('font-size',16*n+'px');
    logoh2.style('font-size',9*n+'px');
    for(let i=0;i<logoLink.length;i++){
      logoLink[i].style('font-size',15*n+'px');
      if (i==1||i==2) logoLink[i].position(15,(220+(i+1)*35)*nl);
      else if (i==3||i==4||i==5) logoLink[i].position(15,(220+(i+2)*35)*nl);
      else logoLink[i].position(15,(220+i*35)*nl);
    }
    logoDivS.style('font-size',13*n+'px');
    logoDivS.style('width',140*n+'px');
    logoDivS.position(20,520*nl);
    if (windowHeight<=620)   logoDivS.hide();
    else logoDivS.show();

 ////minH
    aboutOnoaix.style('width',homePageLeftW/2+'px');
    for (let i = 0; i < minHh.length; i++) {
      minHh[i].style('font-size',28*n+'px');
    }
    minHS.style('font-size',17*n+'px');
    minSS.style('font-size',13*n+'px');
    onoBack.size(36*n,32*n);
    onoBack.style('border-top-width',6*n+'px');
    for (let i = 0; i < aboutCode.length; i++) {
      aboutCode[i].style('font-size',13*n+'px');
    }


 ////leftLink
    minXl = 60*n;
    minYl = 60*n;
    maxXl = minXl*1.5;
    maxYl = minYl*1.5;
    vxl = (maxXl - minXl)/5;
    vyl = (maxYl - minYl)/5;
    for (let i = 0; i < leftLink.length; i++) {
      xl[i] = minXl;
      yl[i] = minYl;
      leftLink[i].style('width',xl[i]+'px');
      leftLink[i].style('height',yl[i]+'px');
      icons[i].style('font-size',iconSize[i]*n+'px');
    }
    barBackground.style('width',canvasW+'px');
    barBackground.style('height',canvasH+'px');




    //resize barbackground
    for (let i = 0; i < protfoliobarDiv.length; i++) {
      protfoliobarDiv[i].size(650*n,300*n);
      protfoliobarDiv[i].position(homePageLeftW/2,homePageLeftH*2/5);
      //protfoliobarDiv[i].attribute('align','left');
    }
    for (let i = 0; i < protfolioBarDivS.length; i++) {
      protfolioBarDivS[i].style('max-width',250*n+'px');
      protfolioBarDivS[i].style('font-size',12*n+'pt');
    }
    protfolioBarImg.size(350*n,450*n);  
    InlfuenceBarImg.size(320*n,450*n);
    InfluenceHopeBarImg.size(350*n,250*n);



    //resize rightAll;

    rightDivBigW = homePageRightW-lineW*4;
    rightDivBigH = homePageRightH*18/20;

    for (let i = 0; i < rightDivBigs.length; i++) {
      rightDivBigs[i].size(rightDivBigW,rightDivBigH);
    }

    line.size(lineW,rightDivBigH);


    //right DivS
    rightDivSW = rightDivBigW;
    rightDivSH = 190*n+rightDivSpadding*2;

    //（窗口适配方案，窗口宽度跨越980px的那一瞬间 和 竖屏时 重置窗口尺寸）
      if (windowWidthP < 980 && windowWidth>=980 && windowWidth>=windowHeight) {  //只在窗口w超过980px临界大小且为横屏时发生一次
      rightbuttonStatus = 1;
      //homePageRightGo();
        apple.show();
        rightbutton.show();
      for(let i=0; i<protfolioLeftSAll.length; i++){
        //protfolioLeftSAll[i].style('float','left');
          protfolioLeftSAll[i].style('margin', '30px');
          //protfolioLeftSAll[i].style('margin', 'auto');
          }
      } else if ((windowWidthP >= 980 && windowWidth < 980)) { //只在窗口w小于980px临界大小时发生一次
      rightbuttonStatus = 0;
      //homePageRightGo();
        apple.hide();
        rightbutton.hide();
      for(let i=0; i<protfolioLeftSAll.length; i++){
        //protfolioLeftSAll[i].style('float','none');
          protfolioLeftSAll[i].style('margin', '30px auto');
          //protfolioLeftSAll[i].style('margin', 'auto');
      }
      //rightDivS1W = rightDivSW*1/2;
      //for (let i = 0; i<rightDivSAll.length; i++){
      //  rightDivSAll[i].size(rightDivSW,rightDivSH);
      //  rightDivS1All[i].size(rightDivS1W,rightDivSH-rightDivSpadding*2);
      //  rightDivS2All[i].style('margin','0px 20px 0px 20px');
      //  rightDivS2All[i].size(rightDivSW-rightDivS1W-40-10*n,rightDivSH-rightDivSpadding*2);
      //}
      //for (let i = 0; i < rightDivSBAll.length; i++) {
      //  rightDivSBAll[i].size(rightDivSW,rightDivSH-rightDivSpadding*2);
      //  rightDivSBoAll[i].size(rightDivSW,rightDivSH-rightDivSpadding*2);
      //}
    }

  windowWidthP = windowWidth;
  rightDivS1W = rightDivSW;
      for (let i = 0; i<rightDivSAll.length; i++){
        rightDivSAll[i].style('width',rightDivSW+'px');
        rightDivSAll[i].style('height','auto');
        rightDivS1All[i].size(rightDivS1W,rightDivSH-rightDivSpadding*2);
        rightDivS2All[i].style('width',rightDivS1W-20+'px');
        rightDivS2All[i].style('height','auto');
        rightDivS2All[i].style('margin','10px 10px 0px 10px');
        rightDivSBAll[i].size(rightDivSW,document.getElementById('rightDivSAll['+i+']').offsetHeight-rightDivSpadding*2);
        rightDivSBoAll[i].size(rightDivSW,document.getElementById('rightDivSAll['+i+']').offsetHeight-rightDivSpadding*2);
      }
      for (let i = 0; i < rightDivSBAll.length; i++) {
        //rightDivSBAll[i].size(rightDivSW,rightDivSH-rightDivSpadding*2);
      }


    for (var i = 0; i < rightDivBigs.length; i++) {
      if (pageStatus[i] == 1 ){
        rscrollh = document.getElementById('rightDivBigs['+i+']').scrollHeight ;
        roffseth = document.getElementById('rightDivBigs['+i+']').offsetHeight ;
      }
    }

 //resize leftAll
  LeftDivBigW = homePageLeftW;
    LeftDivBigH = homePageLeftH;
    if (rightbuttonStatus == 1 || rightbuttonStatus == 21) {
        protfolioSW = (LeftDivBigW - 70) / 20 * 13 - 60;
    } else {
        protfolioSW = (LeftDivBigW - 70) * n - 60;
    }

  //resize leftdivBigs
  for(let i=0; i<leftDivBigs.length; i++){
    if(i!=0){
      leftDivBigs[i].size(LeftDivBigW,LeftDivBigH);
    }
  }

  //resize protfolio
    for (let i = 0; i < protfolioLeftSAll.length; i++){
        protfolioLeftSPositionDeta[i] = protfolioSW;

      //protfolioLeftSAll[i].size(protfolioSW, protfolioSW);
        protfolioLeftSAll[i].style('width', protfolioSW + 'px');
        protfolioLeftSAll[i].style('height', 'auto');

        //protfolioLeftSImgAll[i].size(protfolioSW, protfolioSW / 2);
        protfolioLeftSImgAll[i].style('width', protfolioSW + 'px');
        protfolioLeftSImgAll[i].style('height', protfolioSW / 5 * 2 + 'px');

        protfolioLeftSIntroductionAll[i].style('width', protfolioSW - 2 + 'px');
        protfolioLeftSIntroductionAll[i].style('height', 'auto');

      //protfolioLeftSBoAll[i].size(protfolioSW, protfolioSW);
        protfolioLeftSBoAll[i].style('width', protfolioSW + 'px');
        protfolioLeftSBoAll[i].style('height', protfolioSW / 5 * 2 + 'px');
     // protfolioLeftSBAll[i].size(protfolioSW, protfolioSW);
        protfolioLeftSBAll[i].style('width', protfolioSW + 'px');
        protfolioLeftSBAll[i].style('height', protfolioSW / 5 * 2 + 'px');
  }

  //resize protfolioRight
  protfolioImg.size(270*n,350*n);
  InfluenceImg.size(180*n,250*n);
  InfluenceHopeImg.size(200*n,150*n);

}


function repositionLeftAll(){

  //reposition homePageDiv(left&right)
  //homePageRightX = l+windowWidth*62/100;
  homePageRightY = t;
  homePageRight.position(homePageRightX,homePageRightY);
  homePageLeftX = l;
  homePageLeftY = t;
  homePageLeft.position(homePageLeftX,homePageLeftY);


  //reposition canvas
  canvasX = homePageLeftX;
  canvasY = homePageLeftY;
  canvas.position(canvasX,canvasY);


  //reposition leftAll
  leftPositionX =l + canvasW-minXl/2;
  leftPositionY =t + windowHeight-minYl*2;
  for (let i = 0; i < leftLinkPosition.length; i++) {
    if (i==0){
      leftLinkPosition[i].position(leftPositionX ,leftPositionY);
    }else if (i==1){
      leftLinkPosition[i].position(leftPositionX - minXl/2 ,leftPositionY + minYl/2 );
    }else if (i==2) {
      leftLinkPosition[i].position(leftPositionX - minXl,leftPositionY + minYl);
    }else{
      leftLinkPosition[i].position(leftPositionX - minXl*1.5 ,leftPositionY + minYl*1.5 );
    }
  }

  //reposition minH
  aboutOnoaix.position(homePageLeftW/2+homePageLeftW/45,t+homePageLeftH/2-homePageLeftH/25);

  oXMin = document.getElementById('ono').offsetLeft;
  oYMin = document.getElementById('ono').offsetTop;
  oXMax = document.getElementById('ono').offsetLeft*13/11;
  oYMax = document.getElementById('ono').offsetTop;
  if (oSt==1&os!=1) {
    oX = oXMin;
    oY = oYMin;
  }else if (oSt==0&os!=0) {
    oX = oXMax;
    oY = oYMax;
  }
  onoBack.position(oX,oY);

  QQbar.position(l+canvasW/2,t+canvasH/2);
  Wecheatbar.position(l+canvasW/2,t+canvasH/2);
  X.position(l+homePageLeftW-15,t+0);




  //reposition rightAll
  rightDivBigX = lineW;
  rightDivBigY = t+homePageRightH*1/20;
  for (var i = 0; i < rightDivBigs.length; i++) {
    rightDivBigs[i].position(rightDivBigX,rightDivBigY);
  }


  for (let i = 0; i < rightDivSAll.length; i++) {
    if (pageStatus[i] == 1) {
      rl = document.getElementById('rightDivBigs['+i+']').scrollTop ;
    }
  }


  if (rscrollh-roffseth ==0 ) {
    scrollY = scrollH;
  }else{
    scrollY = map(rl,0,rscrollh-roffseth,scrollH,windowHeight*18/20-scrollH);
  }
  line.position(0,windowHeight*1/20);
  scrollbar1.size(scrollW,scrollY);
  scrollbar2.size(scrollW,windowHeight*18/20-scrollY);

  if (rightbuttonStatus != 0) {

    let rl_ = constrain(map(rl,0,150,0,60 - rightDivBigY ),0,60 - rightDivBigY);
    let fontsize = 20-constrain(map(rl,0,150,0,5),0,5);

    if (fontsize<=17) {
      Head.style('background-color','black');
      Head.style('color','white');
      Head.style('font-weight','normal');
      //Head.style('border','solid 1px black');
    }else{
      Head.style('background-color','transparent');
      Head.style('font-weight','bold');
      Head.style('color','black');
      //Head.style('border','none');
    }
    Head.style('font-size',fontsize+'px');
    Head.position(20*2,60-rl_);

  }


  //reposition rightbutton
  rightbutton.position(windowWidth-50,windowHeight/2);

  //reposition protfolioIMG
  let protfolioImgX = 130*nw;
  let protfolioImgY = 150*nl;
  protfolioImg.position(protfolioImgX-(1-nw)*150,protfolioImgY);
  InfluenceImg.position(protfolioImgX-80*nw-(1-nw)*150,protfolioImgY+150*nl);
  InfluenceHopeImg.position(protfolioImgX+40*nw-(1-nw)*150,protfolioImgY+275*nl);


}