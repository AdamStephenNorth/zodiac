//Upon pressing the button, getSign is called to assign
//the .value of the inputBox to the userSign variable.
function getSign() {
//validateSign returns true iff the user's sign matches one of the zodiac signs.
  function validateSign(userSign) {
    for (i in zodiacSigns) {
      if (i === userSign) {
        return true;
      }
      //Else continue looping.
    }
     return false;
  //End validateSign
  }
//Displays information about the sign that was selected.
  function displaySign(userSign) {
    document.getElementById("outputBox").innerHTML =
      "<h2>Your are a <span style='text-transform: capitalize;'>" +
      userSign + "</span>!</h2><br>" + "<img id='" + userSign +
      "' src='img/img_trans.gif'>" + "<br><h3>" +
      zodiacSigns[userSign].description + "</h3>";
  }
//Gets the user's sign from the input box.
  userSign = document.getElementById('inputBox').value;
//Converts the user's sign to all lower-case characters for future comparisons. It might be better if this gets
//moved into the comparison testing section.
  userSign = userSign.toLowerCase();
//Check to see if the entered a valid sign.
  if (validateSign(userSign)) {
//If they did then display information about the chosen sign.
    displaySign(userSign)
  } else {
//Alert them that the entered sign is not valid.
    alert("Not a valid sign. Please try again.");
//Clear the input box.
    document.getElementById('inputBox').value = "";
//And exit out to wait for a new response.
    return;
  }
//End getSign.
}

var userSign;
//This sets up the main data object in which all zodiac sign info is kept.
var zodiacSigns = {
  aries: {
    name: "aries",
    image: "img/aries.jpg",
    description: "There is almost an impossible energy about the Aries. They are perpetually looking for speed and action.  This is actually one of the most active of all zodiac signs because of the ruler planet that they have – Mars.  Because of their innate desire to come first or excel in things, Aries people are often found to be ambitious too.  These are also people who know how to appreciate others and they will also always fight for the underdogs should they believe that somebody is being wronged; often even at one’s own cost."
  },

  taurus: {
    name: "taurus",
    image: "img/taurus.jpg",
    description: "Taurus, led by the Bull and belonging to the Earth sign can be extremely faithful and loving and giving friends who are extremely affectionate. They are modest and good natured. The Taureans are also people having a great deal of aesthetic sense and they have deep love for all things bright and beautiful."
  },

  gemini: {
    name: "gemini",
    image: "img/gemini.jpg",
    description: "Gemini is a prominent air sign. Like air they are ever changing. They belong to the fluid and shapeless air sign and thus their entire thought process is always indecisive and in the air. The sign is a mutable one, meaning it is not fixed. These people are often loath to trust others and end up not trusting their own strengths only."
  },

  cancer: {
    name: "cancer",
    image: "img/cancer.jpg",
    description: "The Cancer people are said to be extremely intuitive and are sentimental. So much so that it is believed that the Cancers is that sign in the zodiac whom it is very difficult to know.  They are sensitive and deeply care about their home and family. To the Cancer born people, home, loved ones and creatures’ comfort matters more than anything else."
  },

  leo: {
    name: "leo",
    image: "img/leo.jpg",
    description: "The Leo born people are extremely warm hearted, impressive and possess a deep magnetism. These are people who exude creativity in all spheres of life. The confidence, ambition, intelligence and positive thinking that they exude are exemplary and unparallel amongst all zodiac signs. They are also the most authoritative amongst all the signs. It is really impossible to miss them should you be in a room full of other people."
  },

  virgo: {
    name: "virgo",
    image: "virgo.jpg",
    description: "Virgo is a sign of perfectionist. They are actually symbolic of meticulous perfection. These people are critical and scathing about most of the ideas, thoughts and situations.  This is the characteristics of the Virgo which literally makes them extremely irritable and also despicable to other people."
  },

  libra: {
    name: "libra",
    image: "libra.jpg",
    description: "Libra belongs to the sign of Air and that speaks a lot about who they are. Like air, the Libra born people too are sometimes extremely difficult to predict. They can be full of enthusiasm and completely uninterested at the next moment. People born under this sign are great thinkers. They are extremely intelligent and attach a lot of value to intellect. These are people who are good communicators and makes great talkers."
  },

  scorpio: {
    name: "scorpio",
    image: "img/scorpio.jpg",
    description: "Scorpio belongs to the sign of Water. Like all the other water signs, they too are emotional people and can be extremely shallow or deep as is with water. As the water is fluid, so is the emotion of the Scorpio, which varies from one extreme to the other. Scorpio born people are mysterious and secretive. They hold many a secret in their heart and like the ocean can only show them when desired. They are vengeful and often conniving."
  },

  saggitarius: {
    name: "saggitarius",
    image: "img/saggitarius.jpg",
    description: "Sagittarius belongs to the Fire sign and also has the warmth of fire. They also have boundless energy and enthusiasm as that of fire. Sagittarius born people are also pretty unpredictable and have a whole lot of positive energy as they are inherently optimist."
  },

  capricorn: {
    name: "capricorn",
    image: "img/capricorn.jpg",
    description: "Capricorn belongs to the Earth sign. They are grouped under the Earth sign for their sense of practicality and being rooted to one space. These people lack spontaneity and are terribly set in their own space and are as irresolute as they are, it is like the earth. They lack imagination and thus to them everything is related to what they can see and how they can feel. They are sought after as advisors by lot of people for this practical trait."
  },

  aquarius: {
    name: "aquarius",
    image: "img/aquarius.jpg",
    description: "Though a lot of people feel that Aquarius is a water sign, it is in reality an air sign. As with all air signs, these people too are thinkers and puts a lot of emphasis on intellect than many other things. These people are extremely intelligent, quick learners, philosophers and have a superb control over all languages and communicate well. However do not think that these people are chatty, on the contrary they draw in people to meaningful conversations."
  },

  pisces: {
    name: "pisces",
    image: "img/pisces.jpg",
    description: "Pisces falls under the water sign and is absolutely like the water in nature. Their nature can either like a water body be deep or shallow.  Also they can never be constant and are perpetually in a fluid state of affairs.  This extreme fluidity in the other hand imparts its dreamy qualities to the Pisces born people.  These people, like the water which represents them, are marked by emotion and empathy."
  }
};
