let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort(function(word1, word2) {
    return collator.compare(word1, word2);
});


console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК