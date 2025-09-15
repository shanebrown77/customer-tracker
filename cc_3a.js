// coding challenge 3a

let customers = [
   
    {name:"Mary Martyr", email:"marymartyr77@gmail.com", purchases:["bible", "handkerchief","tuxedo"]           },
    {name:"James Ham", email:"jamesHAM555@gmail.com", purchases:["ham", "salami", "turkey"]                     },
    {name:"Sarah Pinecone", email:"SarahPinecone9@gmail.com", purchases:["tomato seeds","sapling","fertilizer"] },



];

// adding/removal of data

let newCustomer = {name: "David Payne", email:"DavidTHEPayne47@gmail.com", purchases:["dumbell", "water bottle", "comic book"]}
    
    customers.push(newCustomer);

    customers.shift();

// updating customer info
    
    customers[1].email = "SarahlikesPie99@gmail.com"

    customers[2].purchases.push("tank top")

// displaying customer info 

    customers.forEach(obj =>console.log(`Name: ${obj.name}`, (`Email: ${obj.email}`, (`Total Purchases: ${obj.purchases}` ))));




console.log(customers)