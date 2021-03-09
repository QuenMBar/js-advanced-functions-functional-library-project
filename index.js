const fi = (function () {
    return {
        libraryMethod: function () {
            return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
        },

        each: function (collection, callback) {
            const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);

            for (let i = 0; i < newCollection.length; i++) {
                callback(newCollection[i]);
            }

            return collection;
        },

        map: function (collection, callback) {
            const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
            const alteredArray = newCollection.map((x) => callback(x));
            return alteredArray;
        },

        reduce: function (collection, callback, acc) {
            let newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
            if (!acc) {
                acc = newCollection[0];
                newCollection = newCollection.slice(1);
            }
            for (let i = 0; i < newCollection.length; i++) {
                acc = callback(acc, newCollection[i], collection);
            }
            return acc;
        },

        find: function (collection, callback) {
            const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
            const foundItem = newCollection.find(callback);
            return foundItem;
        },

        filter: function (collection, callback) {
            const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
            const foundItem = newCollection.filter(callback);
            return foundItem;
        },

        size: function (collection) {
            const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);
            return newCollection.length;
        },

        first: function (array, n = 1) {
            if (n === 1) {
                return array[0];
            }
            return array.slice(0, n);
        },

        last: function (array, n = 1) {
            if (n === 1) {
                return array[array.length - 1];
            }
            return array.slice(array.length - n, array.length);
        },

        compact: function (array) {
            let newArray = [];
            array.forEach((item) => {
                if (item) {
                    newArray.push(item);
                }
            });
            return newArray;
        },

        sortBy: function (array, callback) {
            let sortArray = [...array];
            return sortArray.sort(function (a, b) {
                return callback(a) - callback(b);
            });
        },

        flatten: function (array, shallow = false) {
            let returnArray = [];
            for (let i = 0; i < array.length; i++) {
                if (!Array.isArray(array[i])) {
                    returnArray.push(array[i]);
                } else if (!shallow) {
                    returnArray = returnArray.concat(this.flatten(array[i], false));
                } else {
                    returnArray = returnArray.concat(array[i]);
                }
            }
            return returnArray;
        },

        uniq: function (array, isSorted = false, callback = undefined) {
            let uniqArr = [];
            if (callback != undefined) {
                let pastAlteredArr = [];
                for (let i = 0; i < array.length; i++) {
                    let alteredElem = callback(array[i]);
                    if (!pastAlteredArr.includes(alteredElem)) {
                        uniqArr.push(array[i]);
                        pastAlteredArr.push(alteredElem);
                    }
                }
                return uniqArr;
            } else if (!isSorted) {
                for (let i = 0; i < array.length; i++) {
                    if (!uniqArr.includes(array[i])) {
                        uniqArr.push(array[i]);
                    }
                }
                return uniqArr;
            } else {
                let lastElem;
                for (let i = 0; i < array.length; i++) {
                    if (array[i] != lastElem) {
                        lastElem = array[i];
                        uniqArr.push(array[i]);
                    }
                }
                return uniqArr;
            }
        },

        keys: function (object) {
            return Object.keys(object);
        },

        values: function (object) {
            return Object.values(object);
        },

        functions: function (object) {
            return Object.getOwnPropertyNames(object).filter((item) => typeof object[item] === "function");
        },
    };
})();

fi.libraryMethod();
