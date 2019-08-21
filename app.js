const people = [
    {
        "Name": "Harry Potter",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": true
    },
    {
        "Name": "Ron Weasley",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": true
    },
    {
        "Name": "Hermione Granger",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Albus Dumbledore",
        "House": "Gryffindor",
        "Type": "Professor",
        "Quidditch": null
    },
    {
        "Name": "Rubeus Hagrid",
        "House": "Gryffindor",
        "Type": "Professor",
        "Quidditch": null
    },
    {
        "Name": "Severus Snape",
        "House": "Slytherin",
        "Type": "Professor",
        "Quidditch": null
    },
    {
        "Name": "Voldemort",
        "House": "Slytherin",
        "Type": "Villan",
        "Quidditch": null
    },
    {
        "Name": "Sirius Black",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Draco Malfoy",
        "House": "Slytherin",
        "Type": "Student",
        "Quidditch": true
    },
    {
        "Name": "Fred Weasley",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Remus Lupin",
        "House": "Gryffindor",
        "Type": "Professor",
        "Quidditch": null
    },
    {
        "Name": "George Weasley",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Neville Longbottom",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Arthur Weasley",
        "House": "Gryffindor",
        "Type": "Ministry",
        "Quidditch": null
    },
    {
        "Name": "Ginny Weasley",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Minerva McGonagall",
        "House": "Gryffindor",
        "Type": "Professor",
        "Quidditch": null
    },
    {
        "Name": "Molly Weasley",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Dolores Umbridge",
        "House": "Slytherin",
        "Type": "Professor",
        "Quidditch": null
    },
    {
        "Name": "Alastor \"Mad Eye\" Moody",
        "House": "None",
        "Type": "Auror",
        "Quidditch": null
    },
    {
        "Name": "Vernon Dursley",
        "House": "None",
        "Type": "Muggle",
        "Quidditch": null
    },
    {
        "Name": "Cornelius Fudge",
        "House": "None",
        "Type": "Ministry",
        "Quidditch": null
    },
    {
        "Name": "Peter Pettigrew",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Dobby",
        "House": "None",
        "Type": "House Elf",
        "Quidditch": null
    },
    {
        "Name": "Dudley Dursley",
        "House": "None",
        "Type": "Muggle",
        "Quidditch": null
    },
    {
        "Name": "Horace Slughorn",
        "House": "Slytherin",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Percy Weasley",
        "House": "Gryffindor",
        "Type": "Ministry",
        "Quidditch": null
    },
    {
        "Name": "Luna Lovegood",
        "House": "Ravenclaw",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Cedric Diggory",
        "House": "Hufflepuff",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Petunia Dursley",
        "House": "None",
        "Type": "Muggle",
        "Quidditch": null
    },
    {
        "Name": "Kreacher",
        "House": "None",
        "Type": "House Elf",
        "Quidditch": null
    },
    {
        "Name": "Bill Weasley",
        "House": "Gryffindor",
        "Type": "Gringotts",
        "Quidditch": null
    },
    {
        "Name": "Bartemius Crouch, Sr.",
        "House": "None",
        "Type": "Ministry",
        "Quidditch": null
    },
    {
        "Name": "Argus Filch",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Viktor Krum",
        "House": "None",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Gilderoy Lockhart",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Sybill Trelawney",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Fleur Delacour",
        "House": "None",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Lucius Malfoy",
        "House": "Slytherin",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Ludo Bagman",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Nymphadora Tonks",
        "House": "Hufflepuff",
        "Type": "Auror",
        "Quidditch": null
    },
    {
        "Name": "Gregory Goyle",
        "House": "Slytherin",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Vincent Crabbe",
        "House": "Slytherin",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Bellatrix Lestrange",
        "House": "Slytherin",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Cho Chang",
        "House": "Ravenclaw",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Dean Thomas",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Oliver Wood",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": true
    },
    {
        "Name": "Hedwig",
        "House": "None",
        "Type": "Pet",
        "Quidditch": null
    },
    {
        "Name": "James Potter",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Rita Skeeter",
        "House": "None",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Seamus Finnigan",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Igor Karkaroff",
        "House": "None",
        "Type": "Professor",
        "Quidditch": null
    },
    {
        "Name": "Peeves",
        "House": "None",
        "Type": "Ghost",
        "Quidditch": null
    },
    {
        "Name": "Winky",
        "House": "None",
        "Type": "House Elf",
        "Quidditch": null
    },
    {
        "Name": "Crookshanks",
        "House": "None",
        "Type": "Pet",
        "Quidditch": null
    },
    {
        "Name": "Poppy Pomfrey",
        "House": "None",
        "Type": "Staff",
        "Quidditch": null
    },
    {
        "Name": "Rufus Scrimgeour",
        "House": "None",
        "Type": "Ministry",
        "Quidditch": null
    },
    {
        "Name": "Mundungus Fletcher",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Lavender Brown",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Griphook",
        "House": "None",
        "Type": "Gringotts",
        "Quidditch": null
    },
    {
        "Name": "Filius Flitwick",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Buckbeak",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Angelina Johnson",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Parvati Patil",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Lily Potter",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Xenophilius Lovegood",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Nearly Headless Nick",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Quirinus Quirrell",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Moaning Myrtle",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Garrick Ollivander",
        "House": "Ravenclaw",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Katie Bell",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Olympe Maxime",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Charlie Weasley",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": true
    },
    {
        "Name": "Lee Jordan",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Kingsley Shacklebolt",
        "House": "",
        "Type": "Auror",
        "Quidditch": null
    },
    {
        "Name": "Fang",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Fenrir Greyback",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Ernie MacMillan",
        "House": "Hufflepuff",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Pomona Sprout",
        "House": "Hufflepuff",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Phineas Nigellus Black",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Narcissa Malfoy",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Stan Shunpike",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Aberforth Dumbledore",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Bathilda Bagshot",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Colin Creevey",
        "House": "Gryffindor",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Amos Diggory",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Firenze",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Grawp",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Marge Dursley",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Gellert Grindelwald",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Cormac McLaggen",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "The Fat Lady",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Salazar Slytherin",
        "House": "Slytherin",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Marvolo Gaunt",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Bob Ogden",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Pansy Parkinson",
        "House": "Slytherin",
        "Type": "Student",
        "Quidditch": null
    },
    {
        "Name": "Fawkes",
        "House": "None",
        "Type": "Magical Creature",
        "Quidditch": null
    },
    {
        "Name": "Frank Bryce",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Morfin Gaunt",
        "House": "",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Godric Gryffindor",
        "House": "Gryffindor",
        "Type": "",
        "Quidditch": null
    },
    {
        "Name": "Elphias Doge",
        "House": "",
        "Type": "",
        "Quidditch": null
    }
]



var profileInfo = '';

for (var i = 0; i < people.length; i++) {
    profileInfo += '<div class="character"><p class="circle ' + people[i].House + ' ' + people[i].Type + '"></p>';
    if (people[i].Quidditch) {
        profileInfo += '<p class="quidditch"></p>';
    }
    profileInfo += '<p class="name">' + people[i].Name + '</p></div>';

}

$('#container').append(profileInfo);
