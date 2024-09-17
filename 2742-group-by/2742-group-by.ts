interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function (fn) {

    const result = {};

    this.forEach((el) => {
        const fnRes = fn(el);

        result.hasOwnProperty(fnRes) ? result[fnRes].push(el) : result[fnRes] = [el];
    })

    return result;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */