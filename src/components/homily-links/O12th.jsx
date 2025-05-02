import pdfUrlO12thA from '../../../Homilies/Ordinary12thA.pdf'
import pdfUrlO12thAb from '../../../Homilies/Ordinary12thAb.pdf'
import pdfUrlO12thB from '../../../Homilies/Ordinary12thB.pdf'
import pdfUrlO12thC from '../../../Homilies/Ordinary12thC.pdf'

const O12th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 12th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO12thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 12th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO12thAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 12th Week: Year B</h2>
        <iframe id="pdf" src={pdfUrlO12thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 12th Week: Year C</h2>
        <iframe id="pdf" src={pdfUrlO12thC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O12th;