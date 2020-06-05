let response = {
    "data": [
        {
            "type": "articles",
            "id": "1",
            "attributes": {
                "title": "JSON:API paints my bikeshed!",
                "body": "The shortest article. Ever.",
                "created": "2015-05-22T14:56:29.000Z",
                "updated": "2015-05-22T14:56:28.000Z"
            },
            "relationships": {
                "author": {
                    "data": {"id": "42", "type": "people"}
                }
            }
        }, 
        {
            "type": "articles",
            "id": "2",
            "attributes": {
                "title": "Second Artilce",
                "body": "Another article.",
                "created": "2015-01-22T14:56:29.000Z",
                "updated": "2015-01-22T14:56:28.000Z"
            },
            "relationships": {
                "author": {
                    "data": {"id": "43", "type": "people"}
                }
            }
        }
    ],
    
    "included": [
        {
            "type": "people",
            "id": "42",
            "attributes": {
                "name": "John",
                "age": 80,
                "gender": "male"
            }
        }, 
        {
            "type": "people",
            "id": "43",
            "attributes": {
                "name": "Enrique",
                "age": 25,
                "gender": "male"
            }
        }
    ]
}

let { data, included } = response;

// print only the articles names and authors
let formattedData = data.map( article => {
    // get article details
    let articleName = article.attributes.title;
    let publicationDate = new Date(article.attributes.created)

    // get author details
    let authorId = article.relationships.author.data.id;
    let author = included.filter(person => person.id === authorId); // returns array, 0th index will hold authors info
    let authorName = author[0].attributes.name

    // return an object with a summary containing the article title and author name
    // as well as a date object for the publication date
    return {
        headline: `${articleName} written by ${authorName}`, 
        date: publicationDate 
    }
});

// sort the formatted data in ascending order
console.log(formattedData.sort((a,b) => {return a.date - b.date}))


// sort articles by date created
// data.sort((a, b) => {return new Date(a.attributes.created) - new Date(b.attributes.created)})

// console.log(data)