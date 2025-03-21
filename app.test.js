const app = require("./app.js");
const request = require("supertest");

// -- Endpoint--	Method ---	Response Data
// -- /gigs   ----	GET  ----	{"gigs": [{First Gig}, {Second Gig}, {Third Gig}]}

const gigs = [
  {
    name: "Jimi Hendrix",
    image:
      "https://nitorlack.com/wp-content/uploads/2022/03/JIMI-HENDRIX-MONTEREY-GUITARRA-FUEGO.jpg",
    description: "Live from Monterey Pop festival!",
    date: "1967-06-18T00:00:00.000Z",
    location: {
      venue: "Monterey County Fairgrounds",
      city: "Monterey",
      state: "California",
    },
    id: 1,
  },
  {
    name: "Black Sabbath",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSUnhYW_rLS9T3oRIBa29GUaJK4HWk_GCnQ&s",
    description: "Live from California Jam festival!",
    date: "1974-04-06T00:00:00.000Z",
    location: {
      venue: "Ontario Speedway",
      city: "Ontario",
      state: "California",
    },
    id: 2,
  },
  {
    name: "David Bowie",
    image:
      "https://variety.com/wp-content/uploads/2023/07/Ziggy50-Trailer-V8-temp-for-stills42.jpg?w=1000&h=563&crop=1",
    description: "Say farewell to the Spiders from Mars!",
    date: "1973-07-03T00:00:00.000Z",
    location: {
      venue: "Hammersmith Odeon",
      city: "London",
      state: null,
    },
    id: 3,
  },
  {
    name: "Sleaford Mods",
    image: "https://www.youtube.com/watch?v=37oJcgEHPQI",
    description: "One last blast at The Chameleon!",
    date: "2022-07-29T00:00:00.000Z",
    location: {
      venue: "The Chameleon",
      city: "Nottingham",
      state: null,
    },
    id: 4,
  },
  {
    name: "METZ",
    image:
      "https://www.brudenellsocialclub.co.uk/files/4816/4674/0724/Metz_Poster-10.5x.jpg",
    description: "Touring new album 'Atlus Vending!'",
    date: "2022-04-07T00:00:00.000Z",
    location: {
      venue: "The Brudenell",
      city: "Leeds",
      state: null,
    },
    id: 5,
  },
];

describe("/gigs", () => {
  test("GET - responds with 200 OK status and body shows all the gig objects", async () => {
    const response = await request(app).get("/gigs");
    expect(response.body).toEqual(gigs);
    expect(response.status).toBe(200);
  });
});
