type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {

    const array = new Array(functions.length);
    let count = 0;

    return new Promise((resolve, reject) => {
        functions.map((fn, i) => {
            fn().then(val => {
                array[i] = val;
                count++;
                if (count === array.length) resolve(array);
            }).catch(err => reject(err));
        });
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */