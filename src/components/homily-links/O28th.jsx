import pdfUrlO28thA from '../../../Homilies/Ordinary28thA.pdf'
import pdfUrlO28thAa from '../../../Homilies/Ordinary28thAa.pdf'
import pdfUrlO28thB from '../../../Homilies/Ordinary28thB.pdf'
import pdfUrlO28thBa from '../../../Homilies/Ordinary28thBa.pdf'
import pdfUrlO28thC from '../../../Homilies/Ordinary28thC.pdf'
import pdfUrlO28thCa from '../../../Homilies/Ordinary28thCa.pdf'


const O28th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 28th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO28thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 28th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO28thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 28th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO28thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 28th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO28thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 28th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO28thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 28th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO28thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O28th;