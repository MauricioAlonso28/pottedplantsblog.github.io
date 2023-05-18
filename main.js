// NAVBAR
const navbarEl = document.querySelector('.list');
const buttonEl = document.querySelector('.button');

buttonEl.addEventListener('click', () => {
    navbarEl.classList.toggle('list-open');
})

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }

  prevScrollPos = currentScrollPos;
};

/* LANGUAGE CHANGED */
// We set in variables the id of the buttons.
const englishButton = document.getElementById('english');
const spanishButton = document.getElementById('spanish');

// Then we make events for the change the languages.
englishButton.addEventListener('click', setEnglish);
spanishButton.addEventListener('click', setSpanish);

function setEnglish() {
    // PLANTS
    const plantsSlideEls = [
        {
            imgUrl: './Resources/plant-1.jpg',
            titleName: 'Anthurium Red',
            description: 'Its scientific name is Laceleaf. Anthurium is a genus of around 1000 species of flowering plants, the largest genus in the Arum family, Araceae.It is a plant that demands good humidity in the environment to keep its leaves healthy. A compelling reason to spray them with non-calcareous water, and preventing them from getting soaked. Whether we live in a dry climate or during the winter months, the humidity that it needs must be constantly provided.'
        },
        {
            imgUrl: './Resources/plant-2.jpg',
            titleName: 'Azalea',
            description: 'It scientific name is Rhododendron.Azaleas are flowering shrubs of the genus Rhododendron, particularly the earlier sections Tsutsusi and Pentanthera. Azaleas bloom in spring and their flowers usually last for several weeks. Shade tolerant, they prefer to live near or under trees. They are part of the Ericaceae family.they require a lot of humidity. Therefore, they must be watered daily by adding water to a plate. Let the roots get the water they need for 5-10 minutes. It is important not to use very hard water, it must be filtered or rainwater.' 
        },
        {
            imgUrl: './Resources/plant-3.jpg',
            titleName: 'Deliciosa Monstera',
            description: 'It scientific name is Swiss cheese plant. Monstera deliciosa, the Swiss cheese plant or split-leaf philodendron is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.Irrigation is 1 to 2 times a week in summer and 1 time every 15 in winter. Monsteras need access to sunlight and the necessary nutrients to produce huge leaves, and, they also need large doses of lots of water. ' 
        },
        {
            imgUrl: './Resources/plant-4.jpeg',
            titleName: 'Tomato plant',
            description: 'Its scientific name is Solanum lycopersicum. It is native to the low Andes, and was cultivated by the Aztecs. The Mexicans knew it as xictomatl, fruit with a navel. Because of that word "tomatl" the Spanish conquistadors called it "tomato". It requires sunlight, in shade the production suffers and good drainage.Sow them, spreading the seeds in a small row or hole 1 centimeter deep. Water the mixture abundantly after sowing them, and keep the substrate always moist until the seeds germinate, it will take 10 to 15 days.' 
        },
        {
            imgUrl: './Resources/plant-5.jpg',
            titleName: 'Mother in law Tongue',
            description: 'Its scientific name is Dracaena trifasciata.It is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is better known as snake plant, Saint George\'s sword, mother-in-law\'s tongue, and viper\'s rope hemp, etc.There are 3 factors for your care: lighting, irrigation and fertilizer. It is recommended that it receive indirect lighting. It should be placed near a window.it is watered only once or twice a month, always taking care that the substrate is dry, excess water would cause stem rot.' 
        },
        {
            imgUrl: './Resources/plant-6.jpg',
            titleName: 'Aster',
            description: 'Its scientific name is Aster amellus. Aster tripolium is a species of plant belonging to the Asteraceae family. It is native to northern Europe, which limits its distribution to marshes, estuaries and sometimes in brackish places. A bright location is essential for its flowering with fertile soil and good drainage, it also needs a regular subscriber, important for its development. We must consider what is necessary to give the substrate the necessary humidity to develop, since it does not demand a high consumption of water. In fact, it does not tolerate excess water or stagnation.' 
        },
        {
            imgUrl: './Resources/plant-7.jpg',
            titleName: 'Dracaena Lemon Lime',
            description: 'Its scientific name is Dracaena fragrans.Originally from Madagascar and known for its red sap, this strain not only has great lines and vivid colours, but is also very easy to care for.It needs good lighting; warm and stable temperature; specific substrate;moderate watering and environmental humidity, two of the most delicate cares for this plant.This one prefers its soil to dry out slightly between waterings. When the soil stays too wet or too dry, you\'ll probably see brown tips on the leaves. If the top is dry, then your plant is ready to drink.' 
        },
        {
            imgUrl: './Resources/plant-8.jpg',
            titleName: 'Bamboo',
            description: 'Its scientific name is Bambusoideae.The origin dates back about 40 million years, but its use dates back to approximately 5,000 BC, Neolithic of the Stone Age, in China, where the first products made of bamboo appear, such as arrows or construction materials.Bamboo should be watered twice a week in temperate climates, as it needs large amounts of water to grow. However, it is important to take care not to drown the roots. In the case of hot climates, watering should be three to four times a week.' 
        },
        {
            imgUrl: './Resources/plant-9.jpg',
            titleName: 'Bougainvillea',
            description: 'Its scientific name is Bougainvillea.This thorny shrub or tree is native to South America, mainly Brazil and Peru. It is currently cultivated as an ornamental plant in various subtropical and tropical regions of the world.During the winter, the ideal is that it is watered with rainwater or, indoors, that we leave it at rest; during the summer it will not be excessively demanding: a weekly watering will suffice if it is planted directly in the ground, and a couple of weekly waterings if it is in a pot.' 
        },
    ];
    
    const imgEl = document.querySelector('.plants-slide img');
    const titleEl = document.querySelector('.plants-slide h4');
    const descriptionEl = document.querySelector('.plants-slide p');
    
    const nextEl = document.querySelector('.plants-slide .next');
    
    let idx = 0;
    
    function updatePlants() {
        const {imgUrl, titleName, description} =
        plantsSlideEls[idx];
    
        imgEl.src = imgUrl;
        titleEl.innerText = titleName;
        descriptionEl.innerText = description;
        
        idx++;
        if(idx === plantsSlideEls.length){
            idx = 0;
        }
    }
   
    const plantsSlide1 = document.querySelector('#plants .plants-slide');
    plantsSlide1.classList.remove('hidden');
    const plantsSlide2 = document.querySelector('#plants .plants-slide-2');
    plantsSlide2.classList.add('hidden');
    
    nextEl.addEventListener('click', () => {
        updatePlants();
    }) 

    localStorage.setItem('language', 'en');

    // NAVBAR
    document.querySelectorAll('#navbar .list-items a')[0].textContent = 'About me';
    document.querySelectorAll('#navbar .list-items a')[1].textContent = 'Description';
    document.querySelectorAll('#navbar .list-items a')[2].textContent = 'Plants';
    document.querySelectorAll('#navbar .list-items a')[3].textContent = 'Contact';
    
    // HEADER
    document.querySelector('.container .head h1').textContent = 'Potted Plants Blog';
    document.querySelector('.container .head span').textContent = 'Mauricio Ayllón Varela | Software Engineer';
    
    // SECTIONS  
        // ABOUT ME
        document.querySelector('#about-me h3').textContent = 'About me';
        document.querySelector('#about-me .text').innerHTML = 'Hey everyone! I\'m Mauricio Alonso and i\'m from Perú,<br> this was my first project with Html and Css but i wanted to improve this website with some new skills in Css and some more about JavaScript that i learned. <br> If you are reading this; i\'d like your opinion and suggestions, <br> you can do it in the contact section. <br> I hope you enjoy this website about plants.';
    
        // DESCRIPTION
        document.querySelector('#description h3').textContent = 'Description';
        document.querySelector('#description .d-title1 h4').textContent = 'Why is it important to take care of plants?';
        document.querySelector('#description .d-title1 p').innerHTML = 'Plants are living beings that produce the oxygen we breathe.<br/> they maintain the soil, allow us to create medicines with them and contribute to climate stability. <br>Those would be one of the reasons to take care of them, <br>since we would not only be caring for and protecting a living being, <br>but we would also be benefiting from its attributes.';
        document.querySelector('#description .d-title2 h4').textContent = 'What are the benefits of having plants at home?';
        document.querySelector('#description .d-title2 p').innerHTML = 'There are a huge variety of benefits to having plants at home. I am going to mention some of them. <br>One of its main benefits of plants is being able to extract food from them, <br>such as tomato plants, grapes, beets, etc. <br>At the same time, plants help us disconnect from stress and/or negative thoughts that <br> we have by concentrating on their care, we will find it pleasant. <br/>Finally, it is more recommended for a house with a high percentage of humidity that there are plants in it, <br>because they help regulate humidity.';
        document.querySelector('#description .d-title3 h4').innerHTML = 'What is the easiest and most beautiful plant to care for at home?<br/> (Peace Lily) ';
        document.querySelector('#description .d-title3 p').innerHTML = 'Peace Lilies are not really Lilies. They are tropical plants of the Arum family, <br> native to areas of Central and South America. <br>Its care is simple and fun, causing a beautiful result. <br> They are not cold hardy plants, so they should be grown in hot, humid climates. <br>These plants can grow up to 16 inches, so grow larger than your pot and you would have to use a container twice its size. <br>Lilies can\'t stand being dry that long so keep the soil moist every 2-3 days and repot the plant every few years in the spring. <br>They should be in bright, indirect sunlight and kept out of areas that receive sunlight all day. <br>One quality they have is that they will let you know when they are thirsty. The leaves would begin to fall. <br>To encourage growth during winter, fertilize the plant every 6 weeks or less. <br>Finally, Peace Lilies tend to collect too much dust in the home. Wipe gently with a damp paper towel every week, <br> otherwise a thick layer of dust could inhibit photosynthesis. ';
        
        // PLANTS
        document.querySelector('#plants h3').textContent = 'Plants';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all h4')[0].textContent = 'Anthuriun Red';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all p')[0].textContent = 'Its scientific name is Laceleaf.Anthurium is a genus of around 1000 species of flowering plants, the largest genus in the Arum family, Araceae.It is a plant that demands good humidity in the environment to keep its leaves healthy. A compelling reason to spray them with non-calcareous water, and preventing them from getting soaked. Whether we live in a dry climate or during the winter months, the humidity that it needs must be constantly provided.';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all h4')[1].textContent = 'Azalea';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all p')[1].textContent = 'Its scientific name is Rhododendron.Azaleas are flowering shrubs of the genus Rhododendron, particularly the earlier sections Tsutsusi and Pentanthera. Azaleas bloom in spring and their flowers usually last for several weeks. Shade tolerant, they prefer to live near or under trees. They are part of the Ericaceae family.they require a lot of humidity. Therefore, they must be watered daily by adding water to a plate. Let the roots get the water they need for 5-10 minutes. It is important not to use very hard water, it must be filtered or rainwater.';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all h4')[2].textContent = 'Deliciosa Monstera';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all p')[2].textContent = 'Its scientific name is Swiss cheese plant. Monstera deliciosa, the Swiss cheese plant or split-leaf philodendron is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.Irrigation is 1 to 2 times a week in summer and 1 time every 15 in winter. Monsteras need access to sunlight and the necessary nutrients to produce huge leaves, and, they also need large doses of lots of water.';
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all h4')[0].textContent = 'Tomato plant';
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all p')[0].textContent = 'Its scientific name is Solanum lycopersicum. It is native to the low Andes, and was cultivated by the Aztecs. The Mexicans knew it as xictomatl, fruit with a navel. Because of that word "tomatl" the Spanish conquistadors called it "tomato". It requires sunlight, in shade the production suffers and good drainage.Sow them, spreading the seeds in a small row or hole 1 centimeter deep. Water the mixture abundantly after sowing them, and keep the substrate always moist until the seeds germinate, it will take 10 to 15 days.';
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all h4')[1].textContent = 'Mother in law Tongue'; 
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all p')[1].textContent = 'Its scientific name is Dracaena trifasciata.It is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is better known as snake plant, Saint George\'s sword, mother-in-law\'s tongue, and viper\'s rope hemp, etc.There are 3 factors for your care: lighting, irrigation and fertilizer. It is recommended that it receive indirect lighting. It should be placed near a window.it is watered only once or twice a month, always taking care that the substrate is dry, excess water would cause stem rot.';
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all h4')[2].textContent = 'Aster'; 
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all p')[2].textContent = 'Its scientific name is Aster amellus. Aster tripolium is a species of plant belonging to the Asteraceae family. It is native to northern Europe, which limits its distribution to marshes, estuaries and sometimes in brackish places. A bright location is essential for its flowering with fertile soil and good drainage, it also needs a regular subscriber, important for its development. We must consider what is necessary to give the substrate the necessary humidity to develop, since it does not demand a high consumption of water. In fact, it does not tolerate excess water or stagnation.';
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all h4')[0].textContent = 'Dracaena Lemon Lime';
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all p')[0].textContent = 'Its scientific name is Dracaena fragrans.Originally from Madagascar and known for its red sap, this strain not only has great lines and vivid colours, but is also very easy to care for.It needs good lighting; warm and stable temperature; specific substrate;moderate watering and environmental humidity, two of the most delicate cares for this plant.This one prefers its soil to dry out slightly between waterings. When the soil stays too wet or too dry, you\'ll probably see brown tips on the leaves. If the top is dry, then your plant is ready to drink.';
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all h4')[1].textContent = 'Bamboo'; 
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all p')[1].textContent = 'Its scientific name is Bambusoideae.The origin dates back about 40 million years, but its use dates back to approximately 5,000 BC, Neolithic of the Stone Age, in China, where the first products made of bamboo appear, such as arrows or construction materials.Bamboo should be watered twice a week in temperate climates, as it needs large amounts of water to grow. However, it is important to take care not to drown the roots. In the case of hot climates, watering should be three to four times a week.';
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all h4')[2].textContent = 'Bougainvillea'; 
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all p')[2].textContent = 'Its scientific name is Bougainvillea.This thorny shrub or tree is native to South America, mainly Brazil and Peru. It is currently cultivated as an ornamental plant in various subtropical and tropical regions of the world.During the winter, the ideal is that it is watered with rainwater or, indoors, that we leave it at rest; during the summer it will not be excessively demanding: a weekly watering will suffice if it is planted directly in the ground, and a couple of weekly waterings if it is in a pot.';
        //PLANTS SLIDE
        document.querySelector('#plants .plants-slide h4').textContent = '';

        // CONTACT
        document.querySelector('#contact h3').textContent = 'Contact';
        document.querySelector('#contact form #name').placeholder = 'NAME:';
        document.querySelector('#contact form #email').placeholder = 'EMAIL:';
        document.querySelector('#contact form #message').placeholder = 'MESSAGE:';
        document.querySelector('#contact form .send').value = 'Send';
}

