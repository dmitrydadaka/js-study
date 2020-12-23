class LPUCash {
    constructor(capacity) {
        this.capacity = capacity
        this.q = []
        this.m = {}
    }
    get(key) {
        if (!this.m[key]) {
            return -1
        }
        const value = this.m[key].value
        this.put(key, value)
        return value

    }
    put(key, value) {
        if (this.m[key]) {
            //node={key,value}
            this.q.splice(this.q.findIndex(node => node === this.m[key]), 1)
            //link on node
            this.m[key] = null
        }
        this.q.push({ key, value })
        this.m[key] = this.q[this.q.length - 1]
        if (this.q.length > this.capacity) {
            this.m[this.q.shift().key] = null
        }
    }

}
const cashe = new LPUCash(3)
cashe.put(5, 1)
cashe.put(2, 1)
//cashe.get(2)
cashe.put(3, 1)
cashe.get(2)
cashe.put(4, 13)
cashe.put(5, 890)
cashe.get(2)
cashe.put(13, 110)
console.log(cashe.q)