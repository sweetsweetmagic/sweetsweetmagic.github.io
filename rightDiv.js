
//right
let line;
let lineW;
let lineH;
let scrollbar1;
let scrollbar2;
let bs;
let scrollY;
let scrollH;
let scrollW;
let scrollWmax;
let scrollbarAlpha;

let rightDivBig;
let pageStatus;
let rightDivTitles;
let Head;
let rightDivBigs;
let rightDivSBoAll;
let rightDivSBAll;
let rightDivSAll;
let rightDivS1All;
let rightDivS2All;

let rl;
let roffseth;
let rscrollh;
let rightDivBigH;
let rightDivBigX;
let rightDivBigY;
let rightDivSS;
let rightDivSW;
let rightDivSH;
let rightDivS1W;
let rightDivSpadding;
let rightDivSBpadding;

let newSP
let oldSP

//left
let leftDivBigs;




function createScrollbar(){

  scrollbarAlpha = 0.2;
  bs = 20;
  line = select('#line');
  lineW = 20;
  lineH = homePageRightH*18/20;

  //line.style('height',t+windowHeight*18/20+'px');
  line.size(lineW,lineH);
  line.position(0,windowHeight*1/20);
  scrollbar1 = select('#scrollbar1');
  scrollbar2 = select('#scrollbar2');
  scrollH = 10;
  scrollW = 1;
  scrollWmax = 3;
  rl = 0;
  roffseth = 0;
  rscrollh = 0;
  scrollY = map(rl,0,rscrollh-roffseth,scrollH,lineH-scrollH);
  scrollbar1.size(scrollW,scrollY);
  scrollbar2.size(scrollW,lineH-scrollH-scrollY);
  scrollbar1.style('left',scrollWmax+'px');
  scrollbar2.style('left',scrollWmax+'px');  
  scrollbar1.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
  scrollbar2.style('background-color','rgba(0,0,0,'+scrollbarAlpha+')');
  

  //scrollbar.position(0,scrollY);
  rightDivBigs = [];
  leftDivBigs = [];
  leftDivBigs.push(homeCanvas);
  pageStatus = [];
  rightDivTitles = [];
  rightDivSAll = [];
  rightDivS1All = [];
  rightDivS2All = [];
  rightDivSS = [];
  rightDivSBAll = [];
  rightDivSBoAll = [];
  rightDivSBpadding = [];
  	
  rightDivBigX = lineW;
  rightDivBigY = t+homePageRightH*1/20;
  rightDivBigW = homePageRightW-lineW*4 ;
  rightDivBigH = homePageRightH*18/20 ;

}


function createRightDivBig(){



	rightDivBig = createDiv('');
	rightDivBigs.push(rightDivBig);
	pageStatus.push(1);
	rightDivTitles.push('??? RECENT PLAY EVENT &nbsp');
	//rightDivBig.style('opacity','0.5');
	rightDivBig.parent(homePageRight);
	rightDivBig.id('rightDivBig');
	rightDivBig.style('box-sizing','border-box');
	rightDivBig.style('overflow-x','hidden');
	rightDivBig.style('overflow-y','scroll');
	rightDivBig.style('margin-left',20+'px');
	rightDivBig.style('margin-right',20+'px');
	rightDivBig.position(rightDivBigX,rightDivBigY);
	rightDivBig.size(rightDivBigW,rightDivBigH);
	rightDivBig.attribute('align', 'left');



	newSP = document.getElementById('rightDivBig').scrollTop;
    oldSP = document.getElementById('rightDivBig').scrollTop;
	rl = document.getElementById('rightDivBig').scrollTop ;


	Head = createDiv('');
	Head.parent(homePageRight);
	Head.style('position','absolute');
	Head.style('z-index','1');
	Head.position(20*2,60);
	Head.style('padding','2px 0px 2px 0px');
	Head.style('border-radius','0px');
	Head.style('font-size',20+'px');
	Head.style('font-family','Microsoft YaHei');
	Head.style('font-weight','bold');
	//Head.mouseClicked(homePageRightClicked);
	//Head.style('color','black');

	let headSpace = createDiv('');
	headSpace.parent(rightDivBig);
	headSpace.size(rightDivBigW,90);

	RECENT_PLAY();
	idRightDivS();
 	
}



