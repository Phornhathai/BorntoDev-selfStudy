localStorage.setItem("username", "johnDoe11")

let username = localStorage.getItem("username")
console.log("Username", username);

function checkLocalStorageKey(key){
    if (localStorage.getItem(key) != null) {
        console.log("Key exists:" , key);
    } else {
        console.log("Key does not exist", key);
    }
}

checkLocalStorageKey("username")

localStorage.setItem("username", "JaneDoe")
localStorage.setItem("age", "30")
localStorage.setItem("city", "Bangkok")


checkLocalStorageKey("username")

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)
    console.log(`${key} : ${value}`);
    
}

localStorage.clear()

console.log("---------");
let user = {
    name: "JohnDoe",
    age : 25,
    city: "New York"
}

localStorage.setItem("user", JSON.stringify(user))

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)
    console.log(`${key} : ${value}`);
    
}

let storedUser = JSON.parse(localStorage.getItem("user"));
console.log("User:" , storedUser.age);
