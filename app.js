

var data = [
    ["De quel courant d'art appartient la Sainte Chapelle ?", "Gothique", "Baroque", "a"],
    ["Quel est le frère de Dagobert Ier ?", "Childéric II", "Caribert II", "b"],
    ["Comment s'appelle le frère de Louis III ?", "Robert", "Carloman", "b"],
    ["En quelle année, le pape Urbain II prêche la Première Croisade ?", "1099", "1095", "b"],
    ["Comment s'appellent les esclaves dans la société normande ?", "Jarl", "Thrall", "b"],
    [" Pour quel ordre Bernard de Clairvaux a-t-il rédigé des règles de conduite ?", "Les teutonniques", "Les templiers", "b"],
    ["Qui mena la conjuration des Égaux ?", "Gracchus Babeuf", "Jacques Roux", "a"],
    ["Qui assure la Régence du royaume pendant la Guerre Folle ?", "Anne de Beaujeu", "Jeanne de France", "a"],
    ["Qu'est-ce qui déclenche la troisième croisade ?", " La prise d'Antioche", "La prise de Jerusalem", "b"],
    ["Révolution - Qui assassina Marat dans sa baignoire ?", " Billaud-Varennes", "Charlotte Corday", "b"],
    ["La technique et la science - Qu'est-ce qu'une araire ?", "Une charrue sans roue", "Une charette", "a"],
    ["Saint Louis - Quelle relique repose sous la Sainte-Chapelle ?", "Un morceau de la croix du Christ", "La couronne d'aubépine du Christ", "b"],
    ["Philippe le Bel - En quelle année l'ordre des templiers est-il supprimé ?", "1312", "1307", "a"],
    ["Guerre de Cent Ans - Qui est opposé à Charles de Blois lors de la guerre de Succession de Bretagne ?", "Charles le Mauvais", "Jean de Montfort", "b"],
    ["Napoléon - Lequel de ces maréchaux est invaincu ?", "Lefebvre", "Davout", "b"],
    ["Napoléon - Où réside le tombeau de Napoléon ?", "Louvre", "Invalides", "b"],
    ["Charlemagne - Quel pape a sacré Charlemagne ?", "Adrien Ier", "Léon III", "b"],
    ["François Ier - Qui a réalisé la fresque du plafond de la chapelle Sixtine ?", "Raphaël", "Michel-ange", "b"],
    ["Révolution - Quel révolutionnaire est un grand chef de la franc-maçonnerie ?","Philippe Égalité","Barnave","a"],
    ["Saint Louis - En quelle année se déroule la seconde croisade contre les albigeois mené par Louis VIII ?","1226","1209","a"],
    ["Héraldique - Laquelle de ces pièces honorables ne fait pas allusion à un vêtement ?","Chevron","Mantel","a"],
    ["Louis XI - Quelle bataille Charles le Téméraire perd contre les Suisses en 1476 ?","Morat","Fornoue","a"],
    ["Philippe le Bel - En quelle année le Grand Maître Jacques de Molay est-il brûlé ?","1314","1307","a"], 
    ["Napoléon - Où Napoléon est-il né ?","Ajaccio","Bastia","a"],
    ["Napoléon - Qui est second consul avec Bonaparte et Lebrun ?","Sieyès","Cambacérès","b"],
    ["Clovis - Selon la légende, de quel région de la Grèce proviennent les Mérovingiens ?","Arcadie","Corcyre","a"],
    ["Capétiens - Quel roi d'Angleterre, mort sans héritier, règne avant 1066 ?","Richard II","Edouard le confesseur","b"],
    ["François Ier - Qui la mère de François Ier ?","Louise de Savoie","Anne de Beaujeu","a"],
    ["Napoléon - Qui est le maréchal qui règne sur la Suède ?","Oudino","Bernadotte","b"],
    ["L'Art de la Guerre - Au cours de quel siècle apparaît le haubert ?","XIème siècle","XIIème siècle","b"],
    ["Philippe Auguste - Qui sont les principaux administrateurs de Philippe II ?","Les préfets et les juges","Les baillis et sénéchaux","b"],
    ["Carolingiens - Quel roi accorde la Normandie aux Vikings ?","Charle II le Chauve","Charle III le Simple","b"],
    ["Philippe Auguste - Qui est le père de Richard Coeur de Lion ?","Henri Plantagenêt","Conrad III","a"],
    ["La technique et la science - Qui est Nicolas Flamel ?","Un alchimiste","Un navigateur","a"],
    ["Clovis - Qui est l'épouse de Sigebert Ier","Frédégonde","Brunehaut","b"],
    ["Philippe Auguste - Qui est la première femme de Philippe Auguste ?"," Aliénor d'Aquitaine","Isabelle de Hainaut","b"]

]
var messageGood = "Bonne réponse !";
var messageWrong = "Mauvaise réponse !";
let score = 0;

