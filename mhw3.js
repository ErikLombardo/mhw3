const bodyparts=document.querySelectorAll('.bodypart');
for (const bodypart of bodyparts){
    bodypart.addEventListener('click', esercizi);
}


function OnResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function esercizi(event){
   const id = event.target.dataset.id;
   
   const url ='https://exercisedb.p.rapidapi.com/exercises/bodyPart/'+ id + '?limit=12';
   const options = {
       method: 'GET',
       headers: {
           'X-RapidAPI-Key': 'b078e96eebmshafbe89161a8b0edp1a528ajsn19634e072585',
           'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
       }
   };
   
    fetch(url, options).then(OnResponse).then(onJson).catch(error => {
        console.error(error);
    });




}
/*
bodyPart:"back"
equipment:"cable"
gifUrl:"https://v2.exercisedb.io/image/I4XMjCBFhqaGoJ"
id:"0007"
name:"alternate lateral pulldown"
target:"lats"



*/


function onJson(json){
    console.log(json);
    const flex_container=document.querySelector('.flex-container-esercizi');
   
flex_container.innerHTML='';
const esercizio=json;

for (var i=0; i<12; i+=4){
    const div_interno=document.createElement('div');
    div_interno.classList.add('gruppo');
    for (var j=0;j<4;j++){
const toshow= document.createElement('div');
toshow.classList.add('elemento');
const muscles=document.createElement('span');
muscles.classList.add('secondari');
if(j==1 || j==2 || j==3){
    const toshowspace=document.createElement('div');
    toshowspace.classList.add('space');
        toshow.innerHTML=`
<img  src=${esercizio[i+j].gifUrl}> 
<span class='nome' > ${esercizio[i+j].name} </span>
`;
muscles.textContent= 'Secondary: ' + esercizio[i + j].secondaryMuscles.join(', ');
toshow.appendChild(muscles);
div_interno.appendChild(toshowspace);
div_interno.appendChild(toshow);
} else  {
toshow.innerHTML=`
<img  src=${esercizio[i+j].gifUrl}> 
<span class='nome' > ${esercizio[i+j].name} </span>
`;
muscles.textContent= 'Secondary: ' + esercizio[i + j].secondaryMuscles.join(', ');
toshow.appendChild(muscles);
div_interno.appendChild(toshow);
}
    }
    
flex_container.append(div_interno);
}

}

const freccia=document.querySelector("input[type=image]");
freccia.addEventListener('click', options)


function options(event){
let opzioni=document.querySelector('#target');
let freccia=event.target;
let bordo=document.querySelector('#scegli');

if (opzioni.classList.contains('hidden'))  {
freccia.src='immagini/frecciasu.png';
opzioni.classList.remove('hidden');
bordo.classList.remove('bord');

}   else {
  freccia.src='immagini/freccia.png';
  opzioni.classList.add('hidden');
  bordo.classList.add('bord');


}  

}



