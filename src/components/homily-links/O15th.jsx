import pdfUrlO15thA from '../../../Homilies/Ordinary15thA.pdf'
import pdfUrlO15thB from '../../../Homilies/Ordinary15thB.pdf'
import pdfUrlO15thBa from '../../../Homilies/Ordinary15thBa.pdf'
import pdfUrlO15thBb from '../../../Homilies/Ordinary15thBb.pdf'
import pdfUrlO15thBc from '../../../Homilies/Ordinary15thBc.pdf'
import pdfUrlO15thC from '../../../Homilies/Ordinary15thC.pdf'
import pdfUrlO15thCa from '../../../Homilies/Ordinary15thCa.pdf'

const O15th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 15th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO15thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 15th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO15thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 15th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO15thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 15th Week: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlO15thBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 15th Week: Year B 4</h2>
        <iframe id="pdf" src={pdfUrlO15thBc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 15th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO15thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 15th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO15thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O15th;