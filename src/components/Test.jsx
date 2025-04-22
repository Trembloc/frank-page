const Test = () => {
const pdfPath = process.env.NODE_ENV === "production" ? "../Homilies/Advent1stCa.pdf" : "./Homilies/Advent1stCa.pdf"
  return (
    <iframe id="pdf" src={pdfPath} frameborder="0"></iframe>
  )
}

export default Test;