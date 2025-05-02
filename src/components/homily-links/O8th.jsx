import pdfUrlO8thA from '../../../Homilies/Ordinary8thA.pdf'
import pdfUrlO8thB from '../../../Homilies/Ordinary8thB.pdf'
import pdfUrlO8thC from '../../../Homilies/Ordinary8thC.pdf'
import pdfUrlO8thCa from '../../../Homilies/Ordinary8thCa.pdf'

const O8th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 8th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO8thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 8th Week: Year B</h2>
        <iframe id="pdf" src={pdfUrlO8thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 8th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO8thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 8th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO8thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O8th;