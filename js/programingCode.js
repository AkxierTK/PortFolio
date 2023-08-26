const spanAutoH = document.querySelector('.span-auto-h');
const pipeElement = document.querySelector('.span-auto-h::after');
spanAutoH.addEventListener('animationend', () => {
  spanAutoH.classList.add('blink-border');
});

const textExperience= document.getElementById('experience-text');


// Creamos el observador de intersección
const observerExp = new IntersectionObserver((entries, observerExp) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting && !textExperience.classList.contains('fade-in-left')) {
      // Agregamos la clase para animar el hr
      textExperience.classList.add('fade-in-left');
    } else {
      // Quitamos la clase para detener la animación
      textExperience.classList.remove('fade-in-left');
    }
  });
});

// Observamos el elemento
observerExp.observe(textExperience);

let lastScrollToptextExperience = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomtextExperience = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = textExperience.getBoundingClientRect();
  
  if (scrollTop < lastScrollToptextExperience) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomtextExperience > containerRect.bottom) {
      textExperience.classList.remove('fade-in-left');
    }
  } else if (scrollTop > lastScrollToptextExperience) {
    // Añadimos la animación para mostrar el hr
    textExperience.classList.add('fade-in-left');
  }
  
  lastScrollToptextExperience = scrollTop;
  lastContainerRectBottomtextExperience = containerRect.bottom;
});


const hrElement1 = document.getElementById('hr-1');

// Creamos el observador de intersección
const observerHr1 = new IntersectionObserver((entries, observerHr1) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting) {
      // Agregamos la clase para animar el hr
      hrElement1.classList.add('rellenado');
    } else {
      // Quitamos la clase para detener la animación
      hrElement1.classList.remove('rellenado');
    }
  });
});

// Observamos el elemento
observerHr1.observe(hrElement1);

let lastScrollTopHr1 = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomHr1 = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = hrElement1.getBoundingClientRect();
  
  if (scrollTop < lastScrollTopHr1) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomHr1 > containerRect.bottom) {
      hrElement1.classList.remove('rellenado');
    }
  } else if (scrollTop > lastScrollTopHr1) {
    // Añadimos la animación para mostrar el hr
    hrElement1.classList.add('rellenado');
  }
  
  lastScrollTopHr1 = scrollTop;
  lastContainerRectBottomHr1 = containerRect.bottom;
});

const hrElement2 = document.getElementById('hr-2');


// Creamos el observador de intersección
const observerHr2 = new IntersectionObserver((entries, observerHr2) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting) {
      // Agregamos la clase para animar el hr
      hrElement2.classList.add('rellenado');
    } else {
      // Quitamos la clase para detener la animación
      hrElement2.classList.remove('rellenado');
    }
  });
});

// Observamos el elemento
observerHr2.observe(hrElement2);

let lastScrollTopHr2 = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomHr2 = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = exp2.getBoundingClientRect();
  
  if (scrollTop < lastScrollTopHr2) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomHr2 > containerRect.bottom) {
      hrElement2.classList.remove('rellenado');
    }
  } else if (scrollTop > lastScrollTopHr2 ) {
    // Añadimos la animación para mostrar el hr
    hrElement2.classList.add('rellenado');
  }
  
  lastScrollTopHr2 = scrollTop;
  lastContainerRectBottomHr2 = containerRect.bottom;
});


// const hrElement3 = document.getElementById('hr-3');

// // Creamos el observador de intersección
// const observerHr3 = new IntersectionObserver((entries, observerHr3) => {
//   entries.forEach(entry => {
//     // Verificamos si el elemento está visible en la ventana
//     if (entry.isIntersecting) {
//       // Agregamos la clase para animar el hr
//       hrElement3.classList.add('rellenado');
//     } else {
//       // Quitamos la clase para detener la animación
//       hrElement3.classList.remove('rellenado');
//     }
//   });
// });

// // Observamos el elemento
// observerHr3.observe(hrElement3);

// let lastScrollTopHr3 = window.pageYOffset || document.documentElement.scrollTop;
// let lastContainerRectBottomHr3 = 0;
// window.addEventListener('scroll', () => {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   const containerRect = hrElement1.getBoundingClientRect();
  
//   if (scrollTop < lastScrollTopHr1) {
//     // Verificamos si el elemento se sobrepasa en la ventana
//     if (containerRect.bottom <= 0 && lastContainerRectBottomHr2 > containerRect.bottom) {
//       hrElement3.classList.remove('rellenado');
//     }
//   } else if (scrollTop > lastScrollTopHr2) {
//     // Añadimos la animación para mostrar el hr
//     hrElement3.classList.add('rellenado');
//   }
  
