const people = [
    {
        "name": "Harry Potter",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 18956
    },
    {
        "name": "Ron Weasley",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 6464
    },
    {
        "name": "Hermione Granger",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 5486
    },
    {
        "name": "Albus Dumbledore",
        "house": "gryffindor",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 2421
    },
    {
        "name": "Rubeus Hagrid",
        "house": "gryffindor",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 2024
    },
    {
        "name": "Severus Snape",
        "house": "slytherin",
        "type": "professor",
        "quidditch": null,
        "deathEater": true,
        "mentions": 1956
    },
    {
        "name": "Voldemort",
        "house": "slytherin",
        "type": "",
        "quidditch": null,
        "deathEater": true,
        "mentions": 1797
    },
    {
        "name": "Sirius Black",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 1471
    },
    {
        "name": "Draco Malfoy",
        "house": "slytherin",
        "type": "student",
        "quidditch": true,
        "deathEater": true,
        "mentions": 1198
    },
    {
        "name": "Fred Weasley",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 920
    },
    {
        "name": "Remus Lupin",
        "house": "gryffindor",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 864
    },
    {
        "name": "George Weasley",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 821
    },
    {
        "name": "Neville Longbottom",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 810
    },
    {
        "name": "Arthur Weasley",
        "house": "gryffindor",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null,
        "mentions": 780
    },
    {
        "name": "Ginny Weasley",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 771
    },
    {
        "name": "Minerva McGonagall",
        "house": "gryffindor",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 770
    },
    {
        "name": "Molly Weasley",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 722
    },
    {
        "name": "Dolores Umbridge",
        "house": "slytherin",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 637
    },
    {
        "name": "Alastor \"Mad Eye\" Moody",
        "house": "none",
        "type": "auror",
        "quidditch": null,
        "deathEater": null,
        "mentions": 583
    },
    {
        "name": "Vernon Dursley",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null,
        "mentions": 530
    },
    {
        "name": "Cornelius Fudge",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null,
        "mentions": 493
    },
    {
        "name": "Peter Pettigrew",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": true,
        "mentions": 486
    },
    {
        "name": "Dobby",
        "house": "none",
        "type": "house-elf",
        "quidditch": null,
        "deathEater": null,
        "mentions": 469
    },
    {
        "name": "Dudley Dursley",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null,
        "mentions": 467
    },
    {
        "name": "Horace Slughorn",
        "house": "slytherin",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 432
    },
    {
        "name": "Percy Weasley",
        "house": "gryffindor",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null,
        "mentions": 426
    },
    {
        "name": "Luna Lovegood",
        "house": "ravenclaw",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 356
    },
    {
        "name": "Cedric Diggory",
        "house": "hufflepuff",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 353
    },
    {
        "name": "Petunia Dursley",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null,
        "mentions": 314
    },
    {
        "name": "Kreacher",
        "house": "none",
        "type": "house-elf",
        "quidditch": null,
        "deathEater": null,
        "mentions": 312
    },
    {
        "name": "Bill Weasley",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 302
    },
    {
        "name": "Bartemius Crouch, Sr.",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": true,
        "mentions": 295
    },
    {
        "name": "Argus Filch",
        "house": "none",
        "type": "staff",
        "quidditch": null,
        "deathEater": null,
        "mentions": 288
    },
    {
        "name": "Viktor Krum",
        "house": "none",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 277
    },
    {
        "name": "Gilderoy Lockhart",
        "house": "ravenclaw",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 262
    },
    {
        "name": "Sybill Trelawney",
        "house": "ravenclaw",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 262
    },
    {
        "name": "Fleur Delacour",
        "house": "none",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 258
    },
    {
        "name": "Lucius Malfoy",
        "house": "slytherin",
        "type": "",
        "quidditch": null,
        "deathEater": true,
        "mentions": 249
    },
    {
        "name": "Ludo Bagman",
        "house": "",
        "type": "ministry",
        "quidditch": true,
        "deathEater": null,
        "mentions": 246
    },
    {
        "name": "Nymphadora Tonks",
        "house": "hufflepuff",
        "type": "auror",
        "quidditch": null,
        "deathEater": null,
        "mentions": 242
    },
    {
        "name": "Gregory Goyle",
        "house": "slytherin",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 228
    },
    {
        "name": "Vincent Crabbe",
        "house": "slytherin",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 224
    },
    {
        "name": "Bellatrix Lestrange",
        "house": "slytherin",
        "type": "",
        "quidditch": null,
        "deathEater": true,
        "mentions": 220
    },
    {
        "name": "Cho Chang",
        "house": "ravenclaw",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 215
    },
    {
        "name": "Dean Thomas",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 212
    },
    {
        "name": "Oliver Wood",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 208
    },
    {
        "name": "Hedwig",
        "house": "none",
        "type": "pet",
        "quidditch": null,
        "deathEater": null,
        "mentions": 204
    },
    {
        "name": "James Potter",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 190
    },
    {
        "name": "Rita Skeeter",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 188
    },
    {
        "name": "Seamus Finnigan",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 179
    },
    {
        "name": "Igor Karkaroff",
        "house": "none",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 165
    },
    {
        "name": "Peeves",
        "house": "none",
        "type": "ghost",
        "quidditch": null,
        "deathEater": null,
        "mentions": 164
    },
    {
        "name": "Winky",
        "house": "none",
        "type": "house-elf",
        "quidditch": null,
        "deathEater": null,
        "mentions": 162
    },
    {
        "name": "Crookshanks",
        "house": "none",
        "type": "pet",
        "quidditch": null,
        "deathEater": null,
        "mentions": 162
    },
    {
        "name": "Poppy Pomfrey",
        "house": "none",
        "type": "staff",
        "quidditch": null,
        "deathEater": null,
        "mentions": 156
    },
    {
        "name": "Rufus Scrimgeour",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null,
        "mentions": 153
    },
    {
        "name": "Mundungus Fletcher",
        "house": "",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 147
    },
    {
        "name": "Lavender Brown",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 141
    },
    {
        "name": "Griphook",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 140
    },
    {
        "name": "Filius Flitwick",
        "house": "ravenclaw",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 140
    },
    {
        "name": "Buckbeak",
        "house": "",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 136
    },
    {
        "name": "Angelina Johnson",
        "house": "gryffindor",
        "type": "",
        "quidditch": true,
        "deathEater": null,
        "mentions": 135
    },
    {
        "name": "Parvati Patil",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 133
    },
    {
        "name": "Lily Potter",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 127
    },
    {
        "name": "Xenophilius Lovegood",
        "house": "ravenclaw",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 124
    },
    {
        "name": "Nearly Headless Nick",
        "house": "",
        "type": "ghost",
        "quidditch": null,
        "deathEater": null,
        "mentions": 123
    },
    {
        "name": "Quirinus Quirrell",
        "house": "ravenclaw",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 122
    },
    {
        "name": "Moaning Myrtle",
        "house": "ravenclaw",
        "type": "ghost",
        "quidditch": null,
        "deathEater": null,
        "mentions": 119
    },
    {
        "name": "Garrick Ollivander",
        "house": "ravenclaw",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 117
    },
    {
        "name": "Katie Bell",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 116
    },
    {
        "name": "Olympe Maxime",
        "house": "",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 112
    },
    {
        "name": "Charlie Weasley",
        "house": "gryffindor",
        "type": "",
        "quidditch": true,
        "deathEater": null,
        "mentions": 110
    },
    {
        "name": "Lee Jordan",
        "house": "gryffindor",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 109
    },
    {
        "name": "Kingsley Shacklebolt",
        "house": "",
        "type": "auror",
        "quidditch": null,
        "deathEater": null,
        "mentions": 106
    },
    {
        "name": "Fang",
        "house": "",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 105
    },
    {
        "name": "Fenrir Greyback",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 102
    },
    {
        "name": "Ernie MacMillan",
        "house": "hufflepuff",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 92
    },
    {
        "name": "Pomona Sprout",
        "house": "hufflepuff",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 90
    },
    {
        "name": "Phineas Nigellus Black",
        "house": "slytherin",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 89
    },
    {
        "name": "Narcissa Malfoy",
        "house": "slytherin",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 89
    },
    {
        "name": "Stan Shunpike",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 85
    },
    {
        "name": "Aberforth Dumbledore",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 79
    },
    {
        "name": "Bathilda Bagshot",
        "house": "none",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 77
    },
    {
        "name": "Colin Creevey",
        "house": "gryffindor",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 77
    },
    {
        "name": "Amos Diggory",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null,
        "mentions": 76
    },
    {
        "name": "Firenze",
        "house": "none",
        "type": "professor",
        "quidditch": null,
        "deathEater": null,
        "mentions": 75
    },
    {
        "name": "Grawp",
        "house": "none",
        "type": "magical-creature",
        "quidditch": null,
        "deathEater": null,
        "mentions": 75
    },
    {
        "name": "Marge Dursley",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null,
        "mentions": 73
    },
    {
        "name": "Gellert Grindelwald",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 73
    },
    {
        "name": "Cormac McLaggen",
        "house": "gryffindor",
        "type": "student",
        "quidditch": true,
        "deathEater": null,
        "mentions": 73
    },
    {
        "name": "The Fat Lady",
        "house": "gryffindor",
        "type": "portrait",
        "quidditch": null,
        "deathEater": null,
        "mentions": 72
    },
    {
        "name": "Salazar Slytherin",
        "house": "slytherin",
        "type": "founder",
        "quidditch": null,
        "deathEater": null,
        "mentions": 70
    },
    {
        "name": "Marvolo Gaunt",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 68
    },
    {
        "name": "Bob Ogden",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null,
        "mentions": 68
    },
    {
        "name": "Pansy Parkinson",
        "house": "slytherin",
        "type": "student",
        "quidditch": null,
        "deathEater": null,
        "mentions": 68
    },
    {
        "name": "Fawkes",
        "house": "none",
        "type": "magical-creature",
        "quidditch": null,
        "deathEater": null,
        "mentions": 64
    },
    {
        "name": "Frank Bryce",
        "house": "none",
        "type": "muggle",
        "quidditch": null,
        "deathEater": null,
        "mentions": 63
    },
    {
        "name": "Morfin Gaunt",
        "house": "none",
        "type": "",
        "quidditch": null,
        "deathEater": null,
        "mentions": 63
    },
    {
        "name": "Godric Gryffindor",
        "house": "gryffindor",
        "type": "founder",
        "quidditch": null,
        "deathEater": null,
        "mentions": 63
    },
    {
        "name": "Elphias Doge",
        "house": "none",
        "type": "ministry",
        "quidditch": null,
        "deathEater": null,
        "mentions": 62
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
    profileInfo += '</div><p class="name">' + people[i].name + '</p><ul class="data"><li>' + people[i].mentions + '</li></ul></div>';

    deathEater = '';
    quidditch = '';
}

$('#container').append(profileInfo);

// Hide key
$('.key').on('click',function(event){
    console.log('hello');
})
