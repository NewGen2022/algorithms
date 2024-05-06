export default class HashMap {
    constructor(tableSize = 16) {
        this._buckets = Array.from({ length: tableSize }, () => []);
        this._size = 0;
        this.LOAD_FACTOR = 0.75;
    }
  
    hash(key) {
        const stringKey = String(key);
        let hashCode = 5381;
    
        for (const char of stringKey) {
            hashCode = (hashCode * 33) ^ char.charCodeAt();
        }
    
        return Math.abs(hashCode) % this._buckets.length;
    }

    getBucketOfKey(key) {
        return this._buckets[this.hash(key)];
    }
  
    getIndexOfKey(key) {
        const index = this.hash(key);
    
        if (index < 0 || index >= this._buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
    
        return index;
    }
  
    hasHighLoadFactor() {
        return this._size / this._buckets.length > this.LOAD_FACTOR;
    }
  
    resize() {
        const oldBuckets = this._buckets;
        this._buckets = Array.from({ length: oldBuckets.length * 2 }, () => []);
        this._size = 0;
    
        oldBuckets.forEach((bucket) => {
            bucket.forEach(([key, value]) => this.set(key, value));
        });
    }

    collect(callback) {
        const result = [];
        this._buckets.forEach((bucket) => {
            bucket.forEach((entry) => {
            if (entry) {
                result.push(callback(entry[0], entry[1]));
            }
            });
        });
    
        return result;
    }
  
    set(key, value) {
        const bucket = this.getBucketOfKey(key);
    
        const existingEntryIndex = bucket.findIndex(([k]) => k === key);
        if (existingEntryIndex !== -1) {
            bucket[existingEntryIndex] = [key, value];
        } else {
            bucket.push([key, value]);
            this._size++;
            if (this.hasHighLoadFactor()) {
            this.resize();
            }
        }
    }
  
    get(key) {
        const bucket = this.getBucketOfKey(key);
        const entry = bucket.find(([k]) => k === key);
        return entry ? entry[1] : undefined;
    }
  
    has(key) {
        const bucket = this.getBucketOfKey(key);
        return bucket.some(([k]) => k === key);
    }
  
    remove(key) {
        const bucket = this.getBucketOfKey(key);
    
        const entryIndex = bucket.findIndex(([k]) => k === key);
        if (entryIndex !== -1) {
            const [removedEntry] = bucket.splice(entryIndex, 1);
            this._size--;
            return removedEntry[1];
        }
        return undefined;
    }
  
    clear() {
        this._buckets = Array.from({ length: this._buckets.length }, () => []);
        this._size = 0;
    }
  
    keys() {
        return this.collect((key) => key);
    }
  
    values() {
        return this.collect((_, value) => value);
    }
  
    entries() {
        return this.collect(([key, value]) => [key, value]);
    }
  
    get length() {
        return this._size;
    }
}