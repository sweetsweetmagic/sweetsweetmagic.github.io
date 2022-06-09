let protfolioRightDiv;
let protfolioImg;
let InfluenceImg;
let InfluenceHopeImg;
let protfolioUrl;


let protfolioLeftDiv;
let LeftDivBigW;
let LeftDivBigH;
let LeftDivBigX;
let LeftDivBigY;
let protfolioSW;

let protfolioLeftSS;
let protfolioLeftSAll;
let protfolioLeftSBoAll;
let protfolioLeftSBAll;
let protfolioLeftSImgAll;
let protfolioLeftSIntroductionAll;

let protfolioLeftSBDeta;
let protfolioRightSS;

let protfolioRightSB;
let protfolioRightBorderDeta;
let protfolioLeftSPositionDeta;





function createProtfolioLeft(){

	LeftDivBigW = homePageLeftW;
	LeftDivBigH = homePageLeftH;
	LeftDivBigX = l;
	LeftDivBigY = t;
	protfolioSW = (LeftDivBigW - 70) / 20 * 13 - 60;

	protfolioLeftSS = [];
	protfolioLeftSAll = [];
	protfolioLeftSBoAll = [];
	protfolioLeftSBAll = [];
	protfolioLeftSImgAll = [];
	protfolioLeftSIntroductionAll = [];

	protfolioLeftSBDeta = [];
	protfolioLeftSPositionDeta = [];


	protfolioLeftDiv = createDiv('');
	leftDivBigs.push(protfolioLeftDiv);
	protfolioLeftDiv.parent(homePageLeft);
	//protfolioLeftDiv.hide();
	protfolioLeftDiv.size(LeftDivBigW, LeftDivBigH);
	protfolioLeftDiv.attribute('align', 'center');
	protfolioLeftDiv.style('overflow','scroll');
	protfolioLeftDiv.style('box-sizing','border-box');
	protfolioLeftDiv.style('padding','0px 35px 0px 35px');
	protfolioLeftDiv.position(LeftDivBigX,LeftDivBigY);

	let headProtfolio = createDiv('head');
	headProtfolio.id('headProtfolio');
	headProtfolio.parent(protfolioLeftDiv);
	headProtfolio.style('text-align','middle');
	headProtfolio.style('font-size','21pt');
	headProtfolio.style('margin','55px 30px 40px 30px');
	headProtfolio.style('font-family','Microsoft YaHei');
	headProtfolio.style('font-weight','bold');
	headProtfolio.html('P O R T F O L I O');

	createProtfolioLeftS('红瘦','url(PROTFOLIO_IMG/HONG_SHOU.jpg)','以李清照的《如梦令·昨夜雨疏风骤》之词为主题创作而成。');
	createProtfolioLeftS('TREE','url(PROTFOLIO_IMG/OVER_LIFE.jpg)','该作品运用数字图像生成技术完成，通过模拟简单的计算机生命在屏幕中的演绎而生成的视觉图像。作品对不同的树的图片经行了数字化的图像生命演绎，其算法能够简单的识别原始图像中的树干，树枝与树叶并作不同的处理。');
	createProtfolioLeftS('INFLUENCE FONT','url(PROTFOLIO_IMG/INFLUENCE_FONT.jpg)','INFLUENCE FONT programing object.A motional font object with montion graphic.And it was made by processing with intraction event.');
	createProtfolioLeftS('ZOKEI POSTER','url(PROTFOLIO_IMG/zokei_poster.jpg)','以“ZOKEI展”中的“ZO”为创作原型经行的海报设计。“ZOKEI展”是一年一度的毕业展，我希望用“ZO”的概念来隐喻“出生”，并将相同的形状进行反复，迭代地运用，设计了这张海报。');
	createProtfolioLeftS('BOUNDLESS','url(PROTFOLIO_IMG/BOUNDLESS.jpg)','“BOUNDLESS”是一组表现动物的海报作品，利用电脑的3d技术建立模型，并运用2dCG转绘而成。希望通过力的作用扭曲模型对象，从而表达建模时模型磨损和法线错误的感觉。因此动物模型呈现变形，拉伸，或相互突破的样子。');
	createProtfolioLeftS('EGO','url(PROTFOLIO_IMG/EGO.jpg)','株式会社「天乾勿躁」から依頼して、「服装の哲学」を主題とする秋と冬の宣伝ポスターの作品である。');
	createProtfolioLeftS('空作品6','url(PROTFOLIO_IMG/protfolio_waiting.jpg)','我的不知道要怎么介绍一件还没来得及上传的空白作品。');
	createProtfolioLeftS('空作品7','url(PROTFOLIO_IMG/protfolio_waiting.jpg)','我的不知道要怎么介绍一件还没来得及上传的空白作品。');
	createProtfolioLeftS('空作品8','url(PROTFOLIO_IMG/protfolio_waiting.jpg)','我的不知道要怎么介绍一件还没来得及上传的空白作品。');
	createProtfolioLeftS('空作品9','url(PROTFOLIO_IMG/protfolio_waiting.jpg)','我的不知道要怎么介绍一件还没来得及上传的空白作品。');

	idProtfolioLeftS();

}