let nbOfQuestions = 0;

var questRandom;
function displayQuestAndAnsw() {
     questRandom = Math.floor(Math.random() * (data.length - 1 + 1)) + 1;
     console.log(questRandom);
     let displayedScore = document.querySelector('.score');
     displayedScore.innerHTML = score;
    if (nbOfQuestions < 10) {
        hideMessage();
        document.querySelector('.yes').classList.add('hidden');
        document.querySelector('.no').classList.add('hidden');
        document.querySelector('.rejouer').classList.add('hidden');
        document.querySelector('.card').classList.add('anim');
        
        
        let currentQuestion = document.querySelector('.question');
        currentQuestion.innerHTML = data[questRandom][0];
        
        let currentAnswerA = document.querySelector('.answerA');
        let currentAnswerB = document.querySelector('.answerB');
        currentAnswerA.innerHTML = data[questRandom][1];
        currentAnswerB.innerHTML = data[questRandom][2];
        console.log("rep",data[questRandom][3],questRandom);
    } else {
        tryAgain();
    }
}
function again() {
    window.location.reload();
}
function closeGame() {
    window.close();
}
function tryAgain() {
    var game = document.querySelector('.wGame');
    game.classList.add('hidden');

    document.querySelector('.yes').classList.remove('hidden');
    document.querySelector('.no').classList.remove('hidden');
    document.querySelector('.rejouer').classList.remove('hidden');
}
function hideMessage() {
    var message = document.querySelector('.message');
    message.innerHTML = '';
}
displayQuestAndAnsw();
function repondreA() {
    if (data[questRandom][3] == 'a') {
        var audio = new Audio('correct.mp3');
        audio.play();
        var good = document.querySelector('.message');
        good.style = 'color:green';
        good.innerHTML = messageGood;
        score++;
        nbOfQuestions++;
        document.querySelector('.card').classList.remove('anim');
        setTimeout(displayQuestAndAnsw, 2000);
    } else {
        var audio = new Audio('faux.mp3');
        audio.play();
        var wrong = document.querySelector('.message');
        wrong.style = 'color:red';
        wrong.innerHTML = messageWrong;
        nbOfQuestions++;
        document.querySelector('.card').classList.remove('anim');
        setTimeout(displayQuestAndAnsw, 2000);
    }
}

function repondreB() {

    if (data[questRandom][3] == 'b') {
        var audio = new Audio('correct.mp3');
        audio.play();
        var good = document.querySelector('.message');
        good.style = 'color:green';
        good.innerHTML = messageGood;
        score++;
        nbOfQuestions++;
        document.querySelector('.card').classList.remove('anim');
        setTimeout(displayQuestAndAnsw, 2000);
    } else {
        var audio = new Audio('faux.mp3');
        audio.play();
        var wrong = document.querySelector('.message');
        wrong.style = 'color:red';
        wrong.innerHTML = messageWrong;
        nbOfQuestions++;
        document.querySelector('.card').classList.remove('anim');
        setTimeout(displayQuestAndAnsw, 2000);
    }

}