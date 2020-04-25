var quotes = [
    "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.",
    "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
    "Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally, I’ll hit somebody with my car. So sue me.",
    "No, I’m not going to tell them about the downsizing. If a patient has cancer, you don’t tell them.",
    "Sometimes I’ll start a sentence, and I don’t even know where it’s going. I just hope I find it along the way.",
    "I love inside jokes. I hope to be a part of one someday.",
    "I’m an early bird and a night owl. So I’m wise and have worms.",
    "I feel like all my kids grew up and then they married each other. It’s every parent’s dream.",
    "Make friends first, make sales second, make love third. In no particular order.",
    "I don’t understand. We have a day honoring Martin Luther King, but he didn’t even work here.",
    "St. Patrick’s Day is the closest thing the Irish have to Christmas.",
    "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
    "It’s not like booze ever killed anyone.",
]

var elements = document.getElementsByTagName('*');
var url = "https://michael-scott-quotes-api.herokuapp.com/randomQuote";

function getQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    return (quotes[randomNumber]);
}


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            var quote = getQuote();
            var replacedText = text.replace(/".*?"/, "\"" + quote + " - Michael Scott" + "\"");

            element.replaceChild(document.createTextNode(replacedText), node);
        }
    }
};