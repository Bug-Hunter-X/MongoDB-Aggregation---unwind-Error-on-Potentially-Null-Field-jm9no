# MongoDB Aggregation Error: Handling Null Values in $unwind

This repository demonstrates a common error encountered when using the `$unwind` operator in MongoDB aggregation pipelines: attempting to unwind a field that might be null or missing.  The provided code snippets illustrate the problematic pipeline and its solution.

## Problem

The original code uses `$lookup` to join two collections. If the `foreignField` does not exist in the `otherCollection`, the `result` array will be empty ([]), and hence `$unwind` will throw an error because it cannot process an empty array.  This is a subtle bug easily overlooked. 

## Solution

The solution adds a `$match` stage after `$lookup` to filter out documents where the `result` array is empty, ensuring that `$unwind` only processes non-empty arrays and avoids the error.

## How to reproduce

1.  Create a MongoDB database.
2.  Create two collections, `collection` and `otherCollection`, with data containing a foreign key.
3.  Insert data into the collections, making sure there are cases where the `foreignKey` does not exist in the `otherCollection`.
4.  Run the provided `bug.js` code, which will produce the error. 
5. Run the provided `bugSolution.js` code which will fix the problem.
