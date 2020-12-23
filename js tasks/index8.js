class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.length = 0
        this.head = this.tail = 0
    }

    push(node) {
        if (!this.head) {
            this.head = this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node;
        }
        this.length++
    }


    shift() {
        const head = this.head
        this.splice(this.head)
        return head

    }


    splice(node) {
        //1 node in linked list
        if (!node.prev && !node.next) {
            this.head = this.tail = null
        }
        //this is tail 
        else if (!node.next) {
            this.tail = node.prev
            this.tail.next = null

        }

        //head
        else if (!node.prev) {
            this.head = node.next
            this.head.prev = null
        }//inthe middle
        else {
            const next = node.next;
            const prev = node.prev;
            prev.next = next;
            next.prev = prev;
            node.next = node.prev = null;
        }
        this.length--
    }
}
class LPUCash {
    constructor(capacity) {
        this.capacity = capacity
        this.q = new LinkedList()
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
            this.q.splice(this.m[key])
            //link on node
            this.m[key] = null
        }
        const node = new ListNode(key, value)
        this.q.push(node)
        this.m[key] = node
        if (this.q.length > this.capacity) {
            this.m[this.q.shift().key] = null
        }
    }

}
const cashe = new LPUCash(3)
cashe.put(15, 1)
cashe.put(2, 1)
//cashe.get(2)
cashe.put(3, 1)
cashe.get(2)
cashe.put(4, 13)
cashe.put(5, 890)
cashe.get(2)
cashe.put(13, 110)
console.log(cashe.q)
