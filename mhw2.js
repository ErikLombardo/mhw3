function ShowCreateZone(event) {
	let creazione = document.querySelector('[data-id="creazione"]');
	creazione.classList.remove('hidden');
    const not_scrolling=document.querySelector('article');
    not_scrolling.classList.add('noscroll');
}
const modalview = document.querySelector('#add');
modalview.addEventListener('click', ShowCreateZone);

function HideCreateZone(event) {
	let delet = document.querySelector('[data-id="creazione"]');
	delet.classList.add('hidden');
   const not_scrolling=document.querySelector('article');
   not_scrolling.classList.remove('noscroll');


}
const remove = document.querySelector('#remove');
remove.addEventListener('click', HideCreateZone);


function ShowOrNotContact(event) {
    let delet = event.target.closest('.NewAllenatore').querySelector('.info');
    
    if (delet.classList.contains('hidden')) {
        delet.classList.remove('hidden');

    } else {
        delet.classList.add('hidden');

    }

}

const Contacts = document.querySelectorAll('.contatta');
for (const contact of Contacts){
    contact.addEventListener('click', ShowOrNotContact);
}




function NewTrainer(event) {
   
	var txt_intestazione = document.querySelector('input.nomeallenatore.intestazione');
    var txt_discipline = document.querySelector('input.disciplineallenatore.discipline');
    var txt_descrizione = document.querySelector('textarea.descrizione');
    var txt_tariffe = document.querySelectorAll('input.tariffa');
    var txt_Email = document.querySelector('#email');
    var txt_cellulare = document.querySelector('#cellulare');
    var txt_sede = document.querySelector('#sede');
    var txt_otherinfo = document.querySelector('textarea.other_info');
  
    console.log(txt_intestazione.value );
    var New = document.createElement("div");
    New.classList.add("NewAllenatore","withspace");
  
    
    const file = document.querySelector("input[type=file]").files[0];
   
  
   
   
   
    New.innerHTML = `
                       <img >
                        <div class="intestazione"> <span class="nomeallenatore">${txt_intestazione.value} </span>  </div> <button class="contatta"> Contatta </button> <button class="contattacell"> Contatta </button>
                        <div class="discipline"> <span class="disciplineallenatore">${txt_discipline.value} </span></div>
                        <div class="descrizione">${txt_descrizione.value} </br> </div>
        <div class="tariffe">
            <span class="cadenza"> trimestre:       </span><span class="tariffa"> ${txt_tariffe[0].value} </span></br ></br >
                            <span class="cadenza">semestre:     </span> <span class="tariffa">  ${txt_tariffe[1].value} </span></br ></br >
                            <span class="cadenza"> annuale:     </span>  <span class="tariffa"> ${txt_tariffe[2].value} </span></br >
                        </div >


                       <div class="info hidden">
                            <div>
                                <span> Email: ${txt_Email.value} </span></br>
                                <span>Cellulare:${txt_cellulare.value} </span></br >
                                <span> Sede: ${txt_sede.value} </span></br>
                                <div class="other_info">
                                  ${txt_otherinfo.value}

                                </div>
                            </div>
                        </div>


         `;

         const reader = new FileReader();
         const preview = New.querySelector('img');
         reader.addEventListener(
           "load",
           () => {
             // convert image file to base64 string
             preview.src = reader.result;
           },
           false,
         );
       
         if (file) {
           reader.readAsDataURL(file);
         }
  
    const nuovobottone = New.querySelector('.contatta');
    nuovobottone.addEventListener('click', ShowOrNotContact);
    const nuovobottonecell = New.querySelector('.contattacell');
    nuovobottonecell.addEventListener('click', ShowModalContact);
   
 
    New.setAttribute("data-id", "last");
    var lastone = document.querySelector('[data-id="last"]');
    lastone.insertAdjacentElement("afterend", New);
    lastone.removeAttribute('data-id');
    
    HideCreateZone(event);
    

}

const submit = document.querySelector('#enter');
submit.addEventListener('click', NewTrainer);


function ShowModalContact(event) {
    /*creo le copie altrimenti non riuscirei ad aprire il bottone contatta dal cell due volte di fila*/ 
    let div = document.createElement('div');
    let divprincipale = div.cloneNode(true);
    let article=document.querySelector('article');
    article.classList.add('noscroll');
    divprincipale.classList.add('modal-view');
    let info1 = event.target.closest('.NewAllenatore').querySelector('.info');
    let info = info1.cloneNode(true);
    info.classList.remove('hidden');
    let img = document.createElement('img');
    img.src = 'immagini/littlex.png';
    img.addEventListener('click', chiudi);
    info.appendChild(img);
    divprincipale.appendChild(info);
    divprincipale.setAttribute("data-id", "rimuovi");
    let puntodoveaggiungere = event.target.closest('section');
    puntodoveaggiungere.insertAdjacentElement("afterend", divprincipale);
    
}


function chiudi(event){
    let darimuovere = document.querySelector('[data-id="rimuovi"]');
    darimuovere.remove();
    let article=document.querySelector('article');
    article.classList.remove('noscroll');

}
const bottonicell = document.querySelectorAll('.contattacell');
for (const singolobotton of bottonicell) {
    singolobotton.addEventListener('click', ShowModalContact);
}
//api exercise.db