export interface Country {
  country: string;
  latitude: number;
  longitude: number;
  regions: string[];
}

export const countries: Country[] = [
  {
    country: "Benin",
    latitude: 9.3077,
    longitude: 2.3158,
    regions: [
      "Alibori",
      "Atakora",
      "Atlantique",
      "Borgou",
      "Collines",
      "Donga",
      "Kouffo",
      "Littoral",
      "Mono",
      "Ouémé",
      "Plateau",
      "Zou",
    ],
  },
  {
    country: "Burkina Faso",
    latitude: 12.2383,
    longitude: -1.5616,
    regions: [
      "Boucle du Mouhoun",
      "Cascades",
      "Centre",
      "Centre-Est",
      "Centre-Nord",
      "Centre-Ouest",
      "Centre-Sud",
      "Est",
      "Hauts-Bassins",
      "Nord",
      "Plateau-Central",
      "Sahel",
      "Sud-Ouest",
    ],
  },
  {
    country: "Cape Verde",
    latitude: 16.5388,
    longitude: -23.0418,
    regions: ["Barlavento Islands", "Sotavento Islands"],
  },
  {
    country: "Gambia",
    latitude: 13.4432,
    longitude: -15.3101,
    regions: [
      "Banjul",
      "Central River",
      "Lower River",
      "North Bank",
      "Upper River",
      "West Coast",
    ],
  },
  {
    country: "Ghana",
    latitude: 7.9465,
    longitude: -1.0232,
    regions: [
      "Ashanti",
      "Brong-Ahafo",
      "Central",
      "Eastern",
      "Greater Accra",
      "Northern",
      "Oti",
      "Savannah",
      "North East",
      "Upper East",
      "Upper West",
      "Volta",
      "Western",
      "Western North",
      "Bono",
      "Ahafo",
    ],
  },
  {
    country: "Guinea",
    latitude: 9.9456,
    longitude: -9.6966,
    regions: [
      "Boke",
      "Conakry",
      "Faranah",
      "Kankan",
      "Kindia",
      "Labe",
      "Mamou",
      "Nzerekore",
    ],
  },
  {
    country: "Guinea-Bissau",
    latitude: 11.8037,
    longitude: -15.1804,
    regions: [
      "Bafata",
      "Biombo",
      "Bissau",
      "Bolama-Bijagos",
      "Cacheu",
      "Gabu",
      "Oio",
      "Quinara",
      "Tombali",
    ],
  },
  {
    country: "Ivory Coast",
    latitude: 7.54,
    longitude: -5.5471,
    regions: [
      "Agnéby",
      "Bafing",
      "Bas-Sassandra",
      "Denguélé",
      "Gôh-Djiboua",
      "Lacs",
      "Lagunes",
      "Montagnes",
      "Sassandra-Marahoué",
      "Savanes",
      "Vallée du Bandama",
      "Worodougou",
      "Zanzan",
    ],
  },
  {
    country: "Liberia",
    latitude: 6.4281,
    longitude: -9.4295,
    regions: [
      "Bomi",
      "Bong",
      "Gbarpolu",
      "Grand Bassa",
      "Grand Cape Mount",
      "Grand Gedeh",
      "Grand Kru",
      "Lofa",
      "Margibi",
      "Maryland",
      "Montserrado",
      "Nimba",
      "River Cess",
      "River Gee",
      "Sinoe",
    ],
  },
  {
    country: "Mali",
    latitude: 17.5707,
    longitude: -3.9962,
    regions: [
      "Bamako",
      "Gao",
      "Kayes",
      "Kidal",
      "Koulikoro",
      "Mopti",
      "Segou",
      "Sikasso",
      "Tombouctou",
    ],
  },
  {
    country: "Mauritania",
    latitude: 21.0079,
    longitude: -10.9408,
    regions: [
      "Adrar",
      "Assaba",
      "Brakna",
      "Dakhlet Nouadhibou",
      "Gorgol",
      "Guidimaka",
      "Hodh Ech Chargui",
      "Hodh El Gharbi",
      "Inchiri",
      "Nouakchott",
      "Tagant",
      "Tiris Zemmour",
      "Trarza",
    ],
  },
  {
    country: "Niger",
    latitude: 17.6078,
    longitude: 8.0817,
    regions: [
      "Agadez",
      "Diffa",
      "Dosso",
      "Maradi",
      "Niamey",
      "Tahoua",
      "Tillabéri",
      "Zinder",
    ],
  },
  {
    country: "Nigeria",
    latitude: 9.082,
    longitude: 8.6753,
    regions: [
      "Abia",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Benue",
      "Borno",
      "Cross River",
      "Delta",
      "Ebonyi",
      "Edo",
      "Ekiti",
      "Enugu",
      "Federal Capital Territory",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nasarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara",
    ],
  },
  {
    country: "Senegal",
    latitude: 14.7167,
    longitude: -17.4677,
    regions: [
      "Dakar",
      "Diourbel",
      "Fatick",
      "Kaffrine",
      "Kaolack",
      "Kédougou",
      "Kolda",
      "Louga",
      "Matam",
      "Saint-Louis",
      "Sédhiou",
      "Tambacounda",
      "Thiès",
      "Ziguinchor",
    ],
  },
  {
    country: "Sierra Leone",
    latitude: 8.4656,
    longitude: -13.2317,
    regions: ["Eastern", "Northern", "Southern", "Western"],
  },
  {
    country: "Togo",
    latitude: 8.6195,
    longitude: 0.8248,
    regions: ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"],
  },
];
