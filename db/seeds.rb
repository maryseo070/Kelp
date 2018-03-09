# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  email: "guest@gmail.com",
  password: "starwars"
  )

User.create(
  email: 'ariel@littlemermaid.com',
  password: 'password'
)

Reef.create(
  name: "Australian Ningaloo Reef",
  lat: -22.001639,
  lng: 114.122436
)

Reef.create(
  name: "Tubbataha",
  lat: 8.8500,
  lng: 119.9333
)

Reef.create(
  name: "Amazon Reef",
  lng: -2.163106,
  lng: -55.126648
)

Review.create(
  title: "Best reef on the australian coast!",
  body: "If you looking to get live rock and corals this is the place.",
  rating: 5,
  author_id: 1,
  reef_id: 2,
  date: '09/03/2018'
)

Review.create(
  title: "Perfect Getaway",
  body: "Good service, clean water",
  rating: 5,
  author_id: 1,
  reef_id: 2,
  date: '09/03/2018'
)

Review.create(
  title: "Save our reefs!",
  body: "All the reefs are disappearing :/",
  rating: 5,
  author_id: 1,
  reef_id: 1,
  date: '09/03/2018'
)
