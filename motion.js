//change LogoDiv

function Over(){
  s = 1;
  this.style('padding-bottom',30+'px');
  for (let i = 0; i < logoLink.length; i++) {
    logoLink[i].show();
  }
  //this.style('border',2+'px'+' solid'+ ' orangered');
}

function Out(){
  s = 0;
  this.style('padding',0+'px');
  //this.style('border','none');
}

function logoBigger(){
  if(s==1){
    if(lx < maxX){
      lx+=vx;
    }
    if(ly < maxY){
      ly+=vy;
    }
    if (logoY<logoYmax) {
      logoY+=logoY_v;
    }
    if (logoX<logoXmax){
      logoX+=logoX_v;
    }
    if(positionMoreX>-35-18) positionMoreX-=2;
    if(ly>=maxY&lx>=maxX&logoY>=logoYmax&logoX>=logoXmax){
      lx = maxX;
      ly = maxY;
      logoY = logoYmax;
      logoX = logoXmax;
      s = 21;
    }
    logodiv.style('width',lx+'px');
    logodiv.style('height',ly+'px');
    logoh1.position(logoX,logoY);
    positionMore.position(positionMoreX,29);
  }
}

function logoSmaller(){
  if(s==0){
    if(lx > minX){
      lx-=vx;
    }
    if(ly > minY){
      ly-=vy;
    }
    if (logoY>logoYmin) {
      logoY-=logoY_v;
    }
    if (logoX>logoXmin){
      logoX-=logoX_v;
    }
    if(positionMoreX<-35) positionMoreX+=2;
    if(ly<=minY&lx<=minX&logoY<=logoYmin&logoX<=logoXmin){
      lx = minX;
      ly = minY;
      logoX = logoXmin;
      logoY = logoYmin;
      s = 20;
      logodiv.style('pointer-events','auto');
      for (let i = 0; i < logoLink.length; i++) {
        logoLink[i].hide();
      }
    }
    logodiv.style('width',lx+'px');
    logodiv.style('height',ly+'px');
    logoh1.position(logoX,logoY);
    positionMore.position(positionMoreX,29);
  }
}



function HighLightLinkOfLogo(){
  let i = logoLink.indexOf(this);
  this.style('font-style','oblique');
  //this.style('text-decoration','underline');
  this.style('color','orangered');
  logoDivS.html(logoDivSHtml[i]);
}

function unHighLightLinkOfLogo(){
  this.style('font-style','normal');
  //this.style('text-decoration','none');
  this.style('color','white');
  logoDivS.html('');
}




// change minH

function changeMinSS(){
  ms = 1;
}
function BackMinSS(){
  ms = 0;
}
function minSSOver(){
  if (ms==1) {
    if(AlphaSS<0.7){
      AlphaSS+=1/10;
    }
    if(AlphaSS>=0.7){
      ms = 21;
    }
    minSS.style('background-color','rgba(255,255,255,'+AlphaSS+')');
  }
}
function minSSOut(){
  if (ms==0) {
    if(AlphaSS>0){
      AlphaSS-=1/10;
    }
    if(AlphaSS<=0){
      ms = 20;
    }
    minSS.style('background-color','rgba(230,230,230,'+AlphaSS+')');
  }
}

