import pdfUrlO4thA from '../../../Homilies/Ordinary4thA.pdf'
import pdfUrlO4thB from '../../../Homilies/Ordinary4thB.pdf'
import pdfUrlO4thBa from '../../../Homilies/Ordinary4thBa.pdf'
import pdfUrlO4thBb from '../../../Homilies/Ordinary4thBb.pdf'
import pdfUrlO4thBc from '../../../Homilies/Ordinary4thBc.pdf'
import pdfUrlO4thC from '../../../Homilies/Ordinary4thC.pdf'
import pdfUrlO4thCa from '../../../Homilies/Ordinary4thCa.pdf'
import pdfUrlO4thCb from '../../../Homilies/Ordinary4thCb.pdf'

const O4th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 4th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO4thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 4th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO4thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 4th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO4thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 4th Week: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlO4thBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 4th Week: Year B 4</h2>
        <iframe id="pdf" src={pdfUrlO4thBc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 4th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO4thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 4th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO4thCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 4th Week: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlO4thCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O4th;