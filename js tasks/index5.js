const map = {}
map["key"] = "value"
console.log(map["key"])

class HashTable {
    store = new Array(10)
    hash(key) {
        let summ = 0
        for (let i = 0; i < key.length; i++) {
            summ += key.charCodeAt(i)
        }
        return summ

    }
    add(key, value) {
        this.store[this.hash(key)] = this.store[this.hash(key)] || []
        this.store[this.hash(key)].push({key,value})

    }
    get(key) {
        return this.store[this.hash(key)].find((item)=>item.key===key).value

    }

}
const dict = new HashTable()
dict.add("ab", "1")
dict.add("ba", "2")
console.log(dict.get("ab"), dict.get("ba"))