# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
 puts"Start seeding...."

 Review.destroy_all

 reviews = Review.create([
    {
        title: 'Excellent',
        description: 'studio apartment was spacious, clean and had everything i needed',
        score: 10,
        house_id: House.first.id, 
        user_id: User.first.id 
    },
    {
        title: "Perfect",
        description: "Has all the amenities",
        score: 7,
        house_id: House.second.id, 
        user_id: User.last.id 
    },
    {
        title: 'Average',
        description: 'comfortable to live in',
        score: 5,
        house_id: House.first.id, 
        user_id: User.first.id 
    },
    {
        title: 'Very good',
        description: 'Spacious rooms and good lighting',
        score: 8,
        house_id: House.last.id, 
        user_id: User.third.id 
    },
    {
        title: 'Horrible',
        description: 'Dark lit staircases and poor drainage.',
        score: 3,
        house_id: House.third.id, 
        user_id: User.second.id 
    },
    {
        title: 'Good',
        description: 'Accessible from the main road',
        score: 5,
        house_id: House.first.id, 
        user_id: User.first.id 
    },
    {
        title: 'Awesome',
        description: 'Has great views of the city centre.',
        score: 7,
        house_id: House.last.id, 
        user_id: User.last.id 
    },
    {
        title: 'Perfect',
        description: 'fit for a family',
        score: 8,
        house_id: House.third.id, 
        user_id: User.last.id 
    },
    {
        title: 'Excellent',
        description: 'Ample parking space and operating lifts.',
        score: 7,
        house_id: House.second.id, 
        user_id: User.first.id 
    },
    {
        title: 'Satisfactory',
        description: 'Has the bare minimum amenities',
        score: 6,
        house_id: House.last.id, 
        user_id: User.second.id 
    },

])

puts "Done seeding."