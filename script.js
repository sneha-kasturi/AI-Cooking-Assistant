let step = 0;

/* VOICE TEXT */
const potatoVoice =
"Boil potatoes. Heat oil. Add mustard seeds, cumin, curry leaves, onions and turmeric. Add potatoes, simmer and garnish.";

const brinjalVoice =
"Saute brinjal until soft. Prepare onion tomato masala. Add spices, combine brinjal, simmer and serve.";

function hideAll(){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('show'));
}

function goHome(){ hideAll(); home.classList.add('show'); }
function goIndian(){ hideAll(); indian.classList.add('show'); }
function goPotato(){ hideAll(); potato.classList.add('show'); }
function goBrinjal(){ hideAll(); brinjal.classList.add('show'); }

function toggleMenu(){
  nav.style.display = nav.style.display==="block"?"none":"block";
}

function potatoIngredients(){
  hideAll();
  ingredients.classList.add('show');
  ingTitle.innerText="Potato Bhaji Ingredients";
  ingList.innerHTML=`
    <li>Boiled potatoes</li>
    <li>Onion & green chilies</li>
    <li>Mustard & cumin seeds</li>
    <li>Turmeric & curry leaves</li>
    <li>Oil, salt, lemon</li>
  `;
  stepsList.innerHTML=`
    <li onclick="nextStep()">Temper spices</li>
    <li onclick="nextStep()">Add onion & chilies</li>
    <li onclick="nextStep()">Add potatoes</li>
    <li onclick="nextStep()">Simmer & garnish</li>
  `;
  resetProgress();
}

function brinjalIngredients(){
  hideAll();
  ingredients.classList.add('show');
  ingTitle.innerText="Brinjal Bhaji Ingredients";
  ingList.innerHTML=`
    <li>Brinjal cubes</li>
    <li>Onion, garlic, ginger</li>
    <li>Tomatoes & spices</li>
    <li>Oil & salt</li>
  `;
  stepsList.innerHTML=`
    <li onclick="nextStep()">Sauté brinjal</li>
    <li onclick="nextStep()">Prepare masala</li>
    <li onclick="nextStep()">Add tomatoes</li>
    <li onclick="nextStep()">Simmer & serve</li>
  `;
  resetProgress();
}

function showSteps(){
  hideAll();
  steps.classList.add('show');
}

function nextStep(){
  step++;
  progressBar.style.width=(step*25)+"%";
}

function resetProgress(){
  step=0;
  progressBar.style.width="0%";
}

/* VIDEO */
function openVideo(url){
  videoFrame.src = url;
  videoModal.style.display="block";
}

function closeVideo(){
  videoModal.style.display="none";
  videoFrame.src="";
}

/* VOICE */
function speak(text){
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
