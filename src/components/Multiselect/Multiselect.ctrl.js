import debounce from 'lodash/debounce'

export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    value: {},
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'label'
    },
    valueAs: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: true
    },
    onSearch: {
      type: Function,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    filterFunc: {
      type: Function,
      default: null
    },
    initSearch: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {
      show: false,
      model: [],
      keyword: '',
      mloading: false,
      arrayModel: [],
      lockKeywordChange: false
    }
  },
  created() {
    this.model = this.calcModel(this.value)
    this.updateArrayModel()
    if (this.initSearch !== false && this.onSearch) {
      this.onSearch(this.keyword, this.updateLoading)
    }
  },
  computed: {
    isDisabled() {
      return this.disabled !== false
    },
    valueContainerClass() {
      let res = []
      if (!this.multiple && this.show) {
        res.push('values-container-single-show')
      }
      return res
    },
    selectedTagClass() {
      let res = []
      if (!this.multiple) {
        res.push('selected-single-tag')
      }
      if (!this.multiple && this.show && !!this.keyword) {
        res.push('d-none')
      }
      return res
    },
    keywordClass() {
      let res = []
      if (!this.multiple && !this.show && this.model && this.model.length > 0) {
        res = ['d-none']
      }
      if (this.isDisabled && this.multiple && this.model && this.model.length > 0) {
        res = ['d-none']
      }
      return res
    },
    mplaceholder() {
      if (!this.multiple && this.show && this.value && this.value.length > 0) {
        return ''
      }
      if (this.multiple && this.value && this.value.length > 0) {
        return ''
      }
      return this.placeholder
    },
    filteredOptions() {
      if (!!this.onSearch || !this.keyword) {
        return this.options
      }
      if (this.filterFunc) {
        return this.filterFunc(this.options, this.keyword)
      }
      let k = `${this.keyword}`.toLowerCase()
      return this.options.filter(item => {
        return `${this.getOptionText(item)}`.toLowerCase().indexOf(k) >= 0
      })
    },
    mergedLoading() {
      return this.loading || this.mloading
    },
    mutableValue() {
      if (this.multiple) {
        return this.arrayModel
      } else {
        return this.arrayModel ? this.arrayModel[0] : null
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.processDismissDropdown)
    this.$el.focus = this.focusKeyword
  },
  destroyed() {
    document.removeEventListener('click', this.processDismissDropdown)
    clearTimeout(this.hideDropdownTimeout)
  },
  methods: {
    processDismissDropdown(e) {
      if (!(this.$el === e.target || this.$el.contains(e.target))) {
        this.showDropdown(false)
      }
    },
    focusKeyword() {
      if (this.isDisabled) {
        return
      }
      this.$refs.keyword.focus()
      this.showDropdown(true)
    },
    showDropdown(isShow = true) {
      if (this.isDisabled) {
        return
      }
      this.show = isShow
      this.$nextTick(function () {
        if (this.show) {
          this.$refs.keyword.focus()
        }
        if (!this.show) {
          this.keyword = ''
        }
      })
    },
    getOptionValue(item) {
      return this.valueAs && item ? item[this.valueAs] : item
    },
    getOptionText(item) {
      return this.label ? `${item[this.label] || item}` : `${item}`
    },
    getModelText(value) {
      let idx = this.model.indexOf(value)
      if (this.arrayModel && this.arrayModel[idx]) {
        return this.getOptionText(this.arrayModel[idx]) || value
      }
      return value
    },
    isSelectedValue(value) {
      return !!this.model.find(val => val === value)
    },
    selectValue(value) {
      if (this.isDisabled) {
        return
      }
      clearTimeout(this.hideDropdownTimeout)
      if (this.multiple) {
        this.selectMultiValue(value)
      } else {
        this.model = [value]
      }
      this.showDropdown(false)
      this.updateArrayModel()
    },
    selectMultiValue(value) {
      if (this.isSelectedValue(value)) {
        this.model = this.model.filter(val => val !== value)
      } else {
        this.model.push(value)
      }
    },
    willHideDropdown() {
      this.hideDropdownTimeout = setTimeout(() => {
        this.showDropdown(false)
      }, 200)
    },
    processInputKeyword(e) {
      if (!this.keyword && e && e.keyCode === 8) {
        this.model.pop()
      }
    },
    resetModel() {
      if (this.isDisabled) {
        return
      }
      this.model = []
    },
    calcModel(value) {
      if (this.multiple) {
        return Array.isArray(value) ? value : []
      } else {
        return value ? [value] : []
      }
    },
    calcValue() {
      if (this.multiple) {
        return this.model
      } else {
        return this.model[0] ? this.model[0] : null
      }
    },
    updateArrayModel() {
      let temps = this.arrayModel
      this.arrayModel = []
      this.model.forEach((val) => {
        let dataFromOption = this.options.find(option => this.getOptionValue(option) === val)
        if (dataFromOption) {
          this.arrayModel.push(dataFromOption)
        } else {
          let dataFromTemps = temps.find(option => this.getOptionValue(option) === val)
          if (dataFromTemps) {
            this.arrayModel.push(dataFromTemps)
          } else {
            this.arrayModel.push(val)
          }
        }
      })
    },
    updateLoading(isLoading = false) {
      this.mloading = isLoading
    }
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.updateArrayModel()
      }
    },
    model: {
      deep: true,
      handler() {
        let value = this.calcValue()
        if (this.multiple) {
          if (JSON.stringify(this.value) !== JSON.stringify(value) && ((!!this.value && this.value.length > 0) || (!!value && value.length > 0))) {
            this.updateArrayModel()
            this.$emit('input', value)
            this.$emit('change', value)
          }
        } else {
          if (JSON.stringify(this.value) !== JSON.stringify(value) && (!!this.value || (!!value))) {
            this.updateArrayModel()
            this.$emit('input', value)
            this.$emit('change', value)
          }
        }
      }
    },
    value: {
      deep: true,
      handler() {
        let model = this.calcModel(this.value)
        if (JSON.stringify(this.model) !== JSON.stringify(model)) {
          this.model = model
          this.updateArrayModel()
        }
      }
    },
    keyword: debounce(function () {
      if (!!this.onSearch && this.show) {
        this.onSearch(this.keyword, this.updateLoading)
      }
    }, 300)
  }
}
