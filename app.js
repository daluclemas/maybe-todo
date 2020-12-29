const search=document.querySelector('.search-box').value;
const btn=document.querySelector('.btn');
const btnAdd=document.querySelector('.btn-add');
const container=document.querySelector('.item-container');
const itemBtn=document.querySelectorAll('.itemlist');
const delIcon=document.querySelectorAll('.fa-times-circle');
const itemBtnS=document.querySelector('.item-btn');


const itemCreate=(e)=>{
    e.preventDefault();
    
    const addInput=document.querySelector('.add-box').value;

    //create the div
    let div=document.createElement('div');
    div.classList.add('itemlist');

    //create the paragragh
    let paragraph=document.createElement('p');
    let pValue=paragraph.innerText=addInput.toLowerCase();
    paragraph.classList.add('item-header');

    //create button
    let divBtn=document.createElement('button');
    let btnValue=divBtn.innerHTML='<i class="fas fa-times-circle"></i>';
    divBtn.classList.add('item-btn');

    //append the paragraph and the button to the div
    div.appendChild(paragraph);
    div.appendChild(divBtn);

    //append the div to the main div container
    container.appendChild(div)
    
};

//addbutton
btnAdd.addEventListener('click',itemCreate);


