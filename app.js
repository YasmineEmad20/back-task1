const fs=require('fs')
//creating an object person
const person={
    fname:'ahmed',
    lname:'hossam',
    age:20,
    city:'alex'
};
//changing object to json
const jsonPerson=JSON.stringify(person);
//Storing json in file
fs.writeFileSync('person.json',jsonPerson);
//Reading json from file
const jsonFile=fs.readFileSync('person.json','utf-8');
//Converting from Json to Object
const objPerson=JSON.parse(jsonFile);
//Updating person's data
objPerson.fname='adel';
objPerson.lname='ahmed';
objPerson.age=40;
objPerson.city='cairo';
//Converting object to json
const updatedJsonPerson=JSON.stringify(objPerson);
//Storing updated json in a file 
fs.writeFileSync('updated_person.json',updatedJsonPerson);