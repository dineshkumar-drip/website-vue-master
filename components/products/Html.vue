<template>
  <div class="container article-html">
    <div v-html="html" />
  </div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'

export const addClasses = (rawHtml) =>
  rawHtml
    // img: add classes
    .replace(/<\s*img[^>]*>/g, (img) =>
      img.replace(
        /.$/,
        'class="lazy shadow-sm d-block h-100 w-auto mx-auto" />'
      )
    )
    // h tag: add classes
    .replace(/<h[1-6][^>]*>/gi, (h) => h.replace(/.$/, ' class="mb-4">'))
    // p tag: add classes
    .replace(/<p[^>]*>/gi, (p) => p.replace(/.$/, ' class="">'))
    // a tag: add classes
    .replace(/<a[^>]*>/gi, (a) => a.replace(/.$/, ' class="">'))
    // table
    .replace(/<table[^>]*>/gi, (ul) =>
      ul.replace(/.$/, ' class="tw-border tw-border-collapse tw-mb-4">')
    )
    .replace(/<th[^>]*>/gi, (ul) =>
      ul.replace(/.$/, ' class="tw-border tw-border-primary tw-px-2 tw-py-1">')
    )
    .replace(/<td[^>]*>/gi, (ul) =>
      ul.replace(/.$/, ' class="tw-border tw-border-primary tw-px-2 tw-py-1">')
    )
    // ul and ol: classes
    .replace(/<ul[^>]*>/gi, (ul) =>
      ul.replace(/.$/, ' class="tw-text-xl tw-mb-4 tw-list-disc">')
    )
    .replace(/<ol[^>]*>/gi, (ol) =>
      ol.replace(/.$/, ' class="tw-text-xl tw-mb-4 tw-list-disc">')
    )
    .replace(/<iframe[^>]*>/gi, (iframe) =>
      iframe.replace(/.$/, ' class="mx-auto">')
    ) || ''
// code highlight using highlight js class
// .replace(/<code[^>]*>/ig, (code) => code.replace(/(?<=class=")(.*)(?=")/, (c) => `${c} hljs`));

export default {
  props: {
    data: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    html() {
      const h = marked(this.data, {
        highlight(md) {
          return highlight.highlightAuto(md).value
        }
      })

      let str = ''
      const anchors = h.split('<a href="http')
      str += anchors[0]
      for (let i = 1; i < anchors.length; i += 1) {
        if (anchors[i].indexOf('dripcapital.com') > -1) {
          str += `<a href="http${anchors[i]}`
        } else {
          str += `<a rel="nofollow" target="_blank" href="http${anchors[i]}`
        }
      }
      return addClasses(str)
    }
  },
  methods: {
    removeEmptyTags(rawHtml) {
      const emptyTagRegex = /<[^/>][^>]*><\/[^>]+>/
      if (emptyTagRegex.test(rawHtml)) {
        return this.removeEmptyTags(rawHtml.replace(emptyTagRegex, ''))
      }
      return rawHtml
    }
  }
}
</script>
