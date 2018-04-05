function QueueTwoStacks() {
  this.inbox  = [];
  this.outbox = [];
}

QueueTwoStacks.prototype.enqueue = function(item) {
  this.inbox.push(item);
}

QueueTwoStacks.prototype.dequeue = function() {
  if (this.outbox.length === 0) {
    while (this.inbox.length > 0) {
      let item = this.inbox.pop();
      this.outbox.push(item);
    }

    if (this.outbox.length === 0) {
      return undefined;
    }
  }

  return this.outbox.pop();
}

const zay = new QueueTwoStacks();
zay.enqueue('hey');
zay.enqueue('yo');
zay.dequeue();
console.log(zay);