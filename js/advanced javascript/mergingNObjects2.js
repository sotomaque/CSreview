let list1 = [{id: 1, name: "tom"}, {id: 2, name: "brad"}, {id: 3, name: "marry"}];
let list2 = [{id: 1, description: "Windows"}, {id: 2, description: "Mac"}, {id: 4, description: "Windows"}];
let list3 = [{id: 1, age: 23}, {id: 2, age: 24}, {id: 4, age: 25}];
let list4 = [{id: 1, gender: "male", salary: 100000}, {id: 2, gender: "male", salary: 100000}, {id: 3, gender: "female", salary: 100000}, {id: 4, gender: "female", salary: 200000}]

x = [list1, list2, list3, list4]

function createObjWithAttributes(listOfAttributes) {
    let temp = {};
    listOfAttributes.forEach(attribute => {
        temp[attribute] = undefined;
    });
    return temp;
}

function mergingNObjects(listOfLists) {
    s = new Set();
    listOfLists.forEach(subList => {
        let attributesInSublist = Object.keys(subList[0]);
        attributesInSublist.forEach(attribute => {
            s.add(attribute);
        });
    });
    let arrayOfAttributes = [...s];
    let finalResult = [];

    listOfLists.forEach(subList => {
        subList.forEach(objectInSublist => {
            let currentObject = finalResult.find(finalResElement => finalResElement.id === objectInSublist.id)
            if (currentObject === undefined) {
                let templateObject = createObjWithAttributes(arrayOfAttributes);
                finalResult.push({...templateObject, ...objectInSublist});
            } else {
                let fieldsToUpdate = Object.keys(objectInSublist).filter(attribute => objectInSublist[attribute] !== undefined && attribute !== "id");
                fieldsToUpdate.forEach(field => {
                    let objectToUpdate = finalResult.find(prev => prev.id === objectInSublist.id);
                    objectToUpdate[field] = objectInSublist[field]
                });
            }
        });
    });

    return finalResult;
}

let result = mergingNObjects(x);

console.log(result)