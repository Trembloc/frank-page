import pdfUrlO24thA from '../../../Homilies/Ordinary24thA.pdf'
import pdfUrlO24thAa from '../../../Homilies/Ordinary24thAa.pdf'
import pdfUrlO24thB from '../../../Homilies/Ordinary24thB.pdf'
import pdfUrlO24thBa from '../../../Homilies/Ordinary24thBa.pdf'
import pdfUrlO24thBb from '../../../Homilies/Ordinary24thBb.pdf'
import pdfUrlO24thC from '../../../Homilies/Ordinary24thC.pdf'
import pdfUrlFirstHomily from '../../../Homilies/Ordinary24thA1stHomily.pdf'

const O24th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 24th Week: Frank's Very First Homily - Year A</h2>
        <iframe id="pdf" src={pdfUrlFirstHomily} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 24th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO24thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 24th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO24thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 24th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO24thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 24th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO24thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 24th Week: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlO24thBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 24th Week: Year C</h2>
        <iframe id="pdf" src={pdfUrlO24thC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O24th;