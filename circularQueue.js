/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = -1;
    this.tail = -1;
    this.queue = new Array(k);
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    ++this.tail;
    this.queue[this.tail] = value;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.head > -1) {
      this.queue.splice(this.head, 1);
    }
    ++this.head;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.queue[this.tail];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.queue[this.head];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head === this.tail && this.head === -1 ;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if (this.head === this.tail) {
        return false;
    }

    if (this.head > this.tail) {
       return this.head-this.tail === 1
    }
    return this.haed === 0 && this.tail === k-1;

};

const k = 5;
var obj = new MyCircularQueue(k)
 obj.enQueue(7);
 obj.enQueue(4);

console.log(obj.queue);
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */