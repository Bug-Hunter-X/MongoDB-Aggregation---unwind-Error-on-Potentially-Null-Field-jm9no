```javascript
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
    $match: {
      "result": { $ne: [] } //Filter out documents with empty result array
    }
  },
  {
    $unwind: "$result"
  }
])
```