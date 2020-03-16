# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign key would be the Animal ID and it would be part of the Sightings model 

  Researched answer: Foreign key is used to cross-reference two tables



2. Which routes must always be passed params and why?

  Your answer: PATCH/PUT and DELETE

  Researched answer: PATCH/PUT and DELETE always need params passed as we would



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:

  get "game/:guess", to: "main#game" 



4. Name three rails generator commands. What is created by each?

  Your answer: Not Sure

  Researched answer:
  rails g model 
  	-Creates a database model
  rails g controller
  	-Creates a controller for our MVC model
  rails g migration
  	-Creates a migration so we can apply database changes

5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   	-Show a index of users

/users/1      method="GET"  	-Show information of one user 

/users/new    method="GET"   	-Get information to create a user

/users/       method="POST"     -Create information of new user

/users/1      method="PUT"    	-Update infromation of a user

/users/1      method="DELETE"	-Delete a users infromation
