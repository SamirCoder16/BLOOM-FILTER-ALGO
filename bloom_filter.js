//  BLOOM-FILTER ALGORITHM.... 

const crypto = require('crypto');

class BloomFilter {
    constructor(size,hashCount) {
        this.bitArray = new Array(size).fill(0); // We can use Redis bitMap also .
        this.size = size;
        this.hashCount = hashCount;
    }

    hash(value,seed){
        const hash = crypto.createHash('md5');
        hash.update(value + seed.toString());
        
        return parseInt(hash.digest('hex', 16)) % this.size;
    }

    add(value){
        for(let i = 0; i < this.hashCount; i++){
            const idx = this.hash(value, i);
            this.bitArray[idx] = 1;
        }
    }

    alreadyExist(value){
         for(let i = 0; i < this.hashCount; i++){
            const idx = this.hash(value, i);
           if(this.bitArray[idx] === 0){
             return false;
           }
        }

        return true;
    }
}

module.exports = {BloomFilter}