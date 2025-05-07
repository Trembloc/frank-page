import pdfUrlO20thA from '../../../Homilies/Ordinary20thA.pdf'
import pdfUrlO20thAa from '../../../Homilies/Ordinary20thAa.pdf'
import pdfUrlO20thB from '../../../Homilies/Ordinary20thB.pdf'
import pdfUrlO20thBa from '../../../Homilies/Ordinary20thBa.pdf'
import pdfUrlO20thC from '../../../Homilies/Ordinary20thC.pdf'
import pdfUrlO20thCa from '../../../Homilies/Ordinary20thCa.pdf'
import pdfUrlO20thCb from '../../../Homilies/Ordinary20Cb.pdf'
const O20th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 20th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO20thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 20th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO20thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 20th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO20thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 20th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO20thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 20th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO20thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 20th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO20thCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 20th Week: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlO20thCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O20th;