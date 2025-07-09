import pdfUrlEaster from '../../../Homilies/Easter.pdf'


const Easter = () => {
  return (
    <>
      <section>
        <h2>Easter</h2>
        <iframe id="pdf" src={pdfUrlEaster} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Easter