# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Reef.destroy_all
Review.destroy_all
Photo.destroy_all

u1 = User.create(
  first_name: "Ursala",
  last_name: "Carrol",
  email: "guest@gmail.com",
  password: "starwars"
  )

u2 = User.create(
  first_name: "Ariel",
  last_name: "Mermaid",
  email: 'ariel@littlemermaid.com',
  password: 'password'
)

u3 = User.create(
  first_name: "Flounder",
  last_name: "Po",
  email: "flounder@gmail.com",
  password: "asdfasdf"
)

u4 = User.create(
  first_name: "Kurt",
  last_name: "Jackson",
  email: "kk@hotmail.com",
  password: "mypasswordandstuff"
)
u5 = User.create(
  first_name: "John",
  last_name: "Smith",
  email: "johns@gmail.com",
  password: "asdfasdf"
)
u6 = User.create(
  first_name: "Jane",
  last_name: "Doe",
  email: "janie@gmail.com",
  password: "awereasdff"
)

reef1 = Reef.create(
  name: "Australian Ningaloo Reef",
  lat: -22.001639,
  lng: 114.122436,
  continent: "Austraila"
)

reef2 = Reef.create(
  name: "Tubbataha",
  lat: 8.8500,
  lng: 119.9333,
  continent: "Asia"
)

reef3 = Reef.create(
  name: "Amazon Reef",
  lat: -2.163106,
  lng: -55.126648,
  continent: "South America"
)
reef4 = Reef.create(
  name: "Apo Reef",
  lat: 12.675800,
  lng: 120.474998,
  continent: "Asia"
)
reef5 = Reef.create(
  name: "Pickles Reef",
  lat: 	24.989298,
  lng: 	-80.416443,
  continent: "North America"
)
reef6 = Reef.create(
  name: "Aliwal Shoal",
  lat: -30.250000,
  lng: 30.816668,
  continent: "Africa"
)


r1 = Review.create(
  body: "The Amazon Reef forms an extensive system composed of corals, sponges and rhodoliths. Its features and the inhospitable region make this ecosystem unique. The reef lies at the mouth of the Amazon River basin, along the northern coast of Brazil, extending from Brazil’s border with French Guiana to the state of Maranhão.",
  rating: 5,
  author_id: u1.id,
  reef_id: reef3.id,
  date: Date.new(2017, 12, 12)
)

r2 =Review.create(
  body: "The Tubbataha Reefs Natural Park (Filipino: Bahurang Tubbataha) is a protected area of the Philippines located in the middle of the Sulu Sea. The marine and bird sanctuary consists of two huge atolls (named the North Atoll and South Atoll) and the smaller Jessie Beazley Reef covering a total area of 97,030 hectares",
  rating: 5,
  author_id: u1.id,
  reef_id: reef2.id,
  date: Date.new(2011, 5, 8)
)
#
r3 =Review.create(
  body: "Ningaloo Marine Park is a World Heritage-listed site found half way up the West Australian coastline. The crystalline water harbours the world’s largest fringing reef, a 260 kilometre (162 mile) long coral reef swarming with turtles, tropical fish, manta rays, humpback whales and the elusive whale shark. ",
  rating: 5,
  author_id: u2.id,
  reef_id: reef1.id,
  date: Date.new(2012, 1, 25)
)
r4 = Review.create(
  body: "The coast and reef draw their name from the Australian Aboriginal Wajarri language word ningaloo meaning promontory, deepwater, or high land jutting into the sea. The Yamatji peoples of the Baiyungu and Yinigudura clans have inhabited the area for over 30,000 years.",
  rating: 4,
  author_id: u1.id,
  reef_id: reef1.id,
  date: Date.new(2012, 8, 16)
)