function createProtfolioLeftS(protfolio_h,profolio_img_scr,profolio_content){

	//protfolioS  每个作品的展示div
	let protfolioS = createDiv('');
	protfolioS.parent(protfolioLeftDiv);
	protfolioS.style('overflow','hidden');
	protfolioS.style('float', 'none');
	//protfolioS.position(random(0,  LeftDivBigW / 2 + 60), random(LeftDivBigH*2));
	protfolioS.style('box-sizing','border-box');
	//protfolioS.style('border','solid 1px silver');
	protfolioS.style('margin','30px');
	protfolioS.style('box-shadow','1px 1px 6px rgba(90,90,90,0.2)');
	protfolioS.style('width',LeftDivBigW/2-60+'px');
	protfolioS.style('height','auto');
	//protfolioS.size(protfolioSW,protfolioSW);
	protfolioS.style('background-color','sliver');
	//protfolioS.mouseOver(protfolioLeftSOver);
	//protfolioS.mouseOut(protfolioLeftSOut);


	//protfolioSImg  每个作品展示框框中的图片div
	let protfolioSImg = createDiv('');
	protfolioSImg.parent(protfolioS);
	protfolioSImg.style('box-sizing','border-box');
	protfolioSImg.size(protfolioSW, protfolioSW);
	//protfolioSImg.style('background-image','url(RECENT_PLAY_IMG/'+rightDivS_img_scr+')');
	protfolioSImg.style('float','left');
	protfolioSImg.style('border','solid 0px silver');
	//protfolioSImg.style('float','none');
	protfolioSImg.style('background-image',profolio_img_scr);
	protfolioSImg.style('background-position','center center');
	protfolioSImg.style('background-repeat','no-repeat');
	protfolioSImg.style('background-size', 'cover');
	protfolioSImg.style('cursor', 'pointer');
	protfolioSImg.mouseOver(protfolioLeftSOver);
	protfolioSImg.mouseOut(protfolioLeftSOut);



	//protfolioSB (border) 每个作品展示框框的描边默认
	let protfolioSBo = createDiv('');
	protfolioSBo.parent(protfolioS);
	protfolioSBo.style('position','absolute');
	protfolioSBo.style('pointer-events','none');
	protfolioSBo.style('box-sizing','border-box');
	protfolioSBo.size(protfolioSW,protfolioSW);
	protfolioSBo.style('border','solid 1px silver');
	//protfolioSBo.style('z-index','1');

	//protfolioSB (border) 每个作品展示框框的描边
	let protfolioSB = createDiv('');
	protfolioSB.parent(protfolioS);
	protfolioSB.style('position','absolute');
	protfolioSB.style('pointer-events','none');
	protfolioSB.style('box-sizing','border-box');
	protfolioSB.size(protfolioSW,protfolioSW);
	//protfolioSB.style('border','solid 1px silver');
	protfolioSB.style('z-index','1');


	//protfolioLeftSIntroduction 每个作品及鼠标指上去后显示的内容简介div
	let protfolioLeftSIntroduction = createDiv('');
	protfolioLeftSIntroduction.parent(protfolioS);
	protfolioLeftSIntroduction.style('box-sizing','border-box');
	protfolioLeftSIntroduction.style('overflow','hidden');
	protfolioLeftSIntroduction.style('float', 'left');
	protfolioLeftSIntroduction.style('pointer-events','none');
	protfolioLeftSIntroduction.style('width', protfolioSW - 2 + 'px');
	protfolioLeftSIntroduction.style('height', 'auto');
	//protfolioLeftSIntroduction.size(LeftDivBigW/2-62,(LeftDivBigW/2-60)*2/5);
	protfolioLeftSIntroduction.style('background-color','rgb(255,255,255,0.8)');
	protfolioLeftSIntroduction.style('border-top','solid 10px transparent');
	//protfolioLeftSIntroduction.hide();


	let protfolioLeftSIntroductionHead = createDiv('');
	protfolioLeftSIntroductionHead.parent(protfolioLeftSIntroduction);
	//protfolioLeftSIntroductionHead.style('position','absolute');
	protfolioLeftSIntroductionHead.style('box-sizing','border-box');
	protfolioLeftSIntroductionHead.style('font-family','Microsoft YaHei');
	protfolioLeftSIntroductionHead.style('font-size','32px');
	protfolioLeftSIntroductionHead.style('text-align','left');
	protfolioLeftSIntroductionHead.style('margin','1px 9px 3px 9px');
	protfolioLeftSIntroductionHead.style('color','black');
	protfolioLeftSIntroductionHead.html(protfolio_h);
	//protfolioLeftSIntroductionHead.style('position','absolute');
	//protfolioLeftSIntroduction.style('float','none');

	let protfolioLeftSIntroductionContant = createDiv('');
	protfolioLeftSIntroductionContant.parent(protfolioLeftSIntroduction);
	//protfolioLeftSIntroductionContant.style('position','absolute');
	protfolioLeftSIntroductionContant.style('box-sizing','border-box');
	protfolioLeftSIntroductionContant.style('font-family','Georgia');
	protfolioLeftSIntroductionContant.style('font-size','9px');
	protfolioLeftSIntroductionContant.style('text-align','left');
	protfolioLeftSIntroductionContant.style('margin','0px 9px 12px 9px');
	protfolioLeftSIntroductionContant.style('color','gray');
	protfolioLeftSIntroductionContant.html(profolio_content);
	//protfolioLeftSIntroduction.style('float','none');



	//生成各数列
	protfolioLeftSAll.push(protfolioS);
	protfolioLeftSS.push(20);
	protfolioLeftSBoAll.push(protfolioSBo);
	protfolioLeftSBAll.push(protfolioSB);
	protfolioLeftSImgAll.push(protfolioSImg)
	protfolioLeftSBDeta.push(0);
	protfolioLeftSPositionDeta.push(protfolioSW);
	protfolioLeftSIntroductionAll.push(protfolioLeftSIntroduction);



}










