type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const arrCopy = [...arr];
    const newArr = [];
    
    let index = 0;

    while(index < arrCopy.length) {
        newArr.push(arrCopy.slice(index, index + size));
        index = index + size;
    }

    return newArr

};
