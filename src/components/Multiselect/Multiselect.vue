<template>
  <div class="mmultiselect-container">
    <button :disabled="isDisabled" @click.prevent="showDropdown(true)" class="mmultiselect text-left" type="button"
            tabindex="-1">
      <div @click.prevent="showDropdown(!isDisabled)" class="values-container" :class="valueContainerClass">
        <label v-for="(val, idx) in model" :key="idx" class="selected-tag" :class="selectedTagClass" tabindex="-1">
          <slot name="selected-option"
                v-bind="(typeof arrayModel[idx] === 'object')?arrayModel[idx]:{[label]: arrayModel[idx]}">
            {{getModelText(val)}}
          </slot>
          <a v-if="multiple" @click.prevent.stop="selectValue(val)" href="#" class="remove" tabindex="-1">&times;</a>
        </label>
        <input v-model="keyword" :placeholder="mplaceholder" @keydown="processInputKeyword" @focus="showDropdown(true)"
               @blur="willHideDropdown" @click.prevent="showDropdown(true)" :disabled="isDisabled" ref="keyword"
               type="text" :class="keywordClass" class="selected-tag search-keyword"
               >
               <!-- :style="mplaceholder ? {width: '100%'} : {width: 'auto'}" -->
      </div>
      <template v-if="mergedLoading">
        <span class="loading-icon">
          <span class="fa-lg fa fa-spin fa-circle-o-notch"></span>
        </span>
      </template>
      <template v-else>
        <a v-if="clearable && !isDisabled && clearable && model.length > 0" @click.prevent.stop="resetModel" href="#"
           class="clear-icon" tabindex="-1">&times;</a>
        <a @click.prevent.stop="showDropdown(!show)" href="#" class="dropdown-icon" tabindex="-1">
          <span class="fa" :class="{'fa-angle-down': !show, 'fa-angle-up': show}"></span>
        </a>
      </template>
    </button>
    <div ref="dropdown" class="options-container" :class="{'d-block': show}">
      <slot name="before-options" class="option-item"></slot>
      <a @click.prevent="selectValue(getOptionValue(option))"
         :class="{'active': isSelectedValue(getOptionValue(option))}" v-for="(option, idx) in filteredOptions"
         :key="idx" class="option-item" href="#" tabindex="-1">
        <slot name="option" v-bind="(typeof option === 'object')?option:{[label]: option}"> {{getOptionText(option)}}
        </slot>
      </a>
      <div @click.prevent="showDropdown(false)" v-if="!filteredOptions.length" class="option-item">
        <slot name="no-options"> Sorry, no matching options.</slot>
      </div>
      <slot name="after-options" class="option-item"></slot>
    </div>
  </div>
</template>
<script src="./Multiselect.ctrl.js"></script>
<style scoped>
.d-block {
  display: block !important;
}

.d-none {
  display: none !important;
}

.btn-outline-primary:not(:disabled):not(.disabled).active,
.btn-outline-primary:not(:disabled):not(.disabled):active,
.show > .btn-outline-primary.dropdown-toggle {
  background: none !important;
}

.mmultiselect-container {
  position: relative;
}

.mmultiselect-container.form-control {
  border: none !important;
  padding: 0 !important;
  height: auto !important;
  z-index: inherit !important;
}

.mmultiselect-container .mmultiselect {
  border: 1px solid #dedede;
  border-radius: 2px;
  width: 100%;
  min-height: 34px;
  padding: 0;
  display: block;
  font-size: 12px;
  cursor: text;
  position: relative;
  background-color: #fff;
}

.form-material .mmultiselect-container .mmultiselect {
  background: transparent;
}

.mmultiselect-container .mmultiselect:disabled {
  background-color: #fafafa;
  cursor: not-allowed;
}

.is-invalid > .mmultiselect,
[aria-invalid="true"] > .mmultiselect {
  border-color: #dc3545;
}

.mmultiselect-container .mmultiselect .values-container {
  display: block;
  white-space: normal;
  padding: 1px 1.7rem 1px 1rem;
  line-height: 18px;
  float: left;
  width: 100%;
}

.mmultiselect-container .selected-tag {
  max-width: 100%;
  float: left;
  line-height: 24px;
  margin: 2px 5px 2px 0px;
  border: none;
  color: #646464;
  border-radius: .25rem;
  font-size: 14px;
  padding: 0px 18px 0px 6px;
  background-color: #cee6fc;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  outline: none !important;
}

.mmultiselect-container .selected-tag:first-child {
  /*margin-left: -6px;*/
}

.mmultiselect-container .values-container-single-show {
}

.mmultiselect-container .values-container-single-show .selected-tag {
  opacity: 0;
}

.mmultiselect-container .values-container-single-show > .search-keyword {
  opacity: 1 !important;
  display: block !important;
  position: absolute;
  top: 50%;
  left: 10px;
  width: calc(100% - 30px);
  transform: translateY(-50%);
}

.mmultiselect-container .selected-tag.selected-single-tag {
  background-color: transparent;
  padding: 1px 0 1px 0;
  color: #646464;
}

.mmultiselect-container .search-keyword {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  line-height: 1.42857143;
  /*font-size: 1em;*/
  display: inline-block;
  border: none;
  outline: none;
  margin: 0;
  padding: 0 2px;
  width: 10em;
  max-width: 100%;
  background: none;
  position: relative;
  box-shadow: none;
  height: 30px;
}

.mmultiselect-container .selected-tag .remove {
  color: #2779bd;
  font-size: 16px;
  line-height: 1;
  margin-left: 6px;
  opacity: 1;
  text-shadow: none;
  font-weight: 500;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
}

.mmultiselect-container .dropdown-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
}

.mmultiselect-container .clear-icon {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9d9d9d;
  font-size: 20px;
}

.mmultiselect-container .loading-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #25628f;
}

.options-container {
  position: absolute;
  display: none;
  float: left;
  width: 100%;
  height: auto;
  max-height: 360px;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  top: calc(100% - 1px);
  left: 0;
  border: 1px solid rgba(0, 0, 0, .15);
  z-index: 5;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .2);
}

.dropup > .options-container {
  top: auto;
  bottom: calc(100% - 1px);
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, .2);
}

.options-container .option-item {
  display: block;
  float: left;
  width: 100%;
  padding: 10px 14px;
  margin: 0 0 1px 0;
  color: #333;
}

.options-container .option-item.active {
  background-color: #e2effe;
}

.options-container a.option-item:hover {
  background-color: #eff6fe;
}

.form-material .mmultiselect-container .mmultiselect {
  border-width: 0 0 1px 0;
}
</style>
