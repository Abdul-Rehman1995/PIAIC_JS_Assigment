function greek(fullName) {
    console.log('Hello ' + fullName[0] + ' ' + fullName[1]);
}
function twoArguments(userName, callback) {
    let name = userName.split(" ");
    //console.log(name);
    callback(name);
}
twoArguments("Rehman Khan", greek)