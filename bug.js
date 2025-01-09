```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {
    $lookup:
      {
        from: "otherCollection",
        localField: "_id",
        foreignField: "foreignKey",
        as: "result"
      }
  },
  {
    $unwind: "$result" //Error: Using $unwind on a field that might be null
  }
])
```