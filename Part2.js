const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];

  //Sort the array by age.

  const sortedByAge = people.sort((a, b) => Number(a.age) - Number(b.age));
console.log(sortedByAge);


  //Filter the array to remove entries with an age greater than 50.

  const under50 = people.filter(person => Number(person.age) <= 50);
  console.log(under50);
  
  //Map the array to change the “occupation” key to “job” and increment every age by 1.

  const updatedPeople = people.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,  // Renamed "occupation" to "job"
    age: String(Number(person.age) + 1) // Increment age by 1
  }));
  console.log(updatedPeople);
  

  //Use the reduce method to calculate the sum of the ages.

  const sumOfAges = people.reduce((sum, person) => sum + Number(person.age), 0);
console.log(sumOfAges);


//Then use the result to calculate the average age.

const averageAge = sumOfAges / people.length;
console.log(averageAge);