r5 = Review.create(
  body: "The World Heritage status of the region was created and negotiated in 2011, and the adopted boundary included the Ningaloo Marine Park (Commonwealth Waters), Ningaloo Marine Park (State Waters) and Muiron Islands Marine Management Area (including the Muiron Islands), Jurabi Coastal Park, Bundegi Coastal Park, Cape Range National Park, and the Learmonth Air Weapons Range.",
  rating: 3,
  author_id: u2.id,
  reef_id: reef1.id,
  date: Date.new(2018, 1, 2)
)
r6 = Review.create(
  body: "In December 1993, the UNESCO declared the Tubbataha Reefs National Park as a World Heritage Site as a unique example of an atoll reef with a very high density of marine species; the North Islet serving as a nesting site for birds and marine turtles. The site is an excellent example of a pristine coral reef with a spectacular 100-m perpendicular wall, extensive lagoons and two coral islands.",
  rating: 2,
  author_id: u1.id,
  reef_id: reef2.id,
  date: Date.new(2012, 1, 25)
)
r7 = Review.create(
  body: "The Amazon Reef ecosystem is already considered to be under threat from nearby oil exploration. The companies BP and Total are trying to obtain environmental licenses from the Brazilian government to start drilling for oil at the mouth of the Amazon River basin in 2018.",
  rating: 1,
  author_id: u2.id,
  reef_id: reef3.id,
  date: Date.new(2014, 9, 15)
)

r8 = Review.create(
  body: "World Amazon Reef Day is celebrated on January 28. It was on this day, in 2017, that the first images of the reef system were released.Evidence of the reef’s existence has been known since the 1950s, but only in 2016 was it actually proven, a discovery held up by experts as one of the great finds in marine biology of the last few decades.",
  rating: 2,
  author_id: u3.id,
  reef_id: reef3.id,
  date: Date.new(2015, 10, 25)
)

r9 = Review.create(
  body: "The national park and the rest of the Philippine archipelago is part of the Coral Triangle, recognized as a center of marine biodiversity containing 75% of the described coral species and 40% of the world's reef fish. The area is under a grave threat due to overfishing and destructive fishing practices.",
  rating: 1,
  author_id: u1.id,
  reef_id: reef2.id,
  date: Date.new(2018, 1, 6)
)

r10 = Review.create(
  body: "Apo Reef is a coral reef system in the Philippines situated on the western waters of Occidental Mindoro province in the Mindoro Strait. Encompassing 34 square kilometres (13 sq mi), it is the world's second-largest contiguous coral reef system and the largest in the country.",
  rating: 4,
  author_id: u6.id,
  reef_id: reef4.id,
  date: Date.new(2018, 1, 6)
)
r11 = Review.create(
  body: "Apo Reef can be found around 15 nautical miles (28 km; 17 mi) west of the nearest coast of the Philippine island of Mindoro. It is separated from main island by the Apo East Pass of the Mindoro Strait. Politically, the reef lies within the jurisdiction of the Province of Occidental Mindoro in Region IV-B of the Philippines and more accurately of the Municipality of Sablayan.",
  rating: 2,
  author_id: u4.id,
  reef_id: reef4.id,
  date: Date.new(2017, 6, 13)
)

r12 = Review.create(
  body: "The main geographical feature of Apo Reef is submerged, but three islands mark it on the surface: the Apo Island, Apo Menor (locally known as Binangaan) and Cayos del Bajo (Keys of the bank, locally known as Tinangkapan).",
  rating: 3,
  author_id: u5.id,
  reef_id: reef4.id,
  date: Date.new(2012, 1, 25)
)

r13 = Review.create(
  body: "Pickles Reef is a small coral reef located within the Florida Keys National Marine Sanctuary. It lies to the southeast of Key Largo, to the south the Key Largo Existing Management Area and John Pennekamp Coral Reef State Park. Unlike many reefs within the Sanctuary, this reef is not within a Sanctuary Preservation Area (SPA)",
  rating: 4,
  author_id: u2.id,
  reef_id: reef5.id,
  date: Date.new(2017, 12, 16)
)