function RECENT_PLAY(){
	createRightDiv('PORTFOLIO','22222.png','#May 19/2019<br><br>It mainly includes some of my works from 2017 - 2019, as well as some earlier works, including two interactive works, two animation works, two visual design works, and two painting practice works. In addition, there are two additional volumes about influence design (it is an interactive work).');
	//rightDivS1All[0].mouseClicked(changeToProtfolio);
	createRightDiv('??????','HONGSHOU.png','#April 17/2020<br><br>Star with INFLUENCE FONT programing object.A motional font object with montion graphic.It is still a idea right now ,It will be gradually improced in future.');
	createRightDiv('INFLUENCE FONT','influence_font.png','#April 17/2020<br><br>Star with INFLUENCE FONT programing object.A motional font object with montion graphic.It is still a idea right now ,It will be gradually improced in future.');
	createRightDiv('Flow-FIeld-Following','Flow_Field_Following.png','#December 1/2019<br><br>I???v tried to make the flow field following steering behavior with p5.js.');
	createRightDiv('BE BORN','zokei_h.png','#November 26/2019<br><br>The contribution of ???ZOKEI EXHIBITION??? poster.???ZO????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????ZO?????????????????????????????????????????????????????????????????????????????????????????????ZO????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????ZOKEI??????????????????????????????????????????????????????????????????????????????????????????????????????????????????');
	createRightDiv('INFLUENCE DESIGN','influence_design.png','#January 28/2019<br><br>???2019????????????????????????????????????????????????<br>???CGDA Visual Communication Design Award 2019 - Silver Award ??????<br>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????UI?????????????????????????????????????????????????????????????????????????????????');
	createRightDiv('BOUNDLESS','boudless_h.png','#November 9/2017<br><br>???UV??????????????????????????????????????????????????????????????????????????????<br>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????D????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????');

}



function createRightDiv(rightDivS_h,rightDivS_img_scr,temp_content){

	let rightDivS = createDiv('');
	rightDivSpadding = 20;
	rightDivSW = rightDivBigW;
	rightDivSH = 190*n+rightDivSpadding*2;
	rightDivS.class('rightDivS');
	rightDivS.parent(rightDivBig);
	rightDivS.style('overflow','hidden');
	rightDivS.style('float','left');
	rightDivS.style('box-sizing','border-box');
	//rightDivS.size(rightDivSW,rightDivSH);
	rightDivS.style('width',rightDivSW+'px');
	rightDivS.style('padding',rightDivSpadding +'px 0px '+ rightDivSpadding+'px 0px');
	//rightDivS.style('border-bottom','solid 1px gray');
	//rightDivS.style('background-color','black');
	rightDivS.mouseOver(rightDivSOver);
	rightDivS.mouseOut(rightDivSOut);


	let rightDivSBo = createDiv('');
	rightDivSBo.parent(rightDivS);
	rightDivSBo.style('position','absolute');
	// rightDivSB.style('-webkit-user-select','none');
	// rightDivSB.style('-moz-user-select','none');
	// rightDivSB.style('-ms-user-select','none');
	// rightDivSB.style('user-select','none');
	rightDivSBo.style('pointer-events','none');
	rightDivSBo.style('box-sizing','border-box');
	rightDivSBo.style('border','solid 1px silver');
	//rightDivSB.style('background-color','black');
	//rightDivSBo.size(rightDivSW,rightDivSH-rightDivSpadding*2);
	rightDivSBo.style('width',rightDivSW+'px');


	let rightDivSB = createDiv('');
	rightDivSB.parent(rightDivS);
	rightDivSB.style('position','absolute');
	// rightDivSB.style('-webkit-user-select','none');
	// rightDivSB.style('-moz-user-select','none');
	// rightDivSB.style('-ms-user-select','none');
	// rightDivSB.style('user-select','none');
	rightDivSB.style('pointer-events','none');
	rightDivSB.style('box-sizing','border-box');
	//rightDivSB.style('background-color','black');
	//rightDivSB.size(rightDivSW,rightDivSH-rightDivSpadding*2);
	rightDivSB.style('width',rightDivSW+'px');

	let rightDivS1 = createDiv('');
	rightDivS1W = rightDivSW*1/2;
	rightDivS1.parent(rightDivS);
	rightDivS1.style('float','left');
	rightDivS1.style('box-sizing','border-box');
	rightDivS1.style('cursor','pointer');
	rightDivS1.style('border','solid 1px silver');
	rightDivS1.size(rightDivS1W,rightDivSH-rightDivSpadding*2);
	rightDivS1.style('background-image','url(RECENT_PLAY_IMG/'+rightDivS_img_scr+')');
	rightDivS1.style('background-position','center center');
	rightDivS1.style('background-repeat','no-repeat');
	rightDivS1.style('background-size','cover');
	rightDivS1.mouseClicked(rightDivSClicked);

	let rightDivS2 = createDiv('');
	rightDivS2.parent(rightDivS);
	rightDivS2.style('overflow','auto')
	rightDivS2.style('float','left');
	rightDivS2.size(rightDivSW-rightDivS1W-40-10*n,rightDivSH-rightDivSpadding*2);
	//rightDivS2.style('border-top','solid 2px silver');
	rightDivS2.style('margin','0px 30px 0px 30px');
	rightDivS2.style('cursor','default');
	//rightDivS2.style('background-color','yellow');

	let rightDivSHead = createP(rightDivS_h);
	rightDivSHead.parent(rightDivS2);
	rightDivSHead.style('word-wrap','break-word');
	rightDivSHead.style('margin',0+'px');
	//rightDivSHead.style('margin','0px 10px 10px 10px');
	rightDivSHead.style('font-size',32+'px');
	rightDivSHead.style('font-family','Microsoft YaHei');
	rightDivSHead.style('font-weight','bold');
	rightDivSHead.style('text-align','left');

	let rightDivSContent = createP(temp_content);
	rightDivSContent.parent(rightDivS2);
	//rightDivSContent.style('word-wrap','break-word');
	//rightDivSContent.style('text-overflow','ellipsis');
	//rightDivSContent.style('margin','0px 10px 0px 10px');
	rightDivSContent.style('font-size',12+'px');
	rightDivSContent.style('color','gray');
	rightDivSContent.style('font-family','"Times New Roman", Times, serif');


	rightDivSAll.push(rightDivS);
	rightDivS1All.push(rightDivS1);
	rightDivS2All.push(rightDivS2);
	rightDivSS.push(0);
	rightDivSBAll.push(rightDivSB);
	rightDivSBoAll.push(rightDivSBo);
	rightDivSBpadding.push(1);

}