//   lastScrollTopHr3 = scrollTop;
//   lastContainerRectBottomHr3 = containerRect.bottom;
// });

// // Observamos el elemento
// observerHr3.observe(hrElement3);

let exp1= document.getElementById("exp-1")
// Creamos el observador de intersección
const observerExp1= new IntersectionObserver((entries, observerExp1) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting && !exp1.classList.contains('fade-in-left')) {
      // Agregamos la clase para animar el hr
      exp1.classList.add('fade-in-left');
    } else {
      // Quitamos la clase para detener la animación
      exp1.classList.remove('fade-in-left');
    }
  });
});

// Observamos el elemento
observerExp1.observe(exp1);

let lastScrollTopExp1 = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomExp1= 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = exp1.getBoundingClientRect();
  
  if (scrollTop < lastScrollTopExp1) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomExp1 > containerRect.bottom) {
      exp1.classList.remove('fade-in-left');
    }
  } else if (scrollTop > lastScrollTopExp1) {
    // Añadimos la animación para mostrar el hr
    exp1.classList.add('fade-in-left');
  }
  
  lastScrollTopExp1 = scrollTop;
  lastContainerRectBottomExp1 = containerRect.bottom;
});


let exp2= document.getElementById("exp-2")
// Creamos el observador de intersección
const observerExp2= new IntersectionObserver((entries, observerExp2) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting && !exp2.classList.contains('fade-in-left')) {
      // Agregamos la clase para animar el hr
      exp2.classList.add('fade-in-right');
    } else if(!entry.isIntersecting) {
      // Quitamos la clase para detener la animación
      exp2.classList.remove('fade-in-right');
    }
  });
});

// Observamos el elemento
observerExp2.observe(exp2);

let lastScrollTopExp2 = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomExp2= 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = exp2.getBoundingClientRect();
  
  if (scrollTop < lastScrollTopExp2) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomExp2 > containerRect.bottom) {
      exp2.classList.remove('fade-in-right');
    }
  } else if (scrollTop > lastScrollTopExp2) {
    // Añadimos la animación para mostrar el hr
    exp2.classList.add('fade-in-right');
  }
  
  lastScrollTopExp2 = scrollTop;
  lastContainerRectBottomExp2 = containerRect.bottom;
});


const sudiesText= document.getElementById('studies-text');


// Creamos el observador de intersección
const observerSudiesText= new IntersectionObserver((entries, observerSudiesText) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting && !sudiesText.classList.contains('fade-in-left')) {
      // Agregamos la clase para animar el hr
      sudiesText.classList.add('fade-in-left');
    } else {
      // Quitamos la clase para detener la animación
      sudiesText.classList.remove('fade-in-left');
    }
  });
});

// Observamos el elemento
observerSudiesText.observe(sudiesText);

let lastScrollTopSudiesText = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomSudiesText  = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = sudiesText.getBoundingClientRect();
  
  if (scrollTop < lastScrollToptextExperience) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomSudiesText> containerRect.bottom) {
      sudiesText.classList.remove('fade-in-left');
    }
  } else if (scrollTop > lastScrollTopSudiesText) {
    // Añadimos la animación para mostrar el hr
    sudiesText.classList.add('fade-in-left');
  }
  
  lastScrollTopSudiesText = scrollTop;
  lastContainerRectBottomSudiesText= containerRect.bottom;
});


const hrElement4 = document.getElementById('hr-4');


// Creamos el observador de intersección
const observerHr4 = new IntersectionObserver((entries, observerHr4) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting) {
      // Agregamos la clase para animar el hr
      hrElement4.classList.add('rellenado');
    } else {
      // Quitamos la clase para detener la animación
      hrElement4.classList.remove('rellenado');
    }
  });
});

// Observamos el elemento
observerHr4.observe(hrElement4);

let lastScrollTopHr4 = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomHr4 = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = hrElement4.getBoundingClientRect();
  
  if (scrollTop < lastScrollTopHr4) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomHr4 > containerRect.bottom) {
      hrElement4.classList.remove('rellenado');
    }
  } else if (scrollTop > lastScrollTopHr4) {
    // Añadimos la animación para mostrar el hr
    hrElement4.classList.add('rellenado');
  }
  
  lastScrollTopHr4 = scrollTop;
  lastContainerRectBottomHr4 = containerRect.bottom;
});