function setSpanish() {
    // PLANTS
    const plantsSlideEls = [
        {
            imgUrl: './Resources/plant-2.jpg',
            titleName: 'Azalea',
            description: 'Su nombre científico es Rhododendron. Las azaleas son arbustos con flores del género Rhododendron, particularmente las secciones anteriores Tsutsusi y Pentanthera. Las azaleas florecen en primavera y sus flores suelen durar varias semanas. Tolerantes a la sombra, prefieren vivir cerca o debajo de los árboles. Son parte de la familia Ericaceae. Requieren mucha humedad. Por lo tanto, deben regarse diariamente agregando agua a un plato. Deja que las raíces obtengan el agua que necesitan durante 5 a 10 minutos. Es importante no utilizar agua muy dura, debe ser filtrada o agua de lluvia.' 
        },
        {
            imgUrl: './Resources/plant-3.jpg',
            titleName: 'Costilla de Adán',
            description: 'Su nombre científico es planta de queso suizo. Costilla de Adán, la planta de queso suizo o filodendro de hoja partida es una especie de planta con flores nativa de los bosques tropicales del sur de México, al sur de Panamá. Se ha convertido en una especie levemente invasora en Hawái, Seychelles, Isla Ascensión y las Islas de la Sociedad. El riego es de 1 a 2 veces por semana en verano y 1 vez cada 15 en invierno. Las monsteras necesitan acceso a la luz solar y los nutrientes necesarios para producir hojas enormes, y también necesitan grandes dosis de agua.' 
        },
        {
            imgUrl: './Resources/plant-4.jpeg',
            titleName: 'Planta de Tomate',
            description: 'Su nombre científico es Solanum lycopersicum. Es originaria de los Andes bajos, y fue cultivada por los aztecas. Los mexicanos la conocían como xictomatl, fruta con ombligo. Por esa palabra "tomatl" los conquistadores españoles lo llamaron "tomate". Requiere luz solar, en sombra la producción se resiente y buen drenaje. Siembra esparciendo las semillas en una pequeña hilera o hoyo de 1 centímetro de profundidad. Riega ligeramente la mezcla después de sembrarlas, y mantén el sustrato siempre húmedo hasta que germinen las semillas, tardará de 10 a 15 días.' 
        },
        {
            imgUrl: './Resources/plant-5.jpg',
            titleName: 'Lengua de Suegra',
            description: 'Su nombre científico es Dracaena trifasciata. Es una especie de planta con flores de la familia Asparagaceae, nativa de África occidental tropical desde Nigeria al este hasta el Congo. Es más conocida como planta de serpiente, espada de San Jorge, lengua de suegra, cáñamo de cuerda de víbora, etc. Hay 3 factores para su cuidado: iluminación, riego y abono. Se recomienda que reciba iluminación indirecta. Se debe colocar cerca de una ventana. Se riega solo una o dos veces al mes, siempre cuidando que el sustrato esté seco, el exceso de agua provocaría la pudrición del tallo.' 
        },
        {
            imgUrl: './Resources/plant-6.jpg',
            titleName: 'Aster',
            description: 'Su nombre científico es Aster amellus. Aster tripolium es una especie de planta perteneciente a la familia Asteraceae. Es originaria del norte de Europa, lo que limita su distribución a marismas, estuarios y en ocasiones en lugares salobres. Una ubicación luminosa es esencial para su floración con suelo fértil y buen drenaje, también necesita un abonado regular, importante para su desarrollo. Debemos tener en cuenta lo necesario para darle al sustrato la humedad necesaria para que se desarrolle, ya que no demanda un consumo elevado de agua. De hecho, no tolera el exceso de agua ni el estancamiento.' 
        },
        {
            imgUrl: './Resources/plant-7.jpg',
            titleName: 'Drácena Limón',
            description: 'Su nombre científico es Dracaena fragrans. Originaria de Madagascar y conocida por su savia roja, esta variedad no solo tiene grandes líneas y colores vivos, sino que también es muy fácil de cuidar. Necesita buena iluminación; temperatura cálida y estable; sustrato específico; riegos moderados y humedad ambiental, dos de los cuidados más delicados para esta planta. Esta prefiere que su terreno se seque ligeramente entre riego y riego. Cuando la tierra permanece demasiado húmeda o demasiado seca, probablemente verá puntas marrones en las hojas. Si la parte superior está seca, entonces tu planta está lista para beber.' 
        },
        {
            imgUrl: './Resources/plant-8.jpg',
            titleName: 'Bambú',
            description: 'Su nombre científico es Bambusoideae. El origen se remonta a unos 40 millones de años, pero su uso se remonta aproximadamente al 5.000 a.C., Neolítico de la Edad de Piedra, en China, donde aparecen los primeros productos elaborados con bambú, como flechas o materiales de construcción. El bambú debe regarse dos veces por semana en climas templados, ya que necesita grandes cantidades de agua para crecer. Sin embargo, es importante tener cuidado de no ahogar las raíces. En el caso de climas cálidos, el riego debe ser de tres a cuatro veces por semana.' 
        },
        {
            imgUrl: './Resources/plant-9.jpg',
            titleName: 'Bougainvillea',
            description: 'Su nombre científico es Bougainvillea. Este arbusto o árbol espinoso es originario de América del Sur, principalmente Brasil y Perú. Actualmente se cultiva como planta ornamental en diversas regiones subtropicales y tropicales del mundo. Durante el invierno, lo ideal es que se riegue con agua de lluvia o, en el interior, que la dejemos en reposo; durante el verano no será excesivamente exigente: bastará un riego semanal si está plantada directamente en el suelo, y un par de riegos semanales si está en maceta.' 
        },
    ];
    
    const imgEl = document.querySelector('.plants-slide-2 img');
    const titleEl = document.querySelector('.plants-slide-2 h4');
    const descriptionEl = document.querySelector('.plants-slide-2 p');
    
    const nextEl = document.querySelector('.plants-slide-2 .next');
    
    let idx = 0;
    
    function updatePlants() {
        const {imgUrl, titleName, description} =
        plantsSlideEls[idx];
    
        imgEl.src = imgUrl;
        titleEl.innerText = titleName;
        descriptionEl.innerText = description;
        
        idx++;
        if(idx === plantsSlideEls.length){
            idx = 0;
        }
    }

    const plantsSlide1 = document.querySelector('#plants .plants-slide');
    plantsSlide1.classList.add('hidden');
    const plantsSlide2 = document.querySelector('#plants .plants-slide-2');
    plantsSlide2.classList.remove('hidden');
    
    nextEl.addEventListener('click', () => {
        updatePlants();
    }) 

    localStorage.setItem('language', 'es');

    // NAVBAR
    document.querySelectorAll('#navbar .list-items a')[0].textContent = 'Sobre mí';
    document.querySelectorAll('#navbar .list-items a')[1].textContent = 'Descripción';
    document.querySelectorAll('#navbar .list-items a')[2].textContent = 'Plantas';
    document.querySelectorAll('#navbar .list-items a')[3].textContent = 'Contacto';
    
    // HEADER
    document.querySelector('.container .head h1').textContent = 'Blog de Plantas en Macetas';
    document.querySelector('.container .head span').textContent = 'Mauricio Ayllón Varela | Ingeniero de Software';

    // SECTIONS  
        // ABOUT ME
        document.querySelector('#about-me h3').textContent = 'Sobre mí';
        document.querySelector('#about-me .text').innerHTML = '¡Hola a todos! Me llamo Mauricio Alonso y soy de Perú,<br> este fue mi primer proyecto con Html y Css, pero quería mejorar este sitio web con algunas habilidades nuevas con Css y algo más sobre JavaScript que aprendí. <br> Si estás leyendo esto; Me gustaría tu opinión y sugerencias, <br> puedes hacerlo en la sección de contacto. <br> Espero que disfrutes de este sitio web sobre plantas.';
        
        // DESCRIPTION
        document.querySelector('#description h3').textContent = 'Descripción';
        document.querySelector('#description .d-title1 h4').textContent = '¿Por qué es importante cuidar las plantas?';
        document.querySelector('#description .d-title1 p').innerHTML = 'Las plantas son seres vivos que producen el oxígeno que respiramos.<br/>mantienen el suelo, nos permiten crear medicinas con ellos ycontribuir a la estabilidad climática. <br> Esa sería una de las razones para cuidarlos, <br>ya que no solo estaríamos cuidando y protegiendo a un ser vivo, <br> pero también nos estaríamos beneficiando de sus atributos.';
        document.querySelector('#description .d-title2 h4').textContent = '¿Cuáles son los beneficios de tener plantas en casa';
        document.querySelector('#description .d-title2 p').innerHTML = 'Hay una gran variedad de beneficios de tener plantas en casa. Voy a mencionar algunos de ellos. <br>Uno de sus principales beneficios de las plantas es poder extraer alimento de ellas, <br>como plantas de tomate, uva, remolacha, etc. <br>Al mismo tiempo, las plantas nos ayudan a desconectar del estrés y/o pensamientos negativos que <br>tenemos al concentrarnos en su cuidado, lo encontraremos agradable. <br/>Por último, es más recomendable para una casa con un alto porcentaje de humedad que haya plantas en ella, <br>porque ayudan a regular la humedad.';
        document.querySelector('#description .d-title3 h4').innerHTML = '¿Cuál es la planta más fácil y hermosa de cuidar en casa?<br/> (Lirio de la paz)';
        document.querySelector('#description .d-title3 p').innerHTML = 'Los lirios de la paz no son realmente lirios. Son plantas tropicales de la familia Arum, <br> originarias de zonas de América Central y del Sur. <br>Su cuidado es sencillo y divertido, provocando un bonito resultado. <br> No son plantas resistentes al frío, por lo que deben cultivarse en climas cálidos y húmedos. <br>Estas plantas pueden crecer hasta 16 pulgadas, por lo que crecen más que su maceta y tendría que usar un contenedor del doble de su tamaño. <br>Los lirios no soportan estar secos tanto tiempo, así que mantén la tierra húmeda cada 2 o 3 días y trasplanta la planta cada pocos años en la primavera. <br>Deben estar expuestos a la luz solar indirecta y brillante y mantenerse fuera de las áreas que reciben luz solar todo el día. <br>Una cualidad que tienen es que te avisarán cuando tengan sed. Las hojas empezarían a caer. <br>Para fomentar el crecimiento durante el invierno, fertilice la planta cada 6 semanas o menos. <br>Finalmente, los lirios de la paz tienden a acumular demasiado polvo en el hogar. Limpie suavemente con una toalla de papel húmeda cada semana, <br>de lo contrario, una gruesa capa de polvo podría inhibir la fotosíntesis.';

        // PLANTS
        document.querySelector('#plants h3').textContent = 'Plantas';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all h4')[0].textContent = 'Anturio Rojo';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all p')[0].textContent = 'Su nombre científico es Laceleaf. Anturio es un género de alrededor de 1000 especies de plantas con flores, el género más grande de la familia Arum, Araceae. Es una planta que exige buena humedad en el ambiente para mantener sus hojas saludables. Un motivo de peso para rociarlas con agua no calcárea, y evitar que se empapen. Tanto si vivimos en un clima seco como durante los meses de invierno, hay que proporcionarle constantemente la humedad que necesita.';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all h4')[1].textContent = 'Azalea';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all p')[1].textContent = 'Su nombre científico es Rhododendron. Las azaleas son arbustos con flores del género Rhododendron, particularmente las secciones anteriores Tsutsusi y Pentanthera. Las azaleas florecen en primavera y sus flores suelen durar varias semanas. Tolerantes a la sombra, prefieren vivir cerca o debajo de los árboles. Son parte de la familia Ericaceae. Requieren mucha humedad. Por lo tanto, deben regarse diariamente agregando agua a un plato. Deja que las raíces obtengan el agua que necesitan durante 5 a 10 minutos. Es importante no utilizar agua muy dura, debe ser filtrada o agua de lluvia.';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all h4')[2].textContent = 'Costilla de Adán';
        document.querySelectorAll('#plants .plants-container .plants1 .plants1-all p')[2].textContent = 'Su nombre científico es planta de queso suizo. Costilla de Adán, la planta de queso suizo o filodendro de hoja partida es una especie de planta con flores nativa de los bosques tropicales del sur de México, al sur de Panamá. Se ha convertido en una especie levemente invasora en Hawái, Seychelles, Isla Ascensión y las Islas de la Sociedad. El riego es de 1 a 2 veces por semana en verano y 1 vez cada 15 en invierno. Las monsteras necesitan acceso a la luz solar y los nutrientes necesarios para producir hojas enormes, y también necesitan grandes dosis de agua.';
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all h4')[0].textContent = 'Planta de Tomate';
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all p')[0].textContent = 'Su nombre científico es Solanum lycopersicum. Es originaria de los Andes bajos, y fue cultivada por los aztecas. Los mexicanos la conocían como xictomatl, fruta con ombligo. Por esa palabra "tomatl" los conquistadores españoles lo llamaron "tomate". Requiere luz solar, en sombra la producción se resiente y buen drenaje. Siembra esparciendo las semillas en una pequeña hilera o hoyo de 1 centímetro de profundidad. Riega ligeramente la mezcla después de sembrarlas, y mantén el sustrato siempre húmedo hasta que germinen las semillas, tardará de 10 a 15 días.';
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all h4')[1].textContent = 'Lengua de Suegra'; 
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all p')[1].textContent = 'Su nombre científico es Dracaena trifasciata. Es una especie de planta con flores de la familia Asparagaceae, nativa de África occidental tropical desde Nigeria al este hasta el Congo. Es más conocida como planta de serpiente, espada de San Jorge, lengua de suegra, cáñamo de cuerda de víbora, etc. Hay 3 factores para su cuidado: iluminación, riego y abono. Se recomienda que reciba iluminación indirecta. Se debe colocar cerca de una ventana. Se riega solo una o dos veces al mes, siempre cuidando que el sustrato esté seco, el exceso de agua provocaría la pudrición del tallo.';
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all h4')[2].textContent = 'Aster'; 
        document.querySelectorAll('#plants .plants-container .plants2 .plants2-all p')[2].textContent = 'Su nombre científico es Aster amellus. Aster tripolium es una especie de planta perteneciente a la familia Asteraceae. Es originaria del norte de Europa, lo que limita su distribución a marismas, estuarios y en ocasiones en lugares salobres. Una ubicación luminosa es esencial para su floración con suelo fértil y buen drenaje, también necesita un abonado regular, importante para su desarrollo. Debemos tener en cuenta lo necesario para darle al sustrato la humedad necesaria para que se desarrolle, ya que no demanda un consumo elevado de agua. De hecho, no tolera el exceso de agua ni el estancamiento.';
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all h4')[0].textContent = 'Drácena Limón';
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all p')[0].textContent = 'Su nombre científico es Dracaena fragrans. Originaria de Madagascar y conocida por su savia roja, esta variedad no solo tiene grandes líneas y colores vivos, sino que también es muy fácil de cuidar. Necesita buena iluminación; temperatura cálida y estable; sustrato específico; riegos moderados y humedad ambiental, dos de los cuidados más delicados para esta planta. Esta prefiere que su terreno se seque ligeramente entre riego y riego. Cuando la tierra permanece demasiado húmeda o demasiado seca, probablemente verá puntas marrones en las hojas. Si la parte superior está seca, entonces tu planta está lista para beber.';
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all h4')[1].textContent = 'Bambú'; 
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all p')[1].textContent = 'Su nombre científico es Bambusoideae. El origen se remonta a unos 40 millones de años, pero su uso se remonta aproximadamente al 5.000 a.C., Neolítico de la Edad de Piedra, en China, donde aparecen los primeros productos elaborados con bambú, como flechas o materiales de construcción. El bambú debe regarse dos veces por semana en climas templados, ya que necesita grandes cantidades de agua para crecer. Sin embargo, es importante tener cuidado de no ahogar las raíces. En el caso de climas cálidos, el riego debe ser de tres a cuatro veces por semana.';
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all h4')[2].textContent = 'Bougainvillea'; 
        document.querySelectorAll('#plants .plants-container .plants3 .plants3-all p')[2].textContent = 'Su nombre científico es Bougainvillea. Este arbusto o árbol espinoso es originario de América del Sur, principalmente Brasil y Perú. Actualmente se cultiva como planta ornamental en diversas regiones subtropicales y tropicales del mundo. Durante el invierno, lo ideal es que se riegue con agua de lluvia o, en el interior, que la dejemos en reposo; durante el verano no será excesivamente exigente: bastará un riego semanal si está plantada directamente en el suelo, y un par de riegos semanales si está en maceta.';
        // PLANTS SLIDE


        // CONTACT
        document.querySelector('#contact h3').textContent = 'Contacto';
        document.querySelector('#contact form #name').placeholder = 'NOMBRE:';
        document.querySelector('#contact form #email').placeholder = 'EMAIL:';
        document.querySelector('#contact form #message').placeholder = 'MENSAJE:';
        document.querySelector('#contact form .send').value = 'Enviar';
}

// We gonna create a variable where the language set.
const language = localStorage.getItem('language');

if (language === 'en') {
    setEnglish();
} else if (language === 'es') {
    setSpanish();
}