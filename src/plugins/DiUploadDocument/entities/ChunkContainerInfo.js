export class ChunkContainerInfo {
  constructor() {
    this.total = 0
  }

  reset() {
    this.total = 0
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

  get successItems() {
    return this._items.filter(i => i.success)
  }

  get loadingPercent() {
    if (this.total <= 0) return 0
    return parseInt(this.successItems.length / this.total * 100)
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
    this.error = ''
    this.success = false
    this.loadingPercent = 0
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
