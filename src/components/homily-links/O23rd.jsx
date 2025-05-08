import pdfUrlO23rdA from '../../../Homilies/Ordinary23rdA.pdf'
import pdfUrlO23rdAa from '../../../Homilies/Ordinary23rdAa.pdf'
import pdfUrlO23rdAb from '../../../Homilies/Ordinary23rdAb.pdf'
import pdfUrlO23rdAc from '../../../Homilies/Ordinary23rdAc.pdf'
import pdfUrlO23rdB from '../../../Homilies/Ordinary23rdB.pdf'
import pdfUrlO23rdC from '../../../Homilies/Ordinary23rdC.pdf'
import pdfUrlO23rdCa from '../../../Homilies/Ordinary23rdCa.pdf'

const O23rd = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 23rd Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO23rdA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 23rd Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO23rdAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 23rd Week: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlO23rdAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 23rd Week: Year A 4</h2>
        <iframe id="pdf" src={pdfUrlO23rdAc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 23rd Week: Year B</h2>
        <iframe id="pdf" src={pdfUrlO23rdB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 23rd Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO23rdC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 23rd Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO23rdCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O23rd;