function createProtfolioRight(){

	//homePageRight.style('background-color','gold');
	protfolioUrl = [];
	protfolioRightSB = [];
	protfolioRightBorderDeta = [];
	protfolioRightSS = [];


	//createProtfolioRightDivBig
	protfolioRightDiv = createDiv('');
	rightDivBigs.push(protfolioRightDiv);
	pageStatus.push(0);
	rightDivTitles.push('＋ PORTFOLIO OVERVIEW &nbsp');
	protfolioRightDiv.parent(homePageRight);
	protfolioRightDiv.id('protfolioRightDiv');
	protfolioRightDiv.attribute('align', 'center');
	protfolioRightDiv.style('box-sizing','border-box');
	//protfolioRightDiv.style('overflow-x','hidden');
	//protfolioRightDiv.style('overflow-y','scroll');
	protfolioRightDiv.style('margin-left',20+'px');
	protfolioRightDiv.style('margin-right',20+'px');
	//protfolioRightDiv.style('background-color','rgba(120,120,120,0.5)');
	protfolioRightDiv.position(rightDivBigX,rightDivBigY);
	protfolioRightDiv.size(rightDivBigW,rightDivBigH);

	let headSpace = createDiv('');
	headSpace.parent(protfolioRightDiv);
	headSpace.size(rightDivBigW,90);


	//createProtfolioImg
	protfolioImg = createDiv('');
	protfolioImg.parent(protfolioRightDiv);
	protfolioImg.style('background-image','url(PROTFOLIO_IMG/PROTFOLIO.png');
	protfolioImg.style('box-sizing','border-box');
	protfolioImg.style('box-shadow','2px 2px 9px rgba(90,90,90,0.2)');
	protfolioImg.style('cursor','pointer');
	protfolioImg.style('border','solid 1px silver');
	protfolioImg.style('background-position','center center');
	protfolioImg.style('background-repeat','no-repeat');
	protfolioImg.style('background-size','cover');
	protfolioImg.size(270*n,350*n);
	let protfolioImgX = 130*nw;
	let protfolioImgY = 150*nl;
	protfolioImg.position(protfolioImgX-(1-nw)*150,protfolioImgY);

	protfolioUrl.push(protfolioImg);
	protfolioImg.mouseClicked(protfolioClicked);

	//c
	InfluenceImg = createDiv('');
	InfluenceImg.parent(protfolioRightDiv);
	InfluenceImg.style('background-image','url(PROTFOLIO_IMG/INFLUENCE_DESIGN.png');
	InfluenceImg.style('box-sizing','border-box');
	InfluenceImg.style('box-shadow','2px 2px 9px rgba(90,90,90,0.2)');
	InfluenceImg.style('margin','10px 0px 10px 0px');
	InfluenceImg.style('cursor','pointer');
	InfluenceImg.style('border','solid 1px silver');
	InfluenceImg.style('background-position','center center');
	InfluenceImg.style('background-repeat','no-repeat');
	InfluenceImg.style('background-size','cover');
	InfluenceImg.size(180*n,250*n);
	InfluenceImg.position(protfolioImgX-80*nw-(1-nw)*150,protfolioImgY+150*nl);


	protfolioUrl.push(InfluenceImg);
	InfluenceImg.mouseClicked(protfolioClicked);


	//
	InfluenceHopeImg = createDiv('');
	InfluenceHopeImg.parent(protfolioRightDiv);
	InfluenceHopeImg.style('background-image','url(PROTFOLIO_IMG/INFLUENCE_DESIGN_HOPE.png');
	InfluenceHopeImg.style('box-sizing','border-box');
	InfluenceHopeImg.style('box-shadow','2px 2px 9px rgba(90,90,90,0.2)');
	InfluenceHopeImg.style('margin','10px 0px 10px 0px');
	//InfluenceHopeImg.style('float','left');
	InfluenceHopeImg.style('cursor','pointer');
	InfluenceHopeImg.style('border','solid 1px silver');
	InfluenceHopeImg.style('background-position','center center');
	InfluenceHopeImg.style('background-repeat','no-repeat');
	InfluenceHopeImg.style('background-size','cover');
	InfluenceHopeImg.size(200*n,150*n);
  	InfluenceHopeImg.position(protfolioImgX+40*nw-(1-nw)*150,protfolioImgY+275*nl);

	protfolioUrl.push(InfluenceHopeImg);
	InfluenceHopeImg.mouseClicked(protfolioClicked);


	protfolioRightSB.push(protfolioImg);
	protfolioRightSS.push(0);
	protfolioRightBorderDeta.push(0);

	protfolioRightSB.push(InfluenceImg);
	protfolioRightSS.push(0);
	protfolioRightBorderDeta.push(0);

	protfolioRightSB.push(InfluenceHopeImg);
	protfolioRightSS.push(0);
	protfolioRightBorderDeta.push(0);


	protfolioImg.mouseOver(protfolioOver);
	protfolioImg.mouseOut(protfolioOut);
	InfluenceImg.mouseOver(protfolioOver);
	InfluenceImg.mouseOut(protfolioOut);
	InfluenceHopeImg.mouseOver(protfolioOver);
	InfluenceHopeImg.mouseOut(protfolioOut);



}