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
reef4 = Reef.create(
  name: "Apo Reef",
  lat: 12.675800,
  lng: 120.474998
)
reef5 = Reef.create(
  name: "Pickles Reef",
  lat: 	24.989298,
  lng: 	-80.416443
)
reef6 = Reef.create(
  name: "Aliwal Shoal",
  lat: -30.250000,
  lng: 30.816668
)


r1 = Review.create(
  body: "Fusce id imperdiet nunc, nec congue dolor. Duis lacus lacus, mattis eu mi pellentesque, rutrum pellentesque arcu. Phasellus quis magna eget justo aliquam feugiat vel sed ligula. ",
  rating: 5,
  author_id: u1.id,
  reef_id: reef3.id,
  date: Date.new(2017, 12, 12)
)

r2 =Review.create(
  body: "Good service, clean water",
  rating: 5,
  author_id: u1.id,
  reef_id: reef2.id,
  date: Date.new(2011, 5, 8)
)
#
r3 =Review.create(
  body: "Nunc fringilla lectus ut leo ultricies, ac venenatis justo cursus. Pellentesque venenatis nulla urna, nec lacinia risus feugiat a. Integer mattis scelerisque purus a auctor.",
  rating: 5,
  author_id: u2.id,
  reef_id: reef1.id,
  date: Date.new(2012, 1, 25)
)
r4 = Review.create(
  body: "The seaweed is always greener in sombody else's lake. You dream about going up there well that is a big mistake. Just look at the world around you right here on the ocean floor. Such wonderful things surround you. What more are you looking for?",
  rating: 4,
  author_id: u1.id,
  reef_id: reef1.id,
  date: Date.new(2012, 8, 16)
)

r5 = Review.create(
  body: "I must be a mermaid, Rango. I have no fear of depths and a great fear of shallow living",
  rating: 3,
  author_id: u2.id,
  reef_id: reef1.id,
  date: Date.new(2018, 1, 2)
)
r6 = Review.create(
  body: "Morbi arcu arcu, lobortis ut mollis eu, sollicitudin vitae neque. Quisque hendrerit condimentum faucibus. Etiam congue egestas elit a malesuada. Suspendisse potenti. Pellentesque venenatis bibendum massa et consectetur. ",
  rating: 2,
  author_id: u1.id,
  reef_id: reef2.id,
  date: Date.new(2012, 1, 25)
)
r7 = Review.create(
  body: "Aenean ac sapien orci. Nunc volutpat tempor pellentesque. Sed lacus diam, pulvinar nec rhoncus posuere, vestibulum sed odio.",
  rating: 1,
  author_id: u2.id,
  reef_id: reef3.id,
  date: Date.new(2014, 9, 15)
)

r8 = Review.create(
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nisi dolor, vitae aliquet elit dictum eget. Duis a neque in nibh tristique gravida id non ipsum. Praesent et turpis tincidunt, varius magna id, congue ipsum. Proin consequat finibus imperdiet.",
  rating: 2,
  author_id: u3.id,
  reef_id: reef3.id,
  date: Date.new(2015, 10, 25)
)

r9 = Review.create(
  body: "Nulla aliquam odio vitae leo consectetur mollis. Morbi cursus, orci nec blandit consequat, tellus massa hendrerit tortor, ut blandit urna sapien non mauris. Phasellus id odio odio. Cras et semper turpis. ",
  rating: 1,
  author_id: u1.id,
  reef_id: reef2.id,
  date: Date.new(2018, 1, 6)
)

r10 = Review.create(
  body: "Duis efficitur dictum nibh, at rutrum ipsum aliquam placerat. Etiam ac leo sit amet justo euismod suscipit quis sed felis. Phasellus quis mauris in tellus ultrices sagittis. Morbi vehicula a metus non interdum. Praesent aliquet semper ligula. Etiam id vestibulum leo.",
  rating: 4,
  author_id: u6.id,
  reef_id: reef4.id,
  date: Date.new(2018, 1, 6)
)
r11 = Review.create(
  body: "Suspendisse viverra, augue eget convallis rutrum, felis nibh viverra lectus, ac dictum ligula nulla ac ante. Ut auctor sem vel lectus aliquam, pharetra imperdiet tellus tempus.",
  rating: 2,
  author_id: u4.id,
  reef_id: reef4.id,
  date: Date.new(2017, 6, 13)
)

r12 = Review.create(
  body: "Curabitur vestibulum odio elit, fermentum feugiat dui scelerisque interdum. Sed aliquet diam diam, mattis commodo augue imperdiet et. Morbi varius augue non ipsum pulvinar ullamcorper.",
  rating: 3,
  author_id: u5.id,
  reef_id: reef4.id,
  date: Date.new(2012, 1, 25)
)

r13 = Review.create(
  body: "Aliquam eu ipsum quis augue sagittis cursus. Morbi rutrum libero non aliquam congue. Proin vehicula ipsum elit, in accumsan nulla faucibus quis.",
  rating: 4,
  author_id: u2.id,
  reef_id: reef5.id,
  date: Date.new(2017, 12, 16)
)

r14 = Review.create(
  body: "Nulla non aliquet erat. In rutrum mollis turpis vitae pharetra. Pellentesque pretium mauris in dolor lacinia ornare. Phasellus ac tincidunt mauris.",
  rating: 3,
  author_id: u1.id,
  reef_id: reef5.id,
  date: Date.new(2014, 1, 20)
)
r15 = Review.create(
  body: "ed aliquet diam diam, mattis commodo augue imperdiet et. Morbi varius augue non ipsum pulvinar ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  rating: 3,
  author_id: u6.id,
  reef_id: reef5.id,
  date: Date.new(2017, 11, 25)
)
r16 = Review.create!(
  body: "Duis hendrerit arcu venenatis rutrum tempus. Nulla non aliquet erat. In rutrum mollis turpis vitae pharetra. Pellentesque pretium mauris in dolor lacinia ornare. Phasellus ac tincidunt mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  rating: 5,
  author_id: u3.id,
  reef_id: reef6.id,
  date: Date.new(2018, 2, 25)
)
r17 = Review.create!(
  body: "Proin vehicula ipsum elit, in accumsan nulla faucibus quis. Etiam euismod, erat ac venenatis efficitur, dui ex lobortis ligula, mollis ullamcorper sem eros a velit.",
  rating: 4,
  author_id: u2.id,
  reef_id: reef6.id,
  date: Date.new(2018, 3, 9)
)
r18 = Review.create!(
  body: "Nulla non aliquet erat. In rutrum mollis turpis vitae pharetra. Pellentesque pretium mauris in dolor lacinia ornare. Phasellus ac tincidunt mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas porta blandit turpis, ac pharetra metus cursus in. Aliquam eu ipsum quis augue sagittis cursus. Morbi rutrum libero non aliquam congue. Proin vehicula ipsum elit, in accumsan nulla faucibus quis. Etiam euismod, erat ac venenatis efficitur, dui ex lobortis ligula, mollis ullamcorper sem eros a velit.",
  rating: 1,
  author_id: u5.id,
  reef_id: reef6.id,
  date: Date.new(2014, 8, 12)
)


p1 = Photo.create(
  review_id: r1.id,
  image: File.open("app/assets/images/fish1.jpg")
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
  image: File.open("app/assets/images/reef2.jpg")
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
  image: File.open("app/assets/images/p6.jpg")
)
p18 = Photo.create(
  review_id: r18.id,
  image: File.open("app/assets/images/p18.jpg")
)
