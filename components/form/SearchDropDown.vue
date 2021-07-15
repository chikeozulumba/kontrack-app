<template>
  <div class="relative">
    <div :id="name" class="relative"></div>
  </div>
</template>

<script>
import Taggle from 'taggle'

export default {
  name: 'SearchDropDown',
  props: {
    haystack: {
      required: true,
      default: () => [],
      type: Array,
    },
    name: {
      required: true,
      default: '',
      type: String,
    },
    max: {
      required: true,
      default: 10,
      type: Number,
    },
  },
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.taggle = new Taggle(this.name, {
      placeholder: false,
      allowDuplicates: false,
      onTagAdd: this.onAddTag,
      onTagRemove: this.onRemoveTag,
      maxTags: this.max,
    })
    // const container = this.taggle.getContainer()
    // const input = this.taggle.getInput()
    // eslint-disable-next-line no-undef
    // $(input).autocomplete({
    //   source: this.haystack,
    //   appendTo: container,
    //   position: { at: 'left bottom', of: container },
    //   select: (event, data) => {
    //     event.preventDefault()
    //     if (event.which === 1) {
    //       this.taggle.add(data.item.label)
    //       this.items.push(data.item)
    //     }
    //   },
    // })
  },
  methods: {
    onAddTag(evt, tag) {
      const fTag = this.items.find((it) => it.toLowerCase() === tag)
      if (!fTag) {
        this.items.push(tag)
      }
    },
    onRemoveTag(evt, tag) {
      const index = this.items.findIndex((it) => it.toLowerCase() === tag)
      if (index > -1) {
        this.items.splice(index, 1)
      }
    },
  },
}
</script>

<style>
.textarea {
  width: 100%;
  height: 300px;
  border: 1px solid red;
  padding: 8px;
}

.taggle_text {
  font-size: 0.8rem !important;
  font-family: 'BR Firma Light';
}

.taggle_list {
  padding: 0;
  margin: 0;
  line-height: 2.5;
  width: 100%;
  /* display: flex; */
}

.taggle_input {
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  font-size: 0.8rem !important;
  font-family: 'BR Firma Light';
}

.taggle_input:focus {
  border: none;
  box-shadow: none;
}

.taggle_list li {
  display: inline;
  vertical-align: baseline;
  white-space: nowrap;
  font-weight: 500;
  margin-bottom: 5px;
  width: 100%;
}

.taggle_list .taggle {
  margin-right: 8px;
  background: #e2e1df;
  padding: 5px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  width: fit-content;
}

.taggle_list .taggle_hot {
  background: #cac8c4;
}

.taggle_list .taggle .close {
  font-size: 1.1rem;
  position: absolute;
  top: 10px;
  right: 3px;
  text-decoration: none;
  padding: 0;
  line-height: 0.5;
  color: #ccc;
  color: rgba(0, 0, 0, 0.2);
  padding-bottom: 4px;
  display: inline-block;
  opacity: 0;
  pointer-events: none;
  border: 0;
  background: none;
  cursor: pointer;
}

.taggle_list .taggle:hover {
  padding: 5px;
  padding-right: 15px;
  background: #ccc;
  transition: all 0.3s;
}

.taggle_list .taggle:hover > .close {
  opacity: 1;
  pointer-events: auto;
}

.taggle_list .taggle .close:hover {
  color: #990033;
}

.taggle_placeholder {
  position: absolute;
  color: #ccc;
  top: 24px;
  left: 16px;
  transition: opacity, 0.25s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.taggle_input {
  padding: 8px;
  padding-left: 0;
  margin-top: -5px;
  background: none;
  max-width: 100%;
  width: fit-content;
}

.taggle_sizer {
  padding: 0;
  margin: 0;
  position: absolute;
  top: -500px;
  z-index: -1;
  visibility: hidden;
  display: none;
}
</style>
