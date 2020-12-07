// For RESTAURANTS table     
// Q1
// only return restaurant's ids
cursor = db.restaurants.find({"name":"Caffe Dante"}, {"restaurant_id":1});
// Q2   
// only return restaurant's ids and names
cursor = db.restaurants.find({"name": {$regex: ".*Steak.*"}}, {"restaurant_id":1, "name":1});
// Q3
// only return restaurant's ids and names
cursor = db.restaurants.find({$and: [{"borough":"Brooklyn"}, {$or:[{"cuisine":"American"}, {"cuisine":"Italian"}]}]}, {"restaurant_id":1, "name":1});
// Q4
// return a list of id and count number in desending order
cursor = db.restaurants.aggregate([{$group:{_id: "$borough", count: { $sum: { "$switch": { "branches": [ {"case": { "$eq": [ "$cuisine", "American" ] }, "then": 1}], "default": 0 }}}}}, {$sort : {count : -1}}]);
// Q5
// return top 5 name and total score
cursor = db.restaurants.aggregate({$unwind:"$grades"}, {$match: {$and: [{"cuisine":"Chinese"}, {"borough":"Manhattan"}]}}, {$group: {_id:"$name", count:{$sum:"$grades.score"}}}, {$sort: {count: -1}}, {$project: {_id : 0 ,"name":"$_id", "total_score":"$count"}}, { $limit:5 });
// Q6
// return number of restaurants in desired area and grade score > 70
cursor = db.restaurants.aggregate({$unwind:"$grades"}, {$match: {$and:[{"grades.score": {$gt: 70}}, {"address.coord": {$geoWithin: {$box: [[ -74 , 40.5 ] , [ -73.5 , 40.7 ]]}}}]}}, {$group: {_id: "$name", count:{$sum: 1}}}, {$count: "count"});


// For ZIPS table      
// Q7
// return the zipcode, the city name and the state
cursor = db.zips.aggregate({$group: {_id:"$_id", city: {$first:"$city"}, state: {$first:"$state"}, population: {$first:"$pop"}, count: {$sum : "$pop"}}}, {$sort: {count: -1}}, {$limit:10}, {$project: { _id:0, "zipcode": "$_id", "city": 1, "state": 1}});
// Q8
// return the location, city name and the state
cursor = db.zips.aggregate({$group: {_id:"$state", city: {$first:"$city"}, location: {$first:"$loc"}, "population":{$max:"$pop"}}}, {$project: {_id:0, "state" : "$_id", "city":"$city", "location":"$location"}});
// Q9
// return the population and the state
cursor = db.zips.aggregate({$group: {_id:"$state", count:{$avg : "$pop"}}}, {$match: {count: {$gt: 10000}}}, {$project: {_id : 0, state:"$_id", population:"$count"}});
// Q10
// return only city name
cursor = db.zips.find({loc:{$near:[ -70, 40]}}, {_id:0, city:1}).sort({}).limit(5);

