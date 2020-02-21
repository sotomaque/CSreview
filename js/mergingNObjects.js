let list1 = [{id: 1, name: "tom"}, {id: 2, name: "brad"}, {id: 3, name: "marry"}];
let list2 = [{id: 1, description: "Windows"}, {id: 2, description: "Mac"}, {id: 4, description: "Windows"}];
let list3 = [{id: 1, age: 23}, {id: 2, age: 24}, {id: 4, age: 25}];
let list4 = [{id: 1, gender: "male", salary: 100000}, {id: 2, gender: "male", salary: 100000}, {id: 3, gender: "female", salary: 100000}, {id: 4, gender: "female", salary: 200000}]

x = [list1, list2, list3, list4]


function createObjectWithAttributes(attributeList) {
  let emptyObject = {}
  attributeList.forEach(attribute => {
    emptyObject[attribute] = undefined
  });
  return emptyObject;
}

function mergeObjects(listOfLists) {
  s = new Set();
  // look at first element of sublist and figure out what attributes that object has
  listOfLists.forEach(subList => {
    let attributesInObject = Object.keys(subList[0]);
    // add attributes to a set
    attributesInObject.forEach(attribute => s.add(attribute))
  });
  // cast set -> list
  let listOfAttributes = [...s] // [ 'id', 'name', 'description', 'age' ]
  let finalOutput = []
  // for each object in the sublists
  listOfLists.forEach(subList => {
    subList.forEach(object => {
      // determine if we already have that object in our finalOutput list
      let currentObject = finalOutput.find(finalOutputElement => finalOutputElement.id === object.id)       // if it is not in finalOutput, currentObject will be undefined
      // if the object is not in our final list
      if (currentObject === undefined) {
        // create a dummy object with all the possible attributes whre its values are set to undefined
        const dummyObject = createObjectWithAttributes(listOfAttributes);
        // and then add that object to our finalOuput spread with out object to fill in fields for which we have values
        finalOutput.push({...dummyObject, ...object});
      } 
      // otherwise the object is already in our final list, we just have to update new fields for that object
      else {
        // get list of attributes to be updated
        const attributeToUpdate = Object.keys(currentObject).filter(attribute => object[attribute] !== undefined && attribute !== "id");
        // iterate through all the new attributes
        attributeToUpdate.forEach( a => {
          let objectToUpdate = finalOutput.find( x => object.id === x.id);
          objectToUpdate[a] = object[a]
        });
      }
    })
  })
  return finalOutput;
}

console.log(mergeObjects(x))

