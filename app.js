// Gryffindor - red
// Ravenclaw House - blue
// Slytherin House - green
// Helga Hufflepuff - gold
// Magical Creature - orange
// Muggle - purple
// No House - pink
// Unknown - gray

const people = [
    {
        "Name": "Harry Potter",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Ron Weasley",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Hermione Granger",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Albus Dumbledore",
        "House": "Gryffindor",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Rubeus Hagrid",
        "House": "Gryffindor",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Severus Snape",
        "House": "Slytherin",
        "Type": "Professor",
        "Quidditch": "",
        "DeathEater": "TRUE"
    },
    {
        "Name": "Voldemort",
        "House": "Slytherin",
        "Type": "Baddie",
        "Quidditch": "",
        "DeathEater": "TRUE"
    },
    {
        "Name": "Sirius Black",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Draco Malfoy",
        "House": "Slytherin",
        "Type": "Student",
        "Quidditch": "TRUE",
        "DeathEater": "TRUE"
    },
    {
        "Name": "Fred Weasley",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Remus Lupin",
        "House": "Gryffindor",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "George Weasley",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Neville Longbottom",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Arthur Weasley",
        "House": "Gryffindor",
        "Type": "Ministry",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Ginny Weasley",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Minerva McGonagall",
        "House": "Gryffindor",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Molly Weasley",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Dolores Umbridge",
        "House": "Slytherin",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Alastor \"Mad Eye\" Moody",
        "House": "None",
        "Type": "Auror",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Vernon Dursley",
        "House": "None",
        "Type": "Muggle",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Cornelius Fudge",
        "House": "None",
        "Type": "Ministry",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Peter Pettigrew",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "",
        "DeathEater": "TRUE"
    },
    {
        "Name": "Dobby",
        "House": "None",
        "Type": "House Elf",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Dudley Dursley",
        "House": "None",
        "Type": "Muggle",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Horace Slughorn",
        "House": "Slytherin",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Percy Weasley",
        "House": "Gryffindor",
        "Type": "Ministry",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Luna Lovegood",
        "House": "Ravenclaw",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Cedric Diggory",
        "House": "Hufflepuff",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Petunia Dursley",
        "House": "None",
        "Type": "Muggle",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Kreacher",
        "House": "None",
        "Type": "House Elf",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Bill Weasley",
        "House": "Gryffindor",
        "Type": "Gringotts",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Bartemius Crouch, Sr.",
        "House": "None",
        "Type": "Ministry",
        "Quidditch": "",
        "DeathEater": "TRUE"
    },
    {
        "Name": "Argus Filch",
        "House": "",
        "Type": "Staff",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Viktor Krum",
        "House": "None",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Gilderoy Lockhart",
        "House": "Ravenclaw",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Sybill Trelawney",
        "House": "Ravenclaw",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Fleur Delacour",
        "House": "None",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Lucius Malfoy",
        "House": "Slytherin",
        "Type": "",
        "Quidditch": "",
        "DeathEater": "TRUE"
    },
    {
        "Name": "Ludo Bagman",
        "House": "",
        "Type": "Ministry",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Nymphadora Tonks",
        "House": "Hufflepuff",
        "Type": "Auror",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Gregory Goyle",
        "House": "Slytherin",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Vincent Crabbe",
        "House": "Slytherin",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Bellatrix Lestrange",
        "House": "Slytherin",
        "Type": "",
        "Quidditch": "",
        "DeathEater": "TRUE"
    },
    {
        "Name": "Cho Chang",
        "House": "Ravenclaw",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Dean Thomas",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Oliver Wood",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Hedwig",
        "House": "None",
        "Type": "Pet",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "James Potter",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Rita Skeeter",
        "House": "None",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Seamus Finnigan",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Igor Karkaroff",
        "House": "None",
        "Type": "Professor",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Peeves",
        "House": "None",
        "Type": "Ghost",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Winky",
        "House": "None",
        "Type": "House Elf",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Crookshanks",
        "House": "None",
        "Type": "Pet",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Poppy Pomfrey",
        "House": "None",
        "Type": "Staff",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Rufus Scrimgeour",
        "House": "None",
        "Type": "Ministry",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Mundungus Fletcher",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Lavender Brown",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Griphook",
        "House": "None",
        "Type": "Gringotts",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Filius Flitwick",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Buckbeak",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Angelina Johnson",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Parvati Patil",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Lily Potter",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Xenophilius Lovegood",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Nearly Headless Nick",
        "House": "",
        "Type": "Ghost",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Quirinus Quirrell",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Moaning Myrtle",
        "House": "Ravenclaw",
        "Type": "Ghost",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Garrick Ollivander",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Katie Bell",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Olympe Maxime",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Charlie Weasley",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "Lee Jordan",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Kingsley Shacklebolt",
        "House": "",
        "Type": "Auror",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Fang",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Fenrir Greyback",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Ernie MacMillan",
        "House": "Hufflepuff",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Pomona Sprout",
        "House": "Hufflepuff",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Phineas Nigellus Black",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Narcissa Malfoy",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Stan Shunpike",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Aberforth Dumbledore",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Bathilda Bagshot",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Colin Creevey",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Amos Diggory",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Firenze",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Grawp",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Marge Dursley",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Gellert Grindelwald",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Cormac McLaggen",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "TRUE",
        "Death Eater": ""
    },
    {
        "Name": "The Fat Lady",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Salazar Slytherin",
        "House": "Slytherin",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Marvolo Gaunt",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Bob Ogden",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Pansy Parkinson",
        "House": "Slytherin",
        "Type": "Student",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Fawkes",
        "House": "None",
        "Type": "Magical Creature",
        "Quidditch": "",
        "Death Eater": ""
    },
    {
        "Name": "Frank Bryce",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "DeathEater": ""
    },
    {
        "Name": "Morfin Gaunt",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "DeathEater": ""
    },
    {
        "Name": "Godric Gryffindor",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": "",
        "DeathEater": ""
    },
    {
        "Name": "Elphias Doge",
        "House": "",
        "Type": "",
        "Quidditch": "",
        "DeathEater": ""
    }
]



var profileInfo = '';

for (var i = 0; i < people.length; i++) {
    profileInfo += '<div class="character ' + people[i].House + ' ' + people[i].Type + '"><div class="wrapper"><p class="circle"></p>';
    if (people[i].Quidditch) {
        profileInfo += '<p class="quidditch"></p>';
    }
    if (people[i].DeathEater) {
        profileInfo += '<p class="death-eater"></p>';
    }
    profileInfo += '</div><p class="name">' + people[i].Name + '</p></div>';

}

$('#container').append(profileInfo);