function idRightDivBigs(){
	for (let i = 0; i < rightDivBigs.length; i++) {
		rightDivBigs[i].id('rightDivBigs['+i+']');
	}
}

function idLeftDivBigs(){
	for (let i = 0; i < leftDivBigs.length; i++) {
		leftDivBigs[i].id('leftDivBigs['+i+']');
	}
}

function idRightDivS(){
	for (let i = 0; i < rightDivSAll.length; i++) {
        rightDivSAll[i].id('rightDivSAll['+i+']');
	}
}

function idProtfolioLeftS(){
	for (let i = 0; i < protfolioLeftSAll.length; i++) {
		protfolioLeftSAll[i].id('protfolioLeftS['+i+']');
	}
}

function idprotfolioLeftSIntroduction(){
	for (let i = 0; i < protfolioLeftSIntroductionAll.length; i++) {
		protfolioLeftSIntroductionAll[i].id('protfolioLeftSIntroductionAll['+i+']');
	}
}

function displayRightDivBigs(){
	for (let i = 0; i < rightDivBigs.length; i++) {
		if (pageStatus[i]==1){
			rightDivBigs[i].show();
			leftDivBigs[i].show();
			Head.html(rightDivTitles[i]);
		}else{
			rightDivBigs[i].hide();
			leftDivBigs[i].hide();
		}
	}
    for (let i = 0; i < pageStatus.length; i++) {

      if (pageStatus[i] == 0) {
        homePageLeft.style('background-color','transparent');
        for (let i = 0; i < rightDivSBAll.length; i++) {
          rightDivSBoAll[i].size(rightDivSW,document.getElementById('rightDivSAll['+i+']').offsetHeight-rightDivSpadding*2);
          rightDivSBAll[i].size(rightDivSW,document.getElementById('rightDivSAll['+i+']').offsetHeight-rightDivSpadding*2);
        }
      }else{
        homePageLeft.style('background-color','white');
      }

      if (pageStatus[i] == 1){
        if (i == 2 ) {
          line.hide();
          homePageRight.style('background-color','gold');
        }else{
          line.show();
          homePageRight.style('background-color','white');
        }
     	rscrollh = document.getElementById('rightDivBigs['+i+']').scrollHeight ;
      	roffseth = document.getElementById('rightDivBigs['+i+']').offsetHeight ;
      }
    }
}