imagesSources = JSON.parse(imagesSources);
labels = JSON.parse(labels);
var image = document.getElementById('image_courante');
var imageRep = document.getElementById('image_replace');
var div = document.getElementById('imgCurrent');
var divRep = document.getElementById('imgReplace');
var label = document.getElementById('label');
var labelRep = document.getElementById('labelReplace');

var N = 3;
var i = 0;
image.src = "./assets/images/" + imagesSources[0];
label.innerHTML = labels[0];
document.getElementById('navigate' + (i + 1)).style.backgroundColor = 'black';
function canvasClick(dir) {
    if (!dir) {
        dir = 1;
    }
    else {
        clearTimeout(timeout);
    }
    for(var  j = 0 ; j < N ; j++){
        document.getElementById('navigate' + (j + 1)).style.backgroundColor = 'darkslategrey';
    }
    imageRep.src = image.src;
    labelRep.innerHTML = label.innerHTML;
    divRep.classList = "imgspit  imgReplaceNoTrans"
    divRep.style.left = 0;
    if (dir > 0) {
        i = (i + 1) % N;
        setTimeout(() => {

            divRep.classList = "imgspit  imgReplace "
            if (!imageRep.src) {
                console.log('case no rep')
                imageRep.src = image.src;
                labelRep.innerHTML = label.innerHTML;
            }
            image.src = "./assets/images/" + imagesSources[i];
            document.getElementById('navigate' + (i + 1)).style.backgroundColor = 'black';
            label.innerHTML = labels[i];
            divRep.style.left = '100%';
        }, 100);
    }
    else {
        if (i == 0) i = N - 1;
        else i = i - 1;
        setTimeout(() => {
            
            divRep.classList = "imgspit  imgReplace";
            if (!imageRep.src) {
                console.log('case no rep')
                imageRep.src = image.src;
                labelRep.innerHTML = label.innerHTML;
            }
            image.src = "./assets/images/" + imagesSources[i];
            label.innerHTML = labels[i];
            document.getElementById('navigate' + (i + 1)).style.backgroundColor = 'black';
            divRep.style.left = '-100%';
        }, 100);
    }
    timeout = setTimeout(canvasClick, 3000);
}
function setIndex(index){
    console.log(index)
    clearTimeout(timeout);
    if(index == 0 ){

    }
    if(i > index - 1){
        i = index + 1 
        canvasClick(-1)
    }
    else{
        i = index -1 ; 
        canvasClick(1)
    }

}
function pauseSwapp(){
    clearTimeout(timeout)
}
function resumeSwapp(){
    timeout = setTimeout(canvasClick, 0);
}
function epoque(e){
    var node = document.getElementById('epoque-text');
    if(node.childNodes.length>1){
        epoqueout();
    }
    else{
        var node1 = document.getElementById('grid-option');
        node1.style.gridTemplateRows ="20% 20% 40% 20%";
        node.innerHTML += "<ul id='list-new' class='li_epoque'><li>1</li><li>2</li></ul>";
    }
}
function epoqueout(){
    var node1 = document.getElementById('grid-option');
    node1.style.gridTemplateRows ="25% 25% 25% 25%";
    document.getElementById('list-new').remove();
}
var timeout = setTimeout(canvasClick, 3000);


