var letterStr = ``;
var nameString = ``;

const response = {
    "status": {
      "code": "200",
      "name": "ok",
      "description": "success",
      "returnedIn": "1.2538909912109E-5 ms"
    },
    "data": [
      {
        "id": "25",
        "lastName": "Allsupdd",
        "firstName": "Luciendd",
        "jobTitle": "dd",
        "email": "lallsupo@goo.ne.jpdd",
        "department": "Product Management",
        "location": "Paris"
      },
      {
        "id": "60",
        "lastName": "Andrassy",
        "firstName": "Talbot",
        "jobTitle": "",
        "email": "tandrassy1n@bigcartel.com",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "11",
        "lastName": "Audas",
        "firstName": "Theo",
        "jobTitle": "",
        "email": "taudasa@newsvine.com",
        "department": "Product Management",
        "location": "Paris"
      },
      {
        "id": "55",
        "lastName": "Banfield",
        "firstName": "Matthus",
        "jobTitle": "",
        "email": "mbanfield1i@angelfire.com",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "95",
        "lastName": "Baudi",
        "firstName": "Dulcie",
        "jobTitle": "",
        "email": "dbaudi2m@last.fm",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "71",
        "lastName": "Berthomieu",
        "firstName": "Ursola",
        "jobTitle": "",
        "email": "uberthomieu1y@un.org",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "21",
        "lastName": "Bickford",
        "firstName": "Gay",
        "jobTitle": "",
        "email": "gbickfordk@scientificamerican.com",
        "department": "Research and Development",
        "location": "Paris"
      },
      {
        "id": "38",
        "lastName": "Blonden",
        "firstName": "Warner",
        "jobTitle": "",
        "email": "wblonden11@spiegel.de",
        "department": "Business Development",
        "location": "Paris"
      },
      {
        "id": "77",
        "lastName": "Bolderstonedd",
        "firstName": "Stormied",
        "jobTitle": "dd",
        "email": "sbolderstone24@globo.comdd",
        "department": "Services",
        "location": "London"
      },
      {
        "id": "27",
        "lastName": "Bootes",
        "firstName": "Virge",
        "jobTitle": "",
        "email": "vbootesq@oracle.com",
        "department": "Sales",
        "location": "New York"
      },
      {
        "id": "44",
        "lastName": "Braidford",
        "firstName": "Dore",
        "jobTitle": "",
        "email": "dbraidford17@google.com.br",
        "department": "Accounting",
        "location": "Rome"
      },
      {
        "id": "36",
        "lastName": "Brewster",
        "firstName": "Ailis",
        "jobTitle": "",
        "email": "abrewsterz@businesswire.com",
        "department": "Product Management",
        "location": "Paris"
      },
      {
        "id": "42",
        "lastName": "Buss",
        "firstName": "Lanette",
        "jobTitle": "",
        "email": "lbuss15@51.la",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "50",
        "lastName": "Calbaithe",
        "firstName": "Jon",
        "jobTitle": "",
        "email": "jcalbaithe1d@netvibes.com",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "39",
        "lastName": "Canner",
        "firstName": "Melvyn",
        "jobTitle": "",
        "email": "mcanner12@eepurl.com",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "13",
        "lastName": "Carld",
        "firstName": "Leopoldd",
        "jobTitle": "d",
        "email": "lcarlc@paginegialle.itd",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "64",
        "lastName": "Christal",
        "firstName": "Kristine",
        "jobTitle": "",
        "email": "kchristal1r@behance.net",
        "department": "Training",
        "location": "Munich"
      },
      {
        "id": "84",
        "lastName": "Corner",
        "firstName": "Reagen",
        "jobTitle": "",
        "email": "rcorner2b@qq.com",
        "department": "Accounting",
        "location": "Rome"
      },
      {
        "id": "6",
        "lastName": "Cossam",
        "firstName": "Demetre",
        "jobTitle": "",
        "email": "dcossam5@washington.edu",
        "department": "Services",
        "location": "London"
      },
      {
        "id": "69",
        "lastName": "Crocombe",
        "firstName": "Vlad",
        "jobTitle": "",
        "email": "vcrocombe1w@mtv.com",
        "department": "Product Management",
        "location": "Paris"
      },
      {
        "id": "15",
        "lastName": "Cromer",
        "firstName": "Suzie",
        "jobTitle": "",
        "email": "scromere@imageshack.us",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "51",
        "lastName": "Darben",
        "firstName": "Emmery",
        "jobTitle": "",
        "email": "edarben1e@mapquest.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "98",
        "lastName": "de Cullip",
        "firstName": "Cherye",
        "jobTitle": "",
        "email": "cdecullip2p@loc.gov",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "75",
        "lastName": "Denge",
        "firstName": "Christina",
        "jobTitle": "",
        "email": "cdenge22@canalblog.com",
        "department": "Business Development",
        "location": "Paris"
      },
      {
        "id": "99",
        "lastName": "Deverall",
        "firstName": "Sinclare",
        "jobTitle": "",
        "email": "sdeverall2q@ow.ly",
        "department": "Research and Development",
        "location": "Paris"
      },
      {
        "id": "45",
        "lastName": "Di Franceshci",
        "firstName": "Lizabeth",
        "jobTitle": "",
        "email": "ldifranceshci18@mediafire.com",
        "department": "Training",
        "location": "Munich"
      },
      {
        "id": "56",
        "lastName": "Drance",
        "firstName": "Annadiana",
        "jobTitle": "",
        "email": "adrance1j@omniture.com",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "86",
        "lastName": "Dunbobbin",
        "firstName": "Christy",
        "jobTitle": "",
        "email": "cdunbobbin2d@feedburner.com",
        "department": "Training",
        "location": "Munich"
      },
      {
        "id": "33",
        "lastName": "Durling",
        "firstName": "Vern",
        "jobTitle": "",
        "email": "vdurlingw@goo.gl",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "4",
        "lastName": "Edgson",
        "firstName": "Aveline",
        "jobTitle": "",
        "email": "aedgson3@wikispaces.com",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "57",
        "lastName": "Fandrey",
        "firstName": "Rinaldo",
        "jobTitle": "",
        "email": "rfandrey1k@bbc.co.uk",
        "department": "Sales",
        "location": "New York"
      },
      {
        "id": "59",
        "lastName": "Fattorini",
        "firstName": "Lorrie",
        "jobTitle": "",
        "email": "lfattorini1m@geocities.jp",
        "department": "Support",
        "location": "Munich"
      },
      {
        "id": "19",
        "lastName": "Fintoph",
        "firstName": "Lay",
        "jobTitle": "",
        "email": "lfintophi@goo.gl",
        "department": "Accounting",
        "location": "Rome"
      },
      {
        "id": "20",
        "lastName": "Flinn",
        "firstName": "Moishe",
        "jobTitle": "",
        "email": "mflinnj@list-manage.com",
        "department": "Business Development",
        "location": "Paris"
      },
      {
        "id": "91",
        "lastName": "Fooks",
        "firstName": "Brendan",
        "jobTitle": "",
        "email": "bfooks2i@utexas.edu",
        "department": "Sales",
        "location": "New York"
      },
      {
        "id": "76",
        "lastName": "Fredi",
        "firstName": "Wilone",
        "jobTitle": "",
        "email": "wfredi23@gizmodo.com",
        "department": "Product Management",
        "location": "Paris"
      },
      {
        "id": "74",
        "lastName": "Gallone",
        "firstName": "Heida",
        "jobTitle": "",
        "email": "hgallone21@hostgator.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "80",
        "lastName": "Gaskal",
        "firstName": "Brittney",
        "jobTitle": "",
        "email": "bgaskal27@weather.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "40",
        "lastName": "Giampietro",
        "firstName": "Ryann",
        "jobTitle": "",
        "email": "rgiampietro13@theguardian.com",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "16",
        "lastName": "Gisbourn",
        "firstName": "Tracee",
        "jobTitle": "",
        "email": "tgisbournf@bloglines.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "29",
        "lastName": "Goulder",
        "firstName": "Vanya",
        "jobTitle": "",
        "email": "vgoulders@phoca.cz",
        "department": "Support",
        "location": "Munich"
      },
      {
        "id": "81",
        "lastName": "Gresty",
        "firstName": "Field",
        "jobTitle": "",
        "email": "fgresty28@networkadvertising.org",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "53",
        "lastName": "Hawkslee",
        "firstName": "Benjamin",
        "jobTitle": "",
        "email": "bhawkslee1g@hubpages.com",
        "department": "Product Management",
        "location": "Paris"
      },
      {
        "id": "1",
        "lastName": "Heffron",
        "firstName": "Robert",
        "jobTitle": "",
        "email": "rheffron0@ibm.com",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "132",
        "lastName": "hendricks",
        "firstName": "jimmy",
        "jobTitle": "boss",
        "email": "j@gmail.com",
        "department": "Services",
        "location": "London"
      },
      {
        "id": "67",
        "lastName": "Hessay",
        "firstName": "Gayleen",
        "jobTitle": "",
        "email": "ghessay1u@exblog.jp",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "26",
        "lastName": "Imlach",
        "firstName": "Jackelyn",
        "jobTitle": "",
        "email": "jimlachp@google.it",
        "department": "Accounting",
        "location": "Rome"
      },
      {
        "id": "88",
        "lastName": "Insley",
        "firstName": "Lissa",
        "jobTitle": "",
        "email": "linsley2f@friendfeed.com",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "83",
        "lastName": "Ivanyutin",
        "firstName": "Robena",
        "jobTitle": "",
        "email": "rivanyutin2a@mozilla.org",
        "department": "Sales",
        "location": "New York"
      },
      {
        "id": "41",
        "lastName": "Jefferys",
        "firstName": "Harwell",
        "jobTitle": "",
        "email": "hjefferys14@jimdo.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "100",
        "lastName": "Johncey",
        "firstName": "Shae",
        "jobTitle": "",
        "email": "sjohncey2r@bluehost.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "70",
        "lastName": "Joisce",
        "firstName": "Georgeanna",
        "jobTitle": "",
        "email": "gjoisce1x@google.com.au",
        "department": "Research and Development",
        "location": "Paris"
      },
      {
        "id": "12",
        "lastName": "Jolliss",
        "firstName": "Spense",
        "jobTitle": "",
        "email": "sjollissb@wufoo.com",
        "department": "Training",
        "location": "Munich"
      },
      {
        "id": "3",
        "lastName": "Kisbee",
        "firstName": "Vera",
        "jobTitle": "",
        "email": "vkisbee2@nih.gov",
        "department": "Sales",
        "location": "New York"
      },
      {
        "id": "18",
        "lastName": "Klassmann",
        "firstName": "Lin",
        "jobTitle": "",
        "email": "lklassmannh@indiatimes.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "2",
        "lastName": "Kovnot",
        "firstName": "Kris",
        "jobTitle": "",
        "email": "kkovnot1@google.nl",
        "department": "Sales",
        "location": "New York"
      },
      {
        "id": "87",
        "lastName": "Lansley",
        "firstName": "Winthrop",
        "jobTitle": "",
        "email": "wlansley2e@alibaba.com",
        "department": "Training",
        "location": "Munich"
      },
      {
        "id": "32",
        "lastName": "Lernihan",
        "firstName": "Mavis",
        "jobTitle": "",
        "email": "mlernihanv@netscape.com",
        "department": "Services",
        "location": "London"
      },
      {
        "id": "90",
        "lastName": "Liddyard",
        "firstName": "Cherianne",
        "jobTitle": "",
        "email": "cliddyard2h@com.com",
        "department": "Sales",
        "location": "New York"
      },
      {
        "id": "22",
        "lastName": "Lindback",
        "firstName": "Erik",
        "jobTitle": "",
        "email": "elindbackl@virginia.edu",
        "department": "Training",
        "location": "Munich"
      },
      {
        "id": "14",
        "lastName": "MacAllan",
        "firstName": "Barr",
        "jobTitle": "",
        "email": "bmacalland@github.com",
        "department": "Services",
        "location": "London"
      },
      {
        "id": "79",
        "lastName": "Mager",
        "firstName": "Nikolas",
        "jobTitle": "",
        "email": "nmager26@nifty.com",
        "department": "Services",
        "location": "London"
      },
      {
        "id": "28",
        "lastName": "Matasov",
        "firstName": "Rafferty",
        "jobTitle": "",
        "email": "rmatasovr@4shared.com",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "8",
        "lastName": "McAndrew",
        "firstName": "Crichton",
        "jobTitle": "",
        "email": "cmcandrew7@zdnet.com",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "10",
        "lastName": "McDougle",
        "firstName": "Glen",
        "jobTitle": "",
        "email": "gmcdougle9@meetup.com",
        "department": "Research and Development",
        "location": "Paris"
      },
      {
        "id": "7",
        "lastName": "McGavigan",
        "firstName": "Annabela",
        "jobTitle": "",
        "email": "amcgavigan6@wp.com",
        "department": "Legal",
        "location": "London"
      },
      {
        "id": "94",
        "lastName": "McGettrick",
        "firstName": "Chadd",
        "jobTitle": "",
        "email": "cmcgettrick2l@simplemachines.org",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "30",
        "lastName": "McGonagle",
        "firstName": "Bonita",
        "jobTitle": "",
        "email": "bmcgonaglet@microsoft.com",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "72",
        "lastName": "McKirdy",
        "firstName": "Mair",
        "jobTitle": "",
        "email": "mmckirdy1z@ovh.net",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "34",
        "lastName": "Minchi",
        "firstName": "Myles",
        "jobTitle": "",
        "email": "mminchix@smugmug.com",
        "department": "Product Management",
        "location": "Paris"
      },
      {
        "id": "96",
        "lastName": "Mowbray",
        "firstName": "Barnebas",
        "jobTitle": "",
        "email": "bmowbray2n@cbslocal.com",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "62",
        "lastName": "Mullineux",
        "firstName": "Pancho",
        "jobTitle": "",
        "email": "pmullineux1p@webmd.com",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "66",
        "lastName": "Napier",
        "firstName": "Aggy",
        "jobTitle": "",
        "email": "anapier1t@sciencedirect.com",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "61",
        "lastName": "O'Mannion",
        "firstName": "Cindi",
        "jobTitle": "",
        "email": "comannion1o@ameblo.jp",
        "department": "Accounting",
        "location": "Rome"
      },
      {
        "id": "63",
        "lastName": "Peyntue",
        "firstName": "Cynthy",
        "jobTitle": "",
        "email": "cpeyntue1q@amazon.co.jp",
        "department": "Research and Development",
        "location": "Paris"
      },
      {
        "id": "9",
        "lastName": "Plain",
        "firstName": "Cordula",
        "jobTitle": "",
        "email": "cplain8@google.ca",
        "department": "Services",
        "location": "London"
      },
      {
        "id": "78",
        "lastName": "Pool",
        "firstName": "Darryl",
        "jobTitle": "",
        "email": "dpool25@vistaprint.com",
        "department": "Accounting",
        "location": "Rome"
      },
      {
        "id": "47",
        "lastName": "Quail",
        "firstName": "Duff",
        "jobTitle": "",
        "email": "dquail1a@vimeo.com",
        "department": "Support",
        "location": "Munich"
      },
      {
        "id": "65",
        "lastName": "Reboulet",
        "firstName": "Dniren",
        "jobTitle": "",
        "email": "dreboulet1s@360.cn",
        "department": "Product Management",
        "location": "Paris"
      },
      {
        "id": "43",
        "lastName": "Reddington",
        "firstName": "Lissie",
        "jobTitle": "",
        "email": "lreddington16@w3.org",
        "department": "Support",
        "location": "Munich"
      },
      {
        "id": "89",
        "lastName": "Risebarer",
        "firstName": "Shell",
        "jobTitle": "",
        "email": "srisebarer2g@patch.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "24",
        "lastName": "Rooksby",
        "firstName": "Barbara-anne",
        "jobTitle": "",
        "email": "brooksbyn@issuu.com",
        "department": "Business Development",
        "location": "Paris"
      },
      {
        "id": "73",
        "lastName": "Runnalls",
        "firstName": "Erma",
        "jobTitle": "",
        "email": "erunnalls20@spiegel.de",
        "department": "Training",
        "location": "Munich"
      },
      {
        "id": "49",
        "lastName": "Schimaschke",
        "firstName": "Nevile",
        "jobTitle": "",
        "email": "nschimaschke1c@hexun.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "46",
        "lastName": "Sharland",
        "firstName": "Felic",
        "jobTitle": "",
        "email": "fsharland19@myspace.com",
        "department": "Business Development",
        "location": "Paris"
      },
      {
        "id": "48",
        "lastName": "Shivell",
        "firstName": "Brendis",
        "jobTitle": "",
        "email": "bshivell1b@un.org",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "68",
        "lastName": "Snoden",
        "firstName": "Cull",
        "jobTitle": "",
        "email": "csnoden1v@so-net.ne.jp",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "54",
        "lastName": "Speer",
        "firstName": "Myrle",
        "jobTitle": "",
        "email": "mspeer1h@tripod.com",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "17",
        "lastName": "St. Quintin",
        "firstName": "Taylor",
        "jobTitle": "",
        "email": "tstquinting@chronoengine.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "58",
        "lastName": "Standering",
        "firstName": "Roanna",
        "jobTitle": "",
        "email": "rstandering1l@cocolog-nifty.com",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "85",
        "lastName": "Sulter",
        "firstName": "Eveleen",
        "jobTitle": "",
        "email": "esulter2c@nature.com",
        "department": "Research and Development",
        "location": "Paris"
      },
      {
        "id": "92",
        "lastName": "Tace",
        "firstName": "Edmund",
        "jobTitle": "",
        "email": "etace2j@hatena.ne.jp",
        "department": "Support",
        "location": "Munich"
      },
      {
        "id": "93",
        "lastName": "Tomasini",
        "firstName": "Ki",
        "jobTitle": "",
        "email": "ktomasini2k@cnbc.com",
        "department": "Engineering",
        "location": "Rome"
      },
      {
        "id": "82",
        "lastName": "Tremoulet",
        "firstName": "Martina",
        "jobTitle": "",
        "email": "mtremoulet29@sciencedaily.com",
        "department": "Marketing",
        "location": "New York"
      },
      {
        "id": "37",
        "lastName": "Tute",
        "firstName": "Rahal",
        "jobTitle": "",
        "email": "rtute10@pinterest.com",
        "department": "Research and Development",
        "location": "Paris"
      },
      {
        "id": "31",
        "lastName": "Whaley",
        "firstName": "Allx",
        "jobTitle": "",
        "email": "awhaleyu@bbb.org",
        "department": "Human Resources",
        "location": "London"
      },
      {
        "id": "52",
        "lastName": "Whitesel",
        "firstName": "Staford",
        "jobTitle": "",
        "email": "swhitesel1f@nasa.gov",
        "department": "Research and Development",
        "location": "Paris"
      },
      {
        "id": "5",
        "lastName": "Wittke",
        "firstName": "Bertie",
        "jobTitle": "",
        "email": "bwittke4@yahoo.com",
        "department": "Legal",
        "location": "London"
      }
    ]
  }

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
letters.forEach(letter => {
    console.log(letter)

        nameString += `
        <div class="row m-0">
    
            <h4 class="first-letters p-3 m-0 rounded-2 letter">${letter}</h4>
        
    
        </div>`;
       

  

response.data.forEach(person => {
    if(person.firstName.charAt(0) === letter){

    console.log(person.firstName);
    nameString += `<div class="row m-0 name mb-2 mt-2">
    <p class="m-0 p-3">${letter}${person.lastName[0]} <span class="d-inline-block ms-4 name">${person.firstName} ${person.lastName}</span></p>

</div>
`;
}
})})

$('.mobile-contact-display').html(nameString);