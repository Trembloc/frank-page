import pdfUrlO7thA from '../../../Homilies/Ordinary7thA.pdf'
import pdfUrlO7thAa from '../../../Homilies/Ordinary7thAa.pdf'
import pdfUrlO7thB from '../../../Homilies/Ordinary7thB.pdf'
import pdfUrlO7thBa from '../../../Homilies/Ordinary7thBa.pdf'
import pdfUrlO7thBb from '../../../Homilies/Ordinary7thBb.pdf'
import pdfUrlO7thC from '../../../Homilies/Ordinary7thC.pdf'
import pdfUrlO7thCa from '../../../Homilies/Ordinary7thCa.pdf'

const O7th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 7th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO7thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 7th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO7thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 7th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO7thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 7th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO7thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 7th Week: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlO7thBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 7th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO7thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 7th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO7thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O7th;