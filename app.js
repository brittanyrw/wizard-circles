const people = [
    {
        "name": "Harry Potter",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Ron Weasley",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Hermione Granger",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Albus Dumbledore",
        "house": "gryffindor",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Rubeus Hagrid",
        "house": "gryffindor",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Severus Snape",
        "house": "slytherin",
        "type": "professor",
        "quidditch": null,
        "deathEater": true
    },
    {
        "name": "Voldemort",
        "house": "slytherin",
        "type": "",
        "quidditch": null,
        "deathEater": true
    },
    {
        "name": "Sirius Black",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Draco Malfoy",
        "house": "slytherin",
        "type": "student",
        "quidditch": true,
        "deathEater": true
    },
    {
        "name": "Fred Weasley",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Remus Lupin",
        "house": "gryffindor",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "George Weasley",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Neville Longbottom",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Arthur Weasley",
        "house": "gryffindor",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Ginny Weasley",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Minerva McGonagall",
        "house": "gryffindor",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Molly Weasley",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Dolores Umbridge",
        "house": "slytherin",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Alastor \"Mad Eye\" Moody",
        "house": "none",
        "type": "auror",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Vernon Dursley",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Cornelius Fudge",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "peter pettigrew",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": true
    },
    {
        "name": "Dobby",
        "house": "none",
        "type": "house-elf",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Dudley Dursley",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Horace Slughorn",
        "house": "slytherin",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Percy Weasley",
        "house": "gryffindor",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Luna Lovegood",
        "house": "ravenclaw",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Cedric Diggory",
        "house": "hufflepuff",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "petunia Dursley",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Kreacher",
        "house": "none",
        "type": "house-elf",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Bill Weasley",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Bartemius Crouch, Sr.",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": true
    },
    {
        "name": "Argus Filch",
        "house": "none",
        "type": "staff",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Viktor Krum",
        "house": "none",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Gilderoy Lockhart",
        "house": "ravenclaw",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Sybill Trelawney",
        "house": "ravenclaw",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Fleur Delacour",
        "house": "none",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Lucius Malfoy",
        "house": "slytherin",
        "type": "",
        "quidditch": null,
        "deathEater": true
    },
    {
        "name": "Ludo Bagman",
        "house": "",
        "type": "ministry",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Nymphadora Tonks",
        "house": "hufflepuff",
        "type": "auror",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Gregory Goyle",
        "house": "slytherin",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Vincent Crabbe",
        "house": "slytherin",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Bellatrix Lestrange",
        "house": "slytherin",
        "type": "",
        "quidditch": null,
        "deathEater": true
    },
    {
        "name": "Cho Chang",
        "house": "ravenclaw",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Dean Thomas",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Oliver Wood",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Hedwig",
        "house": "none",
        "type": "pet",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "James Potter",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Rita Skeeter",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Seamus Finnigan",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Igor Karkaroff",
        "house": "none",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Peeves",
        "house": "none",
        "type": "ghost",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Winky",
        "house": "none",
        "type": "house-elf",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Crookshanks",
        "house": "none",
        "type": "pet",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Poppy Pomfrey",
        "house": "none",
        "type": "staff",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Rufus Scrimgeour",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Mundungus Fletcher",
        "house": "",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Lavender Brown",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Griphook",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Filius Flitwick",
        "house": "ravenclaw",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Buckbeak",
        "house": "",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Angelina Johnson",
        "house": "gryffindor",
        "type": "",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Parvati Patil",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Lily Potter",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Xenophilius Lovegood",
        "house": "ravenclaw",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Nearly Headless Nick",
        "house": "",
        "type": "ghost",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Quirinus Quirrell",
        "house": "ravenclaw",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Moaning Myrtle",
        "house": "ravenclaw",
        "type": "ghost",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Garrick Ollivander",
        "house": "ravenclaw",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Katie Bell",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Olympe Maxime",
        "house": "",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Charlie Weasley",
        "house": "gryffindor",
        "type": "",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "Lee Jordan",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Kingsley Shacklebolt",
        "house": "",
        "type": "auror",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Fang",
        "house": "",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Fenrir Greyback",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Ernie MacMillan",
        "house": "hufflepuff",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Pomona Sprout",
        "house": "hufflepuff",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Phineas Nigellus Black",
        "house": "slytherin",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Narcissa Malfoy",
        "house": "slytherin",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Stan Shunpike",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Aberforth Dumbledore",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Bathilda Bagshot",
        "house": "none",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Colin Creevey",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Amos Diggory",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Firenze",
        "house": "none",
        "type": "professor",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Grawp",
        "house": "none",
        "type": "magical-creature",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Marge Dursley",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Gellert Grindelwald",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Cormac McLaggen",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null
    },
    {
        "name": "The Fat Lady",
        "house": "gryffindor",
        "type": "portrait",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Salazar slytherin",
        "house": "slytherin",
        "type": "founder",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Marvolo Gaunt",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Bob Ogden",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Pansy Parkinson",
        "house": "slytherin",
        "type": "student",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Fawkes",
        "house": "none",
        "type": "magical-creature",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Frank Bryce",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Morfin Gaunt",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Godric gryffindor",
        "house": "gryffindor",
        "type": "founder",
        "quidditch": null,
        "deathEater": null
    },
    {
        "name": "Elphias Doge",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null
    }
]



var profileInfo = '';
var deathEater = '';
var quidditch = '';

for (var i = 0; i < people.length; i++) {
    if(people[i].deathEater) {
        deathEater = 'death-eater';
    }
    if (people[i].quidditch) { 
        quidditch = 'quidditch';
    }
    profileInfo += '<div class="character ' + people[i].house + ' ' + people[i].type + ' ' + deathEater + ' ' + quidditch + '"><div class="wrapper"><p class="circle"></p>';
    profileInfo += '</div><p class="name">' + people[i].name + '</p></div>';

    deathEater = '';
    quidditch = '';
}

$('#container').append(profileInfo);
