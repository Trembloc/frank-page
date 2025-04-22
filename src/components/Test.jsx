import pdfUrl from '../../Homilies/Advent1stCa.pdf'

const Test = () => {
//const pdfPath = process.env.NODE_ENV === "production" ? "../Homilies/Advent1stCa.pdf" : "./Homilies/Advent1stCa.pdf"
  return (
    <iframe id="pdf" src={pdfUrl} frameborder="0"></iframe>
  )
}

export default Test;