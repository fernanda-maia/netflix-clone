export const changeClassName = (obj, callback) => {
    if(obj.isTrue()) {
        callback(obj[true]);

    } else {
        callback(obj[false]);
    }
}