const sudiesC= document.getElementById('sutides-content');


// Creamos el observador de intersección
const observerStudiesC= new IntersectionObserver((entries, observerStudiesC) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting && !sudiesC.classList.contains('fade-in-left')) {
      // Agregamos la clase para animar el hr
      sudiesC.classList.add('fade-in-left');
    } else {
      // Quitamos la clase para detener la animación
      sudiesC.classList.remove('fade-in-left');
    }
  });
});

// Observamos el elemento
observerStudiesC.observe(sudiesC);

let lastScrollTopSudiesC = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomStudiesC = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = sudiesText.getBoundingClientRect();
  
  if (scrollTop < lastScrollToptextExperience) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomStudiesC> containerRect.bottom) {
      sudiesC.remove('fade-in-left');
    }
  } else if (scrollTop > lastScrollTopSudiesC ) {
    // Añadimos la animación para mostrar el hr
    sudiesC.classList.add('fade-in-left');
  }
  
  lastScrollTopSudiesC  = scrollTop;
  lastContainerRectBottomStudiesC= containerRect.bottom;
});

const hrElement5= document.getElementById('hr-5');
// Creamos el observador de intersección
const observerHr5 = new IntersectionObserver((entries, observerHr5) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting) {
      // Agregamos la clase para animar el hr
      hrElement5.classList.add('rellenado');
    } else {
      // Quitamos la clase para detener la animación
      hrElement5.classList.remove('rellenado');
    }
  });
});

// Observamos el elemento
observerHr5.observe(hrElement5);

let lastScrollTopHr5 = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomHr5 = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = hrElement5.getBoundingClientRect();
  
  if (scrollTop < lastScrollTopHr5) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomHr5 > containerRect.bottom) {
      hrElement5.classList.remove('rellenado');
    }
  } else if (scrollTop > lastScrollTopHr5) {
    // Añadimos la animación para mostrar el hr
    hrElement5.classList.add('rellenado');
  }
  
  lastScrollTopHr5 = scrollTop;
  lastContainerRectBottomHr5 = containerRect.bottom;
});

const contactText= document.getElementById('contact-text');


// Creamos el observador de intersección
const observerContactText= new IntersectionObserver((entries,  observerContactText) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting && !contactText.classList.contains('fade-in-right')) {
      // Agregamos la clase para animar el hr
      contactText.classList.add('fade-in-right');
    } else {
      // Quitamos la clase para detener la animación
      contactText.classList.remove('fade-in-right');
    }
  });
});

// Observamos el elemento
observerContactText.observe(contactText);

let lastScrollTopContactText = window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomContactText  = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = contactText.getBoundingClientRect();
  
  if (scrollTop < lastScrollTopContactText) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomContactText> containerRect.bottom) {
      contactText.classList.remove('fade-in-right');
    }
  } else if (scrollTop > lastScrollTopContactText) {
    // Añadimos la animación para mostrar el hr
    contactText.classList.add('fade-in-right');
  }
  
  lastScrollTopContactText= scrollTop;
  lastContainerRectBottomContactText= containerRect.bottom;
});

const contactContent  = document.getElementById("contact-content")


// Creamos el observador de intersección
const observerContactContent= new IntersectionObserver((entries,  observerContactText) => {
  entries.forEach(entry => {
    // Verificamos si el elemento está visible en la ventana
    if (entry.isIntersecting && !contactText.classList.contains('fade-in-right')) {
      // Agregamos la clase para animar el hr
      contactContent.classList.add('fade-in-right');
    } else {
      // Quitamos la clase para detener la animación
      contactContent.classList.remove('fade-in-right');
    }
  });
});

// Observamos el elemento
observerContactContent.observe(contactContent);

let lastScrollTopContactContent= window.pageYOffset || document.documentElement.scrollTop;
let lastContainerRectBottomContactContent  = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const containerRect = contactContent.getBoundingClientRect();
  
  if (scrollTop < lastScrollTopContactContent) {
    // Verificamos si el elemento se sobrepasa en la ventana
    if (containerRect.bottom <= 0 && lastContainerRectBottomContactContent> containerRect.bottom) {
      contactContent.classList.remove('fade-in-right');
    }
  } else if (scrollTop > lastScrollTopContactContent) {
    // Añadimos la animación para mostrar el hr
    contactContent.classList.add('fade-in-right');
  }
  
  lastScrollTopContactContent= scrollTop;
  lastContainerRectBottomContactContent= containerRect.bottom;
});