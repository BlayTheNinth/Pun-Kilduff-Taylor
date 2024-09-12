Date.prototype.isLeapYear = function() {
    var year = this.getFullYear();
    if((year & 3) != 0) return false;
    return ((year % 100) != 0 || (year % 400) == 0);
};

Date.prototype.getDOY = function() {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = this.getMonth();
    var dn = this.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && this.isLeapYear()) dayOfYear++;
    return dayOfYear;
};

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var puns = [
    "I can't believe I got fired from the calendar factory. All I did was take a day off.",
    "I wasn't originally going to get a brain transplant, but then I changed my mind.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
    "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
    "I'm glad I know sign language, it's pretty handy.",
    "I am on a seafood diet. Every time I see food, I eat it.",
    "My first job was working in an orange juice factory, but I got canned: couldn't concentrate.",
    "When I get naked in the bathroom, the shower usually gets turned on.",
    "Why did the scientist install a knocker on his door? He wanted to win the No-bell prize!",
    "A book just fell on my head. I've only got myshelf to blame.",
    "Cartoonist found dead at home. Details are sketchy.",
    "I wanna make a joke about sodium, but Na..",
    "I hate insects puns, they really bug me.",
    "What do prisoners use to call each other? Cell phones.",
    "eBay is so useless. I tried to look up lighters and all they had was 13,749 matches.",
    "What did one ocean say to the other ocean? Nothing, they just waved.",
    "Don't spell part backwards. It's a trap.",
    "My math teacher called me average. How mean!",
    "Atheism is a non-prophet organization.",
    "I've just written a song about tortillas - actually, it's more of a rap.",
    "Which day do chickens hate the most? Friday.",
    "What did the tree say to autumn? Leaf me alone.",
    "What tea do hockey players drink? Penaltea!",
    "On the other hand, you have different fingers.",
    "What do sea monsters eat for lunch? Fish and ships.",
    "What do you have to do to have a party in space? You have to Planet.",
    "It's hard to explain puns to kleptomaniacs because they always take things literally.",
    "An opinion without 3.14159 is just an onion.",
    "What do you get when you cross a joke with a rhetorical question?",
    "Where do you find a birthday present for a cat? In a cat-alogue!",
    "Television is a medium because anything well done is rare.",
    "I need to stop drinking so much milk. It's an udder disgrace.",
    "What do you call a fish with no eye? FSH",
    "What do squirrels give for Valentine's Day? Forget-me-nuts.",
    "Cells multiply by dividing.",
    "Why do dogs make good sailors? They know their knots.",
    "What do elves learn in school? The Elf-abet! ",
    "I went to school without my shoes today. I got shoe-spended for a week.",
    "How do you get off a non-stop flight?",
    "It doesn't matter how much you push the envelope. It'll still be stationary.",
    "I walked into my sister's room and tripped on a bra. It was a booby trap.",
    "What did the mermaid wear to her math class? An algae bra.",
    "I tried to catch some fog earlier. I mist.",
    "3.14% of sailors are pirates.",
    "People are making apocalypse jokes like there's no tomorrow...",
    "I stayed up all night wondering where the sun went. Then it dawned on me.",
    "You wanna hear a joke about pizza? Never mind, it was too cheesy.",
    "Why did the scarecrow get an award? He was outstanding in his field.",
    "I forgot how to throw a boomerang, but eventually it came back to me.",
    "When a clock is hungry... it goes back four seconds.",
    "When the power went out at the school, the children were de-lighted.",
    "The frustrated cannibal threw up his hands.",
    "I didn't have the faintest idea as to why I passed out.",
    "There was once a crossed-eyed teacher who had issues controlling his pupils.",
    "Diarrhea is hereditary... it runs in your genes.",
    "Those two men drinking battery acid will soon be charged.",
    "A criminal's best asset is his lie-ability.",
    "It's not that the guy didn't know how to juggle... he just didn't have the balls to do it.",
    "What did the cannibal get when he showed up to the party late? A cold shoulder!",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Did you hear about the guy whose whole left side was cut off? He's all right now.",
    "I wondered why the baseball was getting bigger. Then it hit me.",
    "Yesterday I accidentally swallowed some food coloring. The doctor says I'm OK, but I feel like I've dyed a little inside.",
    "Have you ever tried to eat a clock? It's very time consuming.",
    "The experienced carpenter really nailed it, but the new guy screwed everything up.",
    "A prisoner's favorite punctuation mark is the period. It marks the end of their sentence.",
    "I used to be a banker, but I lost interest.",
    "I don't trust these stairs, they're always up to something.",
    "What do dogs do after they finish obedience school? They get their masters.",
    "When William joined the army he disliked the phrase 'fire at will'.",
    "So what if I don't know what apocalypse means?! It's not the end of the world!",
    "A bicycle can't stand on its own because it is two-tired.",
    "Police were called to a daycare where a three-year-old was resisting a rest.",
    "My friend's bakery burned down last night. Now his business is toast.",
    "What did the grape say when it got stepped on? Nothing - but it let out a little whine.",
    "The girl quit her job at the doughnut factory because she was fed up with the hole business.",
    "The other day I held the door open for a clown. I thought it was a nice jester.",
    "I don't get people who stumble into mirrors. They need to watch themselves.",
    "I was going to look for my missing watch, but I could never find the time.",
    "I used to have a fear of hurdles, but I got over it.",
    "The butcher backed up into the meat grinder and got a little behind in his work.",
    "Always trust a glue salesman. They tend to stick to their word.",
    "Two hats were hanging on a hat rack in the hallway. One hat says to the other, 'You stay here, I'll go on a head.'",
    "The dead batteries were given out free of charge.",
    "I used to be addicted to soap, but I'm clean now.",
    "It's a lengthy article on Japanese sword fighters, but I can Samurais it for you.",
    "My new theory on inertia doesn't seem to be gaining momentum.",
    "Novice pirates make terrible singers because they can't hit the high seas.",
    "Sleeping comes so naturally to me, I could do it with my eyes closed.",
    "Jill broke her finger today, but on the other hand she was completely fine.",
    "My friend was fired from his job at the road department for stealing. I have to say I saw it coming. The last time I was at his house all the signs were there.",
    "Einstein developed a theory about space, and it was about time too.",
    "Did you hear about these new reversible jackets? I'm excited to see how they turn out.",
    "Children who fail their coloring exams always need a shoulder to crayon.",
    "Broken puppets for sale. No strings attached.",
    "The Balloon family name died off when it ran out of heir.",
    "My tailor is happy to make a pair of pants for me, or at least sew it seams.",
    "I used to hate maths but then I realised decimals have a point.",
    "I was struggling to figure out how lightning works, then it struck me.",
    "I tried to come up with a pun about famous German philosophers, but I Kant.",
    "I used to work at a hospital, but I got sick of it."
];

var pattern = new RegExp('[^ ]+ the [^ ]+ be with you');

var observer = new MutationObserver(function(mutations, observer) {
    feelingPunny();
});

observer.observe(document.getElementById("stream-items-id"), {
    childList: true
});

function feelingPunny() {
    $('#stream-items-id div.js-stream-tweet[data-user-id="23742038"]').each(function() {
        var tweet_text = $(this).find("p.js-tweet-text");
        if(tweet_text.text().match(pattern) != null) {
            var tweet_time = $(this).find(".js-short-timestamp").attr("data-time-ms");
        
            var tweet_name = $(this).find(".fullname");
            tweet_name.text("Pun Kilduff-Taylor");
            
            var doy = new Date(parseInt(tweet_time)).getDOY();
            var pun = puns[doy % puns.length];
            tweet_text.text(pun);
            $(this).css("font-style", "italic");
        }
    });
}

feelingPunny();