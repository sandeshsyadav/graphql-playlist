Graphql

https://github.com/iamshaunjp/graphql-playlist/tree/lesson-5

Nodemon - to listen and load the changes dynamically

Define a Schema

BookType refers to the Info we will receive/have to books object

RootQuery gives us a staring point to walk through the graphql tree
Fields in the rootquery should match the object we want to receive
fields inside GraphQLObjecType needs to be a function because we need to excute it only at the time of
execution

args in root query is the parameter passed during the query

In order to tie a relationship between the book and author,
we can add a authorId (which corresponds to the id inside the author object)

Then inside the BookType add another property of type Author and then add a resolve function which will help
in getting the author name, age..etc

During Mutation: 
We can use GraphQLNonNull to mark is as required when adding it to ongoDB

Source: https://www.youtube.com/watch?v=-aQ_Io9m1GQ&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f&index=13