function onoBackClicked(){
  if (oSt == 1) {
    os = 1;
    canvas.hide();
    onoBack.style('border-color','red');
  }
  if (oSt == 0) {
    os = 0;
    canvas.show();
    onoBack.style('border-color','lawngreen');
  }
}
function onoBackGo(){
  if (os==1) {
    if (oX < oXMax) {
      oX += 2;
    }else if (oX >= oXMax) {
      oX = oXMax;
    }
    if (oY < oYMax) {
      oY += 1;
    }else if (oY >= oYMax) {
      oY = oYMax;
    }
    if (oX>=oXMax & oY>=oYMax) {
      os = 21;
      oSt = 0;
    }
    onoBack.position(oX,oY);
  }
}
function onoBackBack(){
  if (os==0) {
    if (oX > oXMin) {
      oX -= 2;
    }else if (oX <= oXMin) {
      ox = oXMin;
    }
    if (oY > oYMin) {
      oY -= 1;
    }else if (oY<= oYMin) {
      oY = oYMin;
    }
    if (oX <= oXMin & oY <= oYMin) {
      os = 20;
      oSt = 1;
    }
    onoBack.position(oX,oY);
  }
}
function HighLightLinkOfSketch(){
  let i = aboutCode.indexOf(this);
  //this.style('font-style','italic');
  aboutCode[i].style('cursor','pointer');
  aboutCode[i].style('border-bottom-width',1.2+'px');
  aboutCode[i].style('border-bottom-style','solid');
  aboutCode[i].style('border-bottom-color','red');
  //aboutCode[i].style('background-color','white');
  aboutCode[i].style('color','red');

  //this.style('border-color','gray');
}
function unHighLightLinkOfSketch(){
  let i = aboutCode.indexOf(this);
  //this.style('font-style','normal');
  aboutCode[i].style('border-bottom-width',1+'px');
  aboutCode[i].style('border-bottom-style','solid');
  aboutCode[i].style('border-bottom-color','gray');
  //aboutCode[i].style('background-color','transparent');
  aboutCode[i].style('color','gray');
}





// change LeftLinks

function overSS(){
  let i = leftLink.indexOf(this);
  ss[i] = 1;
  this.style('z-index','2');
  this.style('padding',minXl/4+'px');
  icons[i].show();
  icons[i].style('color','white');
  //this.style('border',2+'px'+' solid'+ ' orangered');
}

function outSS(){
  let i = leftLink.indexOf(this);
  ss[i] = 0;
  this.style('z-index','1');
  this.style('padding',0+'px');
  icons[i].hide();
  //this.style('border','none');
}

function linkBigger(i){
  if(ss[i]==1){
    if (xl[i] < maxXl){
      xl[i] += vxl;
    }
    if(yl[i] < maxYl){
      yl[i] += vyl;
    }
    if (xl[i]>=maxXl){
      xl[i] = maxXl;
    }
    if (yl[i]>=maxYl) {
      yl[i] = maxYl;
    }
    if (Alpha[i] < 1){
      Alpha[i] +=1/15;
    }
    if (Alpha[i] >= 1){
      Alpha[i] = 1;
    }
    if (xl[i]>=maxXl&yl[i]>=maxYl&Alpha[i]>=1) {
      ss[i] = 21;
    }
    leftLink[i].style('width',xl[i]+'px');
    leftLink[i].style('height',yl[i]+'px');
  }
}

function linkSmaller(i){
  if(ss[i]==0){
    if (xl[i] > minXl){
      xl[i] -= vxl;
    }
    if(yl[i] > minYl){
      yl[i] -= vyl;
    }
    if (xl[i]<=minXl){ 
      xl[i] = minXl;
    }
    if (yl[i]<=minYl){
      yl[i] = minYl;
    }
    if (Alpha[i] > 0){
      Alpha[i] -=1/15;
    }
    if (Alpha[i] <= 0){
      Alpha[i] = 0;
    }
    if (xl[i]<=minXl&yl[i]<=minYl&Alpha[i]<=0){
      ss[i] = 20;
    }
    leftLink[i].style('width',xl[i]+'px');
    leftLink[i].style('height',yl[i]+'px');
  }
}

//bar background
function barBackgroundOver(){
  let i = leftLink.indexOf(this);
  if (i == 0){
    barBackground.style('background-color','rgba(0,90,255,0.9)');
    Wecheatbar.hide();
    QQbar.show();
  }
  if (i == 1){
    barBackground.style('background-color','rgba(125,255,0,0.9)');
    QQbar.hide();
    Wecheatbar.show();
  }
  barBackground.show();
  X.style('color','black');
  X.show();
}
function barBackgroundOut(){
  barBackground.hide();
  X.hide();
  QQbar.hide();
  Wecheatbar.hide();
  for (var i = 0; i < protfoliobarDiv.length; i++) {
    protfoliobarDiv[i].hide();
  }
}
function pdfOver(){
  let i = downloadProtfolio.indexOf(this);
  if (i==1) {
    this.style('border-bottom','solid 1px white');
  }else{
    this.style('border-bottom','solid 1px black');
  }
}
function pdfOut(){
  this.style('border-bottom','solid 1px silver');
}





