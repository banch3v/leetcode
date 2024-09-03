var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
    const hasKey = this.cache.has(key)

    if (hasKey) {
        clearTimeout(this.cache.get(key).duration)
        
        this.cache.set(key, {
            value: value,
            duration: setTimeout(() => {
                this.cache.delete(key)
            }, duration)
        })

        return true;
    } else {
        this.cache.set(key, {
            value: value,
            duration: setTimeout(() => {
                this.cache.delete(key)
            }, duration)
        })
        return false;
    }

  
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const hasKey = this.cache.has(key)

    if (hasKey) {
        return this.cache.get(key).value;
    } else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */