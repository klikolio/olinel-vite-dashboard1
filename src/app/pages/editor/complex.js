import '@/build/vendors/quill/styles/snow.scss'
import 'katex/dist/katex.css'
import Quill from 'quill'
import katex from 'katex'

window.katex = katex

new Quill('#quill', {
  theme: 'snow',
  modules: {
    toolbar: [
      [{ font: ['poppins', 'roboto mono'] }, { size: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ script: 'super' }, { script: 'sub' }],
      [{ header: '1' }, { header: '2' }, 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }, { align: [] }],
      ['link', 'image', 'video', 'formula'],
      ['clean']
    ]
  }
})
