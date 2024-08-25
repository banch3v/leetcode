type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {

    const cache: Map<string, number> = new Map();

    return function (...args: number[]): number {
        if (args.length === 0 ) return 0;
        const arrToString: string = JSON.stringify(args);
        if (!cache.has(arrToString)) {
            const result: number = fn(...args);
            cache.set(arrToString, result);
        }
        return cache.get(arrToString)!
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */