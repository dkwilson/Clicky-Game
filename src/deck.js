function shuffle(array) {
    const _array = array.slice(0)
    for (var i = _array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = _array[i]
      _array[i] = _array[j]
      _array[j] = temp
    }
  
    return _array
  }

export default function initializeDeck() {
    let id = 0
    const cards = ['beth', 'birdperson', 'evilmorty', 'goldenford', 'jerry', 'jessica', 'meeseeks', 'rick'].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, []) 

    return shuffle(cards)
}