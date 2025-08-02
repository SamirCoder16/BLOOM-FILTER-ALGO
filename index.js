const {BloomFilter} = require('./bloom_filter');

const bloom = new BloomFilter(1000, 3);


bloom.add("samir");
bloom.add("kaushik");
bloom.add("twiter");


console.log(bloom.alreadyExist("samir")); // TRUE
console.log(bloom.alreadyExist("twiter")); // TRUE
console.log(bloom.alreadyExist("sam")); // FALSE
