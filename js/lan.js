var es = document.getElementById('ES')
var en = document.getElementById('EN')



let languageContent = {
    "en": {
       "aboutNav": "About",
       "expNav": "Experience",
       "studiNav": "Studies",
       "contacNav": "Contact",
    },
   
    "es": {
       "aboutNav": "Sobre Mí",
       "expNav": "Experiencia",
       "studiNav": "Estudios",
       "contacNav": "Contacto",
    }
 }

 en.addEventListener('click',e=>{
    swithcLang('en')
 });

 es.addEventListener('click',e=>{
    swithcLang('es')
 });

 function swithcLang(lang) {
    for (let key in languageContent[lang]) {
       document.getElementById(key).innerHTML = languageContent[lang][key];
    }
 }