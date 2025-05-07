import pdfUrlO14thA from '../../../Homilies/Ordinary14thA.pdf'
import pdfUrlO14thAb from '../../../Homilies/Ordinary14thAa.pdf'
import pdfUrlO14thB from '../../../Homilies/Ordinary14thB.pdf'
import pdfUrlO14thBa from '../../../Homilies/Ordinary14thBa.pdf'
import pdfUrlO14thC from '../../../Homilies/Ordinary14thC.pdf'
import pdfUrlO14thCa from '../../../Homilies/Ordinary14thCa.pdf'
import pdfUrlO14thCb from '../../../Homilies/Ordinary14thCb.pdf'

const O14th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 14th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO14thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 14th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO14thAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 14th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO14thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 14th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO14thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 14th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO14thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 14th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO14thCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 14th Week: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlO14thCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O14th;