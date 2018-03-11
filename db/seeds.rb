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

reef1 = Reef.create(
  name: "Australian Ningaloo Reef",
  lat: -22.001639,
  lng: 114.122436
)

reef2 = Reef.create(
  name: "Tubbataha",
  lat: 8.8500,
  lng: 119.9333
)

reef3 = Reef.create(
  name: "Amazon Reef",
  lat: -2.163106,
  lng: -55.126648
)

Review.create(
  body: "If you looking to get live rock and corals this is the place.",
  rating: 5,
  author_id: u1.id,
  reef_id: reef3.id,
  date: '09/03/2018'
)

Review.create(
  body: "Good service, clean water",
  rating: 5,
  author_id: u1.id,
  reef_id: reef2.id,
  date: '09/03/2018'
)

Review.create(
  body: "All the reefs are disappearing :/",
  rating: 5,
  author_id: u2.id,
  reef_id: reef1.id,
  date: '09/03/2018'
)
Review.create(
  body: "The seaweed is always greener in sombody else's lake. You dream about going up there well that is a big mistake. Just look at the world around you right here on the ocean floor. Such wonderful things surround you. What more are you looking for?",
  rating: 4,
  author_id: u1.id,
  reef_id: reef1.id,
  date: '4/3/2018'
)

Review.create(
  body: "I must be a mermaid, Rango. I have no fear of depths and a great fear of shallow living",
  rating: 3,
  author_id: u2.id,
  reef_id: reef1.id,
  date: '1/9/2018'
)
Review.create(
  body: "I felt once more how simple and frugal a thing is happiness: a glass of wine, a roast chestnut, a wretched little brazier, the sound of the sea. Nothing else.",
  rating: 2,
  author_id: u1.id,
  reef_id: reef1.id,
  date: '3/2/2018'
)
Review.create(
  body: "The heart of man is very much like the sea, it has its storms, it has its tides and in its depths it has its pearls too",
  rating: 1,
  author_id: u2.id,
  reef_id: reef1.id,
  date: '09/03/2018'
)
