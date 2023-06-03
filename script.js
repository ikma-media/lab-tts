const speechUtterance = new SpeechSynthesisUtterance();
speechUtterance.lang = 'en-GB';
speechUtterance.voiceURI = 'Google UK English Male';
speechUtterance.volume = 1;
speechUtterance.rate = 1;
speechUtterance.pitch = 1;

function playText() {
    var textt = document.getElementById("textToSpeak").value;
    var voiceSelect = document.getElementById("voiceSelect");
    var selectedVoice = voiceSelect.value;
    // add tts message in chat    
    var messages = document.getElementsByClassName("messages")[0];
    var ttstext = document.createElement("p");
    ttstext.innerHTML = "<p> <a href=''><img src='https://cdn3.emoji.gg/emojis/1257-gigachad-pink.png' width='12' alt='' srcset=''></a> <span class='username man'>TTS member </span> :"+text+"</p>";
    messages.appendChild(ttstext);
  speechUtterance.text = textt.value;
  window.speechSynthesis.speak(speechUtterance);
}

 
 // Create the SpeechSynthesisUtterance object
 var utterance = new SpeechSynthesisUtterance();
 var voices = [];

 // Load available voices
 window.speechSynthesis.onvoiceschanged = function() {
   voices = window.speechSynthesis.getVoices();
   var voiceSelect = document.getElementById("voiceSelect");

   // Filter and populate the voice options
   voices.forEach(function(voice) {
     if (voice.lang === "en-GB") { // Filter by language code
       var option = document.createElement("option");
       option.value = voice.name;
       option.textContent = voice.name;
       voiceSelect.appendChild(option);
     }
   });
 };

 function speak() {
   var text = document.getElementById("textToSpeak").value;
   if(text == ""){
    text = "kteb chi kalwa"
   }
   // add tts message in chat    
   var messages = document.getElementsByClassName("messages")[0];
   var ttstext = document.createElement("p");
   ttstext.innerHTML = "<p> <a href=''><img src='https://cdn3.emoji.gg/emojis/1257-gigachad-pink.png' width='12' alt='' srcset=''></a> <span class='username man'>TTS member </span> : "+text+"</p>";
   messages.appendChild(ttstext);
   // Find the male voice
   var voices = window.speechSynthesis.getVoices();
   var voice = voices.find(function (v) { return v.name === "Google UK English Male"; });

   if (voice) {
     utterance.voice = voice;
   } else {
     utterance.voice = null; // Use the default voice if the selected voice is not found
   }

   utterance.text = text;
   // Speak the text
   window.speechSynthesis.speak(utterance);
   document.getElementById("textToSpeak").value = "";
   var chat = document.getElementsByClassName("chat")[0];
   scrollToBottom(chat);
 }

 function stop() {
   // Stop the speech
   window.speechSynthesis.cancel();
   document.getElementById("textToSpeak").value = ""

 }

 // Function to scroll the messages to the bottom
function scrollToBottom(chat) {
    chat.scrollTop = chat.scrollHeight;

  }