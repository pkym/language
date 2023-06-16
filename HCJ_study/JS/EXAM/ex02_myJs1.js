let blue =document.getElementById('blueBox');        let red =document.getElementById('redBox');
let green =document.getElementById('greenBox');        let gray =document.getElementById('grayBox');       
let boxList=document.querySelectorAll('div')  
const moveFunc = ()=>{
    blue.style.marginLeft = '100px'
    green.style.marginLeft = '200px'
    gray.style.marginLeft = '300px'     
}       
const roundFunc = ()=>{            
  for (let i = 0; i < boxList.length; i++) {            
    boxList[i].style.borderTopRightRadius = '50%'
    boxList[i].style.borderBottomLeftRadius = '50%'
    }                    
}