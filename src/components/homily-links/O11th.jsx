import pdfUrlO11thA from '../../../Homilies/Ordinary11thA.pdf'
import pdfUrlO11thB from '../../../Homilies/Ordinary11thB.pdf'
import pdfUrlO11thBa from '../../../Homilies/Ordinary11thBa.pdf'
import pdfUrlO11thBb from '../../../Homilies/Ordinary11thBb.pdf'
import pdfUrlO11thBc from '../../../Homilies/Ordinary11thBc.pdf'
import pdfUrlO11thC from '../../../Homilies/Ordinary11thC.pdf'
import pdfUrlO11thCa from '../../../Homilies/Ordinary11thCa.pdf'

const O11th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 11th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO11thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 11th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO11thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 11th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO11thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 11th Week: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlO11thBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 11th Week: Year B 4</h2>
        <iframe id="pdf" src={pdfUrlO11thBc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 11th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO11thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 11th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO11thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O11th;