r14 = Review.create(
  body: "The name comes from cement-filled pickle barrels sunk here during the Civil War, roughly throughout the 1860s. These barrels came from all sorts of things back then, such as shipwrecks. These barrels are now covered with the largest pillar corals in the Keys.",
  rating: 3,
  author_id: u1.id,
  reef_id: reef5.id,
  date: Date.new(2014, 1, 20)
)
r15 = Review.create(
  body: "Numerous ledges and crevasses attract juvenile and tropical fish of many species. Visiting these locations is extraordinary in the sense that it has lots of history laid away on the bottom of the reef.",
  rating: 3,
  author_id: u6.id,
  reef_id: reef5.id,
  date: Date.new(2017, 11, 25)
)
r16 = Review.create!(
  body: "The Aliwal Shoal is a rocky reef which is the remains of an ancient sand dune approximately 5 kilometres (3.1 mi) off the coast of KwaZulu-Natal, South Africa. The reef is inhabited by many kinds of hard and soft corals and a variety of tropical and subtropical fish species.",
  rating: 5,
  author_id: u3.id,
  reef_id: reef6.id,
  date: Date.new(2018, 2, 25)
)
r17 = Review.create!(
  body: " Aliwal Shoal was named after the near-sinking of the 3 Masted vessel 'Aliwal', captained by James Anderson, in 1849. There are two wrecks near the reef that are popular recreational dive sites. ",
  rating: 4,
  author_id: u2.id,
  reef_id: reef6.id,
  date: Date.new(2018, 3, 9)
)
r18 = Review.create!(
  body: "Aliwal shoal is a subtidal, algal-dominated subtropical reef in the transitional region between the warm-temperate reefs of Pondoland and the tropical to subtropical reefs of Maputaland.[3] The benthic communities are dominated by algae and sponges, but various soft and hard corals, echinoderms and ascidians are also present.",
  rating: 1,
  author_id: u5.id,
  reef_id: reef6.id,
  date: Date.new(2014, 8, 12)
)

p1 = Photo.create(
  review_id: r1.id,
  image: File.open("app/assets/images/p22.jpg"),
  caption: "Amazing view of the Amazon Reef!"
)

p2 = Photo.create(
  review_id: r2.id,
  image: File.open("app/assets/images/p2.jpg")
)

p3 = Photo.create(
  review_id: r3.id,
  image: File.open("app/assets/images/p3.jpg")
)

p4 = Photo.create(
  review_id: r4.id,
  image: File.open("app/assets/images/p4.jpg")
)
p5 = Photo.create(
  review_id: r5.id,
  image: File.open("app/assets/images/p5.jpg")
)
p6 = Photo.create(
  review_id: r6.id,
  image: File.open("app/assets/images/p6.jpg")
)
p7 = Photo.create(
  review_id: r7.id,
  image: File.open("app/assets/images/p7.jpg")
)
p8 = Photo.create(
  review_id: r8.id,
  image: File.open("app/assets/images/p8.jpg")
)
p9 = Photo.create(
  review_id: r9.id,
  image: File.open("app/assets/images/p9.jpg")
)
p10 = Photo.create(
  review_id: r10.id,
  image: File.open("app/assets/images/p20.jpg")
)
p11 = Photo.create(
  review_id: r11.id,
  image: File.open("app/assets/images/reef1.jpg")
)
p12 = Photo.create(
  review_id: r12.id,
  image: File.open("app/assets/images/p19.jpg")
)
p13 = Photo.create(
  review_id: r13.id,
  image: File.open("app/assets/images/p13.jpg")
)

p14 = Photo.create(
  review_id: r14.id,
  image: File.open("app/assets/images/p14.jpg")
)

p15 = Photo.create(
  review_id: r15.id,
  image: File.open("app/assets/images/p15.jpg")
)
p16 = Photo.create(
  review_id: r16.id,
  image: File.open("app/assets/images/p14.jpg")
)
p17 = Photo.create(
  review_id: r17.id,
  image: File.open("app/assets/images/p23.jpg")
)
p18 = Photo.create(
  review_id: r18.id,
  image: File.open("app/assets/images/p18.jpg")
)
