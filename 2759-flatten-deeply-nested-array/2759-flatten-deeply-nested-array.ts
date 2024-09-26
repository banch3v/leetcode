type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {

    if (n === 0) return arr;

    type NestedArray = Array<number | NestedArray>;

    const newArr: NestedArray = [];

    const flatRecursive = (array: NestedArray, n: number): void => {
        array.forEach((el) => {
            if (n > 0 && Array.isArray(el)) {
                flatRecursive(el, n - 1)
            } else {
                newArr.push(el)
            }
        })

    }
    flatRecursive(arr, n);
    return newArr;
};