//homePageRight

function homePageRightClicked(){
  if (rightbuttonStatus == 21) {
    rightbuttonStatus = 0;
    rightbutton.html('···');
    homePageRight.style('pointer-events','none');
  }else if (rightbuttonStatus ==20) {
    rightbuttonStatus = 1;
    rightbutton.html('···');
    homePageRight.style('pointer-events','none');
  }
}

function homePageRightGo(){

  //右侧部分开始收回。。。
  if (rightbuttonStatus == 0) {
    if (homePageRightX < l+windowWidth) {
      homePageRightXv = sin(homePageRightXa)*30*n;
      homePageRightX += homePageRightXv;
      homePageRightXa += 0.1*n;
      if (homePageRightXa >= PI) homePageRightXa = PI;
    }
    if (homePageRightX >= l+windowWidth) {
      homePageRight.style('pointer-events','none');
      homePageRightXa = 0;
      homePageRightXv = 0;
      homePageRightX = l+windowWidth;
      rightbuttonStatus = 20;
      rightbutton.html('<');

      displayRightDivBigs(); // reflash display only when rightDiv is on the right;


      //收回完成后判断是否再自动弹出
      if (rightbuttonBack == 1 && rightbuttonStatus == 20) {
          rightbuttonStatus = 1;
          rightbutton.html('<');
      }else{
          rightbuttonStatus = 20;
      }
    }
  }

  if (rightbuttonStatus == 1) {
    if (homePageRightX > l+windowWidth*62/100) {
      homePageRightXv = sin(homePageRightXa)*30*n;
      homePageRightX -= homePageRightXv;
      homePageRightXa += 0.1*n;
      if (homePageRightXa >= PI) homePageRightXa = PI;
    }
    if (homePageRightX <= l+windowWidth*62/100) {
      homePageRight.style('pointer-events','auto');
      homePageRightXa = 0;
      homePageRightXv = 0;
      homePageRightX =  l+windowWidth*62/100;
      rightbuttonStatus = 21;
      rightbuttonBack = 0;
      rightbutton.html('>');
    }
  }

}






//change rightDiv

function rightDivOver(){
  bs = 1;
}
function rightDivOut(){
  bs = 0;
}
function rightDivGo(){
  if(scrollbarAlpha < 1){
    scrollbarAlpha += 0.1;
  }else if (1 <= scrollbarAlpha) {
    scrollbarAlpha = 1;
  }
  if (scrollW < scrollWmax) {
    scrollW += 0.5;
  }else if (scrollW >= scrollWmax) {
    scrollW = scrollWmax;
  }
  if (scrollbarAlpha>=1&&scrollW>=scrollWmax) {
    bs = 21;
  }
  scrollbar1.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
  scrollbar2.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
}
function rightDivBack(){
  if(0.2 < scrollbarAlpha){
    scrollbarAlpha -= 0.1;
  }else if (scrollbarAlpha <= 0.2) {
    scrollbarAlpha = 0.2;
  }
  if (scrollW > 1) {
    scrollW -= 0.5;
  }else if (scrollW <= 1) {
    scrollW = 1;
  }
  if (scrollbarAlpha<=0.2&scrollW<=1) {
    bs = 20;
  }
  scrollbar1.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
  scrollbar2.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
}
function rightDivSOver(){
  let i = rightDivSAll.indexOf(this);
  rightDivSS[i] = 1;
  //rightDivSBAll[i].style('border','solid '+2+'px '+'black ');
  //this.style('width',296+'px');
  //this.style('height',196+'px');
}
function rightDivSOut(){
  let i = rightDivSAll.indexOf(this);
  rightDivSS[i] = 0;
  //rightDivSBAll[i].style('border','solid '+rightDivSBpadding[i]+'px '+'black ');
  //this.style('width',300+'px');
  //this.style('height',20+'px');
}
function rightDivSGo(i){
  if (rightDivSBpadding[i]<4) {
    rightDivSBpadding[i] += 0.8;
  }else if (rightDivSBpadding[i]>=4) {
    rightDivSBpadding[i] = 4;
    rightDivSS[i] = 21;
  }
  rightDivSBAll[i].style('border','solid '+rightDivSBpadding[i]+'px '+'black');
}
function rightDivSBack(i){
  if (rightDivSBpadding[i]>0) {
    rightDivSBpadding[i] -= 0.8;
  }else if (rightDivSBpadding[i]<=0) {
    rightDivSBpadding[i] = 0;
    rightDivSS[i] = 20;
  }
  rightDivSBAll[i].style('border','solid '+rightDivSBpadding[i]+'px '+'black');
}



function rightbuttonOver(){
  rbs = 1;
}
function rightbuttonOut(){
  rbs = 0;
}





function protfolioOver(){
  let i = protfolioRightSB.indexOf(this);
  protfolioRightSS[i] = 1;
}
function protfolioOut(){
  let i = protfolioRightSB.indexOf(this);
  protfolioRightSS[i] = 0;
}
function protfolioRightGo(i){
  if(protfolioRightBorderDeta[i]<2){
    protfolioRightBorderDeta[i] += 0.4;
  }else{
    protfolioRightBorderDeta[i] = 2;
    protfolioRightSS[i] = 21;
  }
  protfolioRightSB[i].style('border','solid '+protfolioRightBorderDeta[i]+'px '+'black');
  //protfolioRightSB[i].style('background-color','black');
}
function protfolioRightBack(i){
  if(protfolioRightBorderDeta[i]>0){
    protfolioRightBorderDeta[i] -= 0.4;
  }else{
    protfolioRightBorderDeta[i] = 0;
    protfolioRightSS[i] = 20;
  }
  protfolioRightSB[i].style('border','solid '+protfolioRightBorderDeta[i]+'px '+'black');
  //protfolioRightSB[i].style('background-color','black');

}

function protfolioClicked(){
  let i = protfolioUrl.indexOf(this);
  for (let j = 0; j < protfoliobarDiv.length; j++) {
    protfoliobarDiv[j].hide();
  }
  if (i == 1) {
    X.style('color','white');
  }else{
    X.style('color','black');
  }
  if (i == 0 ) {
    X.show();
    barBackground.style('background-color','rgba(255,255,0,0.9)');
    barBackground.show();
    protfoliobarDiv[i].show();
    //window.open('https://70e0c93d-30db-4357-aec0-0376f3cdc3cc.filesusr.com/ugd/22c7d0_fa876baa819b400291e1df8b4841a9f1.pdf');
  }else if (i == 1) {
    X.show();
    barBackground.style('background-color','rgba(0,15,255,0.9)');
    barBackground.show();
    protfoliobarDiv[i].show();
    //window.open('https://70e0c93d-30db-4357-aec0-0376f3cdc3cc.filesusr.com/ugd/22c7d0_6dc259eb86ab44e497ac8ff07daa0d51.pdf');
  }else if (i == 2) {
    X.show();
    barBackground.style('background-color','rgba(255,255,255,0.9)');
    barBackground.show();
    protfoliobarDiv[i].show();
    //window.open('https://70e0c93d-30db-4357-aec0-0376f3cdc3cc.filesusr.com/ugd/22c7d0_41a08c0873fd4b73b7eb4c8556f05668.pdf');
  }
}




function changeToRightDivBig(){
  let i = logoLink.indexOf(this);

  if (pageStatus[i] != 1 && (rightbuttonStatus==21 || rightbuttonStatus==20) ) {
    logodiv.style('pointer-events','none');

    if((windowWidthP<980 && windowWidth<980)&&rightbuttonStatus==20){
      rightbuttonBack = 0;
    }else{
      rightbuttonBack = 1;
    }

    rightbuttonStatus = 0;

    for (let j = 0; j < rightDivBigs.length; j++) {
      if (j==i) {
        pageStatus[j] = 1;
      }else{
        pageStatus[j] = 0;
      }
    }
    for (let h = 0; h < logoLink.length; h++) {
      if (h==i) {
          logoLink[i].style('border-left', 'solid ' + logoLinkBorderW + 'px orangered');
      }else{
        logoLink[h].style('border','none');
      }
    }
  }
}

function rightDivSClicked(){
  let i = rightDivS1All.indexOf(this);
  if (i==0) {
    rightbuttonStatus = 0;
    rightbuttonBack = 1;
    for (let j = 0; j < rightDivBigs.length; j++) {
      pageStatus[j] = 0;
    }
    for (let h = 0; h < logoLink.length; h++) {
      logoLink[h].style('border','none');
    }
    pageStatus[2] = 1;
    logoLink[2].style('border-bottom','solid 2px white');
  }else if (i==1) {
    window.open('#');
  }else if (i==2) {
    window.open('https://github.com/onoaix/Flow-FIeld-Following','_self');
  }else if (i==3) {
    window.open('https://shengtanggongzhu.wixsite.com/website/single-post/2019/08/16/ZOKEI%E5%B1%95%E3%81%AE%E3%81%9F%E3%82%81%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%97%E3%81%9F%E3%83%9D%E3%82%B9%E3%82%BF%E3%83%BC','_self');
  }else if (i==4){
    window.open('https://shengtanggongzhu.wixsite.com/website/single-post/2019/08/26/%E3%80%8CINFLUENCE%E3%80%8D','_self');
  }else if(i==5){
    window.open('https://shengtanggongzhu.wixsite.com/website/single-post/2016/05/03/Modern-minimalism-one-artists-journey','_self');
  }

}


function protfolioLeftSOver(){
    let i = protfolioLeftSImgAll.indexOf(this);
    protfolioLeftSS[i] = 1;
  //protfolioLeftSIntroductionAll[i].show();
}
function protfolioLeftSOut(){
    let i = protfolioLeftSImgAll.indexOf(this);
  protfolioLeftSS[i] = 0;
  //protfolioLeftSIntroductionAll[i].show();
}

function protfolioLeftSGo(i){
  //////
  let pfsH = document.getElementById('protfolioLeftSIntroductionAll['+i+']').offsetHeight;
  if(pfsH<=protfolioSW){
    protfolioLeftSPositionDeta[i] -= pfsH;
    if(protfolioLeftSPositionDeta[i]<=protfolioSW-pfsH){
      protfolioLeftSPositionDeta[i] = protfolioSW-pfsH;
    }
    //protfolioLeftSIntroductionAll[i].show();
  }
  //////
  protfolioLeftSBDeta[i] += 0.8;
  if(protfolioLeftSBDeta[i]>=4){
    protfolioLeftSBDeta[i] = 4;
  }
  protfolioLeftSBAll[i].style('border','solid '+protfolioLeftSBDeta[i]+'px black');
  protfolioLeftSImgAll[i].style('border','solid '+protfolioLeftSBDeta[i]+'px rgb(0,0,0,0)');
  if(protfolioLeftSPositionDeta[i] == protfolioSW-pfsH && protfolioLeftSBDeta[i] == 4){
    protfolioLeftSS[i] = 21;
  }
}


function protfolioLeftSBack(i){
  //////
  let pfsH = document.getElementById('protfolioLeftSIntroductionAll['+i+']').offsetHeight;
  protfolioLeftSPositionDeta[i] += pfsH;
  if(protfolioLeftSPositionDeta[i]>=protfolioSW){
    protfolioLeftSPositionDeta[i] = protfolioSW;
  }
  //protfolioLeftSIntroductionAll[i].hide();

  //////
  protfolioLeftSBDeta[i] -= 0.8;
  if(protfolioLeftSBDeta[i]<=0){
    protfolioLeftSBDeta[i] = 0;
  }
  protfolioLeftSBAll[i].style('border','solid '+protfolioLeftSBDeta[i]+'px black');
  protfolioLeftSImgAll[i].style('border','solid '+protfolioLeftSBDeta[i]+'px rgb(0,0,0,0)'); 
  if(protfolioLeftSPositionDeta[i] == protfolioSW && protfolioLeftSBDeta[i] == 0){
    protfolioLeftSS[i] = 20;
    //protfolioLeftSImgAll[i].style('border','solid 1px silver');
  }
}