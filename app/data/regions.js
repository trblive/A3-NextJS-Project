const regions = [
    {
        id: 0,
        name: "Europe",
        cities: [
            {
                id: 0,
                city: "Paris",
                state: "",
                country: "France",
                image: "/assets/images/regions/europe/paris.jpg"
            },
            {
                id: 1,
                city: "Istanbul",
                state: "",
                country: "Turkey",
                image: "/assets/images/regions/europe/istanbul.avif"
            },
            {
                id: 2,
                city: "London",
                state: "England",
                country: "United Kingdom",
                image: "/assets/images/regions/europe/london.jpeg"
            },
            {
                id: 3,
                city: "Aberdeen",
                state: "Scotland",
                country: "United Kingdom",
                image: "/assets/images/regions/europe/aberdeen.jpg"
            },
            {
                id: 4,
                city: "Barcelona",
                state: "",
                country: "Spain",
                image: "/assets/images/regions/europe/barcelona.avif"
            },
            {
                id: 5,
                city: "Florence",
                state: "",
                country: "Italy",
                image: "/assets/images/regions/europe/florence.jpg"
            },
            {
                id: 6,
                city: "Amalfi",
                state: "",
                country: "Italy",
                image: "/assets/images/regions/europe/amalfi.jpg"
            },
            {
                id: 7,
                city: "Athens",
                state: "",
                country: "Greece",
                image: "/assets/images/regions/europe/athens.avif"
            },
            {
                id: 8,
                city: "Santorini",
                state: "",
                country: "Greece",
                image: "/assets/images/regions/europe/santorini.jpeg"
            },
            {
                id: 9,
                city: "Nicosia",
                state: "",
                country: "Republic of Cyprus",
                image: "/assets/images/regions/europe/nicosia.jpg"
            },
            {
                id: 10,
                city: "Manchester",
                state: "England",
                country: "United Kingdom",
                image: "/assets/images/regions/europe/manchester.jpg"
            },
            {
                id: 11,
                city: "Belfast",
                state: "Northern Ireland",
                country: "United Kingdom",
                image: "/assets/images/regions/europe/belfast.webp"
            },
            {
                id: 12,
                city: "Amsterdam",
                state: "Wales",
                country: "The Netherlands",
                image: "/assets/images/regions/europe/amsterdam.jpg"
            },
            {
                id: 13,
                city: "Dublin",
                state: "",
                country: "Republic of Ireland",
                image: "/assets/images/regions/europe/dublin.jpg"
            },
        ]
    },
    {
        id: 1,
        name: "Asia",
        cities: [
            {
                id: 0,
                city: "Hong Kong",
                state: "",
                country: "China",
                image: "/assets/images/regions/asia/hongkong.jpg"
            },
            {
                id: 1,
                city: "Bangkok",
                state: "",
                country: "Thailand",
                image: "/assets/images/regions/asia/bangkok.avif"
            },
            {
                id: 2,
                city: "Singapore",
                state: "",
                country: "",
                image: "/assets/images/regions/asia/singapore.jpeg"
            },
            {
                id: 3,
                city: "Dubai",
                state: "",
                country: "United Arab Emirates",
                image: "/assets/images/regions/asia/dubai.webp"
            },
            {
                id: 4,
                city: "Kuala Lumpur",
                state: "",
                country: "Malaysia",
                image: "/assets/images/regions/asia/kuala_lumpur.webp"
            },
            {
                id: 5,
                city: "Tokyo",
                state: "",
                country: "Japan",
                image: "/assets/images/regions/asia/tokyo.jpg"
            },
            {
                id: 6,
                city: "Seoul",
                state: "",
                country: "South Korea",
                image: "/assets/images/regions/asia/seoul.avif"
            },
            {
                id: 7,
                city: "Shanghai",
                state: "",
                country: "China",
                image: "/assets/images/regions/asia/shanghai.jpg"
            },
            {
                id: 8,
                city: "Palawan",
                state: "",
                country: "Philippines",
                image: "/assets/images/regions/asia/palawan.jpg"
            },
            {
                id:9,
                city: "Bali",
                state: "",
                country: "Indonesia",
                image: "/assets/images/regions/asia/bali.jpg"
            },
            {
                id: 10,
                city: "Jakarta",
                state: "",
                country: "Indonesia",
                image: "/assets/images/regions/asia/jakarta.jpg"
            },
        ]
    },
    {
        id: 2,
        name: "North America",
        cities: [
            {
                id: 0,
                city: "New York",
                state: "New York",
                country: "USA",
                image: "/assets/images/regions/NA/new_york.avif"
            },
            {
                id: 1,
                city: "Miami Beach",
                state: "Florida",
                country: "USA",
                image: "/assets/images/regions/NA/miami_beach.jpg"
            },
            {
                id: 2,
                city: "San Fransisco",
                state: "California",
                country: "USA",
                image: "/assets/images/regions/NA/san_fransisco.webp"
            },
            {
                id: 3,
                city: "Nashville",
                state: "Tennessee",
                country: "USA",
                image: "/assets/images/regions/NA/nashville.jpeg"
            },
            {
                id: 4,
                city: "Chicago",
                state: "Illinois",
                country: "USA",
                image: "/assets/images/regions/NA/chicago.webp"
            },
            {
                id: 5,
                city: "New Orleans",
                state: "Louisiana",
                country: "USA",
                image: "/assets/images/regions/NA/new_orleans.avif"
            },
            {
                id: 6,
                city: "San Antonio",
                state: "Texas",
                country: "USA",
                image: "/assets/images/regions/NA/san_antonio.jpg"
            },
            {
                id: 7,
                city: "Phoenix",
                state: "Arizona",
                country: "USA",
                image: "/assets/images/regions/NA/phoenix.jpg"
            },
            {
                id: 8,
                city: "Los Angeles",
                state: "California",
                country: "USA",
                image: "/assets/images/regions/NA/los_angeles.avif"
            },
            {
                id: 9,
                city: "Washington",
                state: "District of Columbia",
                country: "USA",
                image: "/assets/images/regions/NA/washington_dc.webp"
            },
            {
                id: 10,
                city: "Toronto",
                state: "",
                country: "Canada",
                image: "/assets/images/regions/NA/toronto.webp"
            },
            {
                id: 11,
                city: "Vancouver",
                state: "",
                country: "Canada",
                image: "/assets/images/regions/NA/vancouver.jpg"
            },
            {
                id: 12,
                city: "Québec City",
                state: "",
                country: "Canada",
                image: "/assets/images/regions/NA/quebec.avif"
            },
            {
                id: 13,
                city: "Mexico City",
                state: "",
                country: "Mexico",
                image: "/assets/images/regions/NA/mexico_city.jpeg"
            },
            {
                id: 14,
                city: "Cancún",
                state: "",
                country: "Mexico",
                image: "/assets/images/regions/NA/cancun.jpg"
            },
            {
                id: 15,
                city: "Acapulco",
                state: "",
                country: "Mexico",
                image: "/assets/images/regions/NA/acapulco.webp"
            },
            {
                id: 16,
                city: "Honolulu",
                state: "Hawaii",
                country: "USA",
                image: "/assets/images/regions/NA/honolulu.jpg"
            },
        ]
    },
    {
        id: 3,
        name: "South America",
        cities: [
            {
                id: 0,
                city: "Sao Paulo",
                state: "",
                country: "Brazil",
                image: "/assets/images/regions/SA/sao_paulo.jpg"
            },
            {
                id: 1,
                city: "Rio De Janeiro",
                state: "",
                country: "Brazil",
                image: "/assets/images/regions/SA/rio_de_janeiro.avif"
            },
            {
                id: 2,
                city: "Buenos Aires",
                state: "",
                country: "Argentina",
                image: "/assets/images/regions/SA/buenos_aires.webp"
            },
            {
                id: 3,
                city: "Santiago",
                state: "",
                country: "Chile",
                image: "/assets/images/regions/SA/santiago.jpg"
            },
            {
                id: 4,
                city: "Bogota",
                state: "",
                country: "Colombia",
                image: "/assets/images/regions/SA/bogota.jpeg"
            },
        ]
    },
    {
        id: 4,
        name: "Oceania",
        cities: [
            {
                id: 0,
                city: "Melbourne",
                state: "Victoria",
                country: "Australia",
                image: "/assets/images/regions/oceania/melbourne.webp"
            },
            {
                id: 1,
                city: "Sydney",
                state: "New South Wales",
                country: "Australia",
                image: "/assets/images/regions/oceania/sydney.jpg"
            },
            {
                id: 2,
                city: "Gold Coast",
                state: "Queensland",
                country: "Australia",
                image: "/assets/images/regions/oceania/gold_coast.jpg"
            },
            {
                id: 3,
                city: "Perth",
                state: "Western Australia",
                country: "Australia",
                image: "/assets/images/regions/oceania/perth.jpg"
            },
            {
                id: 4,
                city: "Auckland",
                state: "",
                country: "New Zealand",
                image: "/assets/images/regions/oceania/auckland.jpg"
            },
            {
                id: 5,
                city: "Wellington",
                state: "",
                country: "New Zealand",
                image: "/assets/images/regions/oceania/wellington.jpg"
            },
        ]
    },
    {
        id: 5,
        name: "Africa",
        cities: [
            {
                id: 0,
                city: "Johannesburg",
                state: "",
                country: "South Africa",
                image: "/assets/images/regions/africa/johannesburg.jpg"
            },
            {
                id: 1,
                city: "Cape Town",
                state: "",
                country: "South Africa",
                image: "/assets/images/regions/africa/cape_town.jpg"
            },
            {
                id: 2,
                city: "Cairo",
                state: "",
                country: "Egypt",
                image: "/assets/images/regions/africa/cairo.jpg"
            },
            {
                id: 3,
                city: "Marrakesh",
                state: "",
                country: "Morocco",
                image: "/assets/images/regions/africa/marrakesh.png"
            },
        ]
    },
]

export default regions