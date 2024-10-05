//Take an object and increment its age field.

function incrementAge(obj) {
    if (!obj.age) {
      obj.age = 0; // If age field doesn't exist, set to 0
    } else {
      obj.age += 1; // Increment age
    }
    obj.updated_at = new Date(); // Add or update the updated_at field with the current time
  }
  

//Take an object, make a copy, and increment the age field of the copy. Return the copy.

function incrementAgeCopy(obj) {
    const objCopy = { ...obj }; // Shallow copy of the object
    if (!objCopy.age) {
      objCopy.age = 0; // If age field doesn't exist, set to 0
    } else {
      objCopy.age += 1; // Increment age
    }
    objCopy.updated_at = new Date(); // Add or update the updated_at field with the current time
    return objCopy;
  }

  
  obj.updated_at = new Date();      // New Date instance for the original object
objCopy.updated_at = new Date();  // New Date instance for the copy


const person = { name: "Brandon" };

// Modify the original object
incrementAge(person);
console.log(person); // Should show age: 1, updated_at: current date

// Create a copy and modify it
const newPerson = incrementAgeCopy(person);
console.log(newPerson); // Should show age: 2, updated_at: new date

// Original object should remain with age: 1
console.log(person); // Still age: 1

  
