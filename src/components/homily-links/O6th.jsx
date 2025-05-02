import pdfUrlO6thA from '../../../Homilies/Ordinary6thA.pdf'
import pdfUrlO6thAa from '../../../Homilies/Ordinary6thAa.pdf'
import pdfUrlO6thB from '../../../Homilies/Ordinary6thB.pdf'
import pdfUrlO6thBa from '../../../Homilies/Ordinary6thBa.pdf'
import pdfUrlO6thBb from '../../../Homilies/Ordinary6thBb.pdf'
import pdfUrlO6thBc from '../../../Homilies/Ordinary6thBc.pdf'
import pdfUrlO6thC from '../../../Homilies/Ordinary6thC.pdf'

const O6th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 6th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO6thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 6th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO6thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 6th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO6thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 6th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO6thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 6th Week: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlO6thBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 6th Week: Year B 4</h2>
        <iframe id="pdf" src={pdfUrlO6thBc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 6th Week: Year C</h2>
        <iframe id="pdf" src={pdfUrlO6thC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O6th;