const CarThingEvents = {
    dispatchCarThingSocketMessage: (message) => {document.dispatchEvent(new CustomEvent('onCarThingSocketMessage', {detail: message}))},
    dispatchCarThingButtonDown: (key) => {document.dispatchEvent(new CustomEvent('onCarThingButtonDown', {detail: key}))},
    dispatchCarThingButtonUp: (key) => {document.dispatchEvent(new CustomEvent('onCarThingButtonUp', {detail: key}))},
    dispatchCarThingScroll: (delta) => {document.dispatchEvent(new CustomEvent('onCarThingScroll', {detail: delta}))},
}

export default CarThingEvents;