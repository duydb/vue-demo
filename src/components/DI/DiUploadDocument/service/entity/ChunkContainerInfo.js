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
    this._processIndex = 0
    this._items = []
    for (let i = 0; i < this._total; i++) {
      this._items.push(new ChunkItem(i))
    }
  }

  next() {
    this._processIndex += 1
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

  get processItem() {
    return this._items[this._processIndex]
  }

  get prevProcessItem() {
    return this._items[this._processIndex - 1]
  }
}

class ChunkItem {
  constructor(index) {
    this.index = index
    this.loading = false
    this.loadingPercent = 10
    this.totalLines = 0
    this.totalCharacter = 0
    this.firstLine = ''
    this.lastLine = ''
    this.fixedFirstLine = ''
    this.fixedLastLine = ''
    this.lines = []
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
