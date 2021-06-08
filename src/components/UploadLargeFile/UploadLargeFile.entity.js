export class ChunkContainerInfo {
  constructor() {
    this.total = 0
  }

  reset() {
    this._total = 0
  }

  get total() {
    return this._total
  }

  set total(value) {
    this._total = value
    this._items = []
    for (let i = 0; i < this._total; i++) {
      this._items.push(new ChunkItem(i))
    }
  }

  get items() {
    return this._items
  }

  get uploadingItems() {
    return this._items.filter(i => i.loading)
  }

  get loadingPercent() {
    if (this.total <= 0) return 0
    return (this.uploadingItems / this.total * 100).toFixed(2)
  }

  get loadingPercentStr() {
    return `${this.loadingPercent}%`
  }
}

class ChunkItem {
  constructor(index) {
    this.index = index
    this.loading = false
    this.loadingPercent = 10
  }

  get index() {
    return this._index
  }

  set index(value) {
    this._index = value
  }

  get name() {
    return `Chunk ${this.index + 1}`
  }

  get loadingPercentStr() {
    return `${this.loadingPercent}%`
  }
}
