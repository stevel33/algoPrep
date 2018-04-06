const arr = [5, 4, 4, 5, 2, 3, 3];

function findUniqueDeliveryIdWithSet(deliveryIds) {
  const tracker = new Set();

  for (let i = 0; i < deliveryIds.length; i++) {
    let theId = deliveryIds[i];
    if (tracker.has(theId)) {
      tracker.delete(theId);
    } else {
      tracker.add(theId);
    }
  }
  
  return tracker.values().next().value;
}

console.log(findUniqueDeliveryIdWithSet(arr));

// using Map
function findUniqueDeliveryIdWithMap(deliveryIds) {
  const tracker = new Map();

  for (let i = 0; i < deliveryIds.length; i++) {
    let deliveryId = deliveryIds[i];
    if (tracker.has(deliveryId)) {
      var newCount = tracker.get(deliveryId) + 1;
      tracker.set(deliveryId, newCount);
    } else {
      tracker.set(deliveryId, 1);
    }
  }
  
  for (var [id, count] of tracker) {
    if (count === 1) {
        return id;
    }
  }
}

console.log(findUniqueDeliveryIdWithMap(arr));

function findUniqueDeliveryId(deliveryIds) {
  // to solve using bitwise operators
}