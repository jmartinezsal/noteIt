import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


function QuillEditor({ content, setContent }) {

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ font: [ 'monospace','sans-serif', 'serif'] }],
      [{ size: [] }],
      [{
        color: ['#000000', '#2F4F4F',
          '#708090', '#778899',
          '#808080', '#696969',
          '#A9A9A9', '#C0C0C0',
          '#D3D3D3', '#DCDCDC',
          '#FFE4E1', '#FFF0F5',
          '#FAF0E6', '#FAEBD7',
          '#FFC0CB', '#FFB6C1',
          '#FF69B4', '#EE82EE',
          '#800080', '#4B0082',
          '#FF0000', '#8B0000',
          '#FFA500', '#FFD700',
          '#FFFF00', '#00FF00',
          '#008000', '#006400',
          '#008080', '#00FFFF',
          '#0000FF', '#000080',
          '#A52A2A', '#D2B48C'
        ]
      }],
      [{
        background: [
          '#000000', '#2F4F4F',
          '#708090', '#778899',
          '#808080', '#696969',
          '#A9A9A9', '#C0C0C0',
          '#D3D3D3', '#DCDCDC',
          '#FFE4E1', '#FFF0F5',
          '#FAF0E6', '#FAEBD7',
          '#FFC0CB', '#FFB6C1',
          '#FF69B4', '#EE82EE',
          '#800080', '#4B0082',
          '#FF0000', '#8B0000',
          '#FFA500', '#FFD700',
          '#FFFF00', '#00FF00',
          '#008000', '#006400',
          '#008080', '#00FFFF',
          '#0000FF', '#000080',
          '#A52A2A', '#D2B48C'
        ]
      }]
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" },
      { align: [] }],
      ["link", "image", "video"],
      ["clean"]
    ]
  }

  const formats = [
    'header', "bold", "italic",
    "underline", "strike", "blockquote",
    "font", "size", "color", "background",
    "list", "indent", "align",
    "link", "image", "video",
  ]

  return (


      <ReactQuill
        theme="snow"
        className="notes-editor"
        modules={modules}
        formats={formats}
        value={content}
        onChange={setContent}
        placeholder="Start writing and save whenver you are done..."
        style={{
          height: "85%",
          width: "100%",
          backgroundColor: "white",
          outline:"none"
        }}
      />


  )
}

export default QuillEditor;
