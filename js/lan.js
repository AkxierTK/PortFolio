var es = document.getElementById('ES')
var en = document.getElementById('EN')



let languageContent = {
    "en": {
       "aboutNav": "About",
       "expNav": "Experience",
       "experience-text": "Experience",
       "studiNav": "Studies",
       "contacNav": "Contact",
       "studies-text":"Studies and Certifications",
       "contact-text":"Contact",
       "me-1":"Hello, I'm Guillermo, a passionate technology developer. I have experience being Full Stack, although my heart beats stronger for the Back-End💘. I have knowledge of various languages such as PHP, JAVA, VB and C# that support my ability to face varied challenges.",
       "me-2":"What motivates me most in application development is participating in the entire project.I believe that deeply understanding the purpose of a project is essential to providing the best possible solutions. I am committed to understanding my clients' needs and delivering exceptional results.",
       "me-3":"I am very interested in data and its analysis, which is why I am learning about Big Data and Artificial Intelligence systems to get the most out of my clients' data. If you have a project I will be happy to help you✌!",
       "cargo-m":".NET Developer",
       "time-m":"March 2022 - Present",
       "desc-m":"As a developer, I have been responsible for the integration, development and maintenance of B2B and B2C platforms,ensuring its effective connection with the ERP system through intermediate databases and REST API services. In addition, I have played a crucial role in the resolution of incidents and tasks related to the ERP, providing vital support for users. My management includes the maintenance and optimization of the database and SSIS systems.",
       "list-m-1":"Lead the development and management from scratch of the integration of a B2C application for the UK marketin just 4 months, including the generation of orders, delivery notes, invoices, returns, and the management of stock controls, rates and discounts in the ERP.",
       "list-m-2":"Implement processes that streamlined and automated the daily tasks of various departments in the ERP, significantly reducing the time required to complete them.",
       "list-m-3":"Developed in-house web applications that replaced the need to use third-party software, resulting in significant cost savings.",
       "list-m-4":"Achieve remarkable optimization of the intermediate database and platforms by implementing SSIS, reducing execution time by more than 80%.",
       "cargo-r":"Systems Technician",
       "time-r":"March 2019 - June 2019",
       "desc-r":"During my internship, I gained experience in the repair and maintenance of electronic equipment, focusing on desktop and mobile devices. Performed fault diagnosis, performed hardware and software repairs, and maintained detailed preventive maintenance records. Furthermore, I developed strong skills in customer service, managing queries and complaints effectively and ensuring customer satisfaction at all times.",
       "daw":"Web Applications Development",
       "daw-t":"September 2020 - June 2022",
       "daw-d":"The FP DAW is a qualification that has given me a solid foundation in design, development and maintenance of web applications. During my training, I acquired programming skills, user interface design, database management and security in web applications.",
       "msr":"Microcomputer Systems and Networks",
       "msr-t":"September 2017 - June 2019",
       "msr-d":"The FP SMR has provided me with solid training in the administration and maintenance of computer systems, as well as in network management. During my study program, I have acquired technical skills in the configuration and hardware and software troubleshooting. I have also developed skills in network implementation and administration, ensuring its efficient and safe operation.",
       "u-p":"Design Patterns in C# Applied in ASP .Net",
       "aboutNav2": "About",
       "expNav2": "Experience",
       "studiNav2": "Studies",
       "contacNav2": "Contact"
      },
   
    "es": {
       "aboutNav": "Sobre Mí",
       "expNav": "Experiencia",
       "experience-text": "Experiencia",
       "studiNav": "Estudios",
       "contacNav": "Contacto",
       "studies-text":"Estudios y certificaciones",
       "contact-text":"Contacto",
      "me-1":"Hola, soy Guillermo, un apasionado desarrollador tecnológico. Tengo experiencia siendo Full Stack, aunque mi corazón late más fuerte por el Back-End💘. Tengo conocimientos en diversos lenguajes como PHP, JAVA, VB y C# que respaldan mi capacidad para enfrentar desafíos variados.",
      "me-2":"Lo que más me motiva en el desarrollo de aplicaciones es participar en todo el proyecto. Creo que comprender profundamente el propósito de un proyecto es esencial para brindar las mejores soluciones posibles. Estoy comprometido en entender las necesidades de mis clientes y  ofrecer resultados excepcionales.",
      "me-3":"Estoy muy interesado en los datos y su análisis por lo que estoy aprendiendo de sistemas de Big Data e Inteligencia Artificial para sacar el mayor potencial de los datos de mis clientes. ¡Si tienes un proyecto estaré encantado de ayudarte✌!",
      "cargo-m":"Desarrollador .NET",
      "time-m":"Marzo 2022 - Actualidad",
      "desc-m":"Como desarrollador, he sido responsable de la integración, desarrollo y mantenimiento de plataformas B2B y B2C, asegurando su conexión efectiva con el sistema ERP a través de bases de datos intermedias y servicios API REST. Además, he desempeñado un papel crucial en la resolución de incidencias y tareas relacionadas con el ERP, brindando un soporte vital para los usuarios. Mi gestión incluye el mantenimiento y la optimización de la base de datos y sistemas SSIS.",
      "list-m-1":"Liderar el desarrollo y gestión desde cero de la integración de una aplicación B2C para el mercado del Reino Unido en tan solo 4 meses, incluyendo la generación de pedidos, albaranes, facturas, devoluciones, y la gestión de controles de stock, tarifas y descuentos en el ERP.",
      "list-m-2":"Implementar procesos que agilizaron y automatizaron las tareas diarias de diversos departamentos en el ERP, reduciendo significativamente el tiempo requerido para completarlas.",
      "list-m-3":"Desarrollar aplicaciones web internas que reemplazaron la necesidad de utilizar software de terceros, lo que resultó en ahorros significativos en costos.",
      "list-m-4":"Lograr una optimización destacable de la base de datos intermedia y de las plataformas mediante la implementación de SSIS, reduciendo el tiempo de ejecución en más de un 80%.",
      "cargo-r":"Técnico de Sistemas",
      "time-r":"Marzo 2019 - Junio 2019",
      "desc-r":"Durante mis prácticas, adquirí experiencia en la reparación y mantenimiento de equipos electrónicos, centrándome en dispositivos de escritorio y móvil. Realicé diagnósticos de fallas, llevé a cabo reparaciones de hardware y software y mantuve registros detallados de mantenimiento preventivo. Además, desarrollé habilidades sólidas en la atención al cliente, gestionando consultas y quejas de manera efectiva y asegurando la satisfacción del cliente en todo momento.",
      "daw":"Desarrollo de Aplicaciones Web",
      "daw-t":"Septiembre 2020 - Junio 2022",
      "daw-d":"La FP DAW es una titulación que me ha proporcionado una sólida base en el diseño, desarrollo y mantenimiento de aplicaciones web. Durante mi formación, adquirí competencias en programación, diseño de interfaces de usuario, gestión de bases de datos y seguridad en aplicaciones web.",
      "msr":"Sistemas Microinformáticos y Redes",
      "msr-t":"Septiembre 2017 - Junio 2019",
      "msr-d":"La FP SMR me ha proporcionado una sólida formación en la administración y mantenimiento de sistemas informáticos, así como en la gestión de redes. Durante mi programa de estudios, he adquirido habilidades técnicas en la configuración y resolución de problemas de hardware y software. También he desarrollado competencias en la implementación y administración de redes, asegurando su funcionamiento eficiente y seguro.",
      "u-p":"Patrones de diseño en C# Aplicados en ASP .Net",
      "aboutNav2": "Sobre Mí",
      "expNav2": "Experiencia",
      "studiNav2": "Estudios",
      "contacNav2": "Contacto"
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