const text =  document.querySelector(".about-book");
textStr=text.textContent;
console.log(textStr);

textBlock=textStr.split("");
console.log(textBlock);
text.textContent="";

let i=0;
for(i=0;i<textBlock.length;i++){

text.innerHTML+="<span class='text-animation'>"+textBlock[i]+"</span>";

}
const span=document.getElementsByClassName("text-animation");
// console.log(span);
var char=0;

setTimeout(()=>{

  

},1000);


var timer=setInterval(displayText,70);
    function displayText(){
        span[char].classList.add("effet");
        char++;
        if(char==textBlock.length){
            clearInterval(timer);
            timer=null;
            return;
        }
    }