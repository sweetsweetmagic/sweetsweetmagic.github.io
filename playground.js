let playgroundDiv;

function createPlaygroundRight(){

	//createPlaygroundDivBig
	playgroundDiv = createDiv('this is playground');
	rightDivBigs.push(playgroundDiv);
	pageStatus.push(0);
	rightDivTitles.push('＋ PLAYGROUND &nbsp');
	playgroundDiv.parent(homePageRight);
	playgroundDiv.id('protfolioDiv');
	playgroundDiv.attribute('align', 'center');
	playgroundDiv.style('box-sizing','border-box');
	playgroundDiv.style('overflow-x','hidden');
	playgroundDiv.style('overflow-y','scroll');
	playgroundDiv.style('margin-left',20+'px');
	playgroundDiv.style('margin-right',20+'px');
	playgroundDiv.style('background-color','rgba(120,120,120,0)');
	playgroundDiv.position(rightDivBigX,rightDivBigY);
	playgroundDiv.size(rightDivBigW,rightDivBigH);
}


function createPlaygroundLeft(){
	playgroundLeftDiv = createDiv('');
	leftDivBigs.push(playgroundLeftDiv);
	playgroundLeftDiv.parent(homePageLeft);
	//playgroundLeftDiv.hide();
	playgroundLeftDiv.size(LeftDivBigW,LeftDivBigH);
	playgroundLeftDiv.style('background-color','rgba(0,0,0,0.1)');
	playgroundLeftDiv.attribute('align', 'center');
	playgroundLeftDiv.style('overflow','hidden auto');
	playgroundLeftDiv.style('padding','0px 20px 0px 20px');
	playgroundLeftDiv.position(LeftDivBigX,LeftDivBigY);

	let head = createDiv('head');
	head.parent(playgroundLeftDiv);
	head.style('text-align','left');
	head.style('font-size','50pt');

}