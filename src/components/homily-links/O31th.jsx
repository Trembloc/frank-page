import pdfUrlO31stA from '../../../Homilies/Ordinary31stA.pdf'
import pdfUrlO31stAa from '../../../Homilies/Ordinary31stAa.pdf'
import pdfUrlO31stAb from '../../../Homilies/Ordinary31stAb.pdf'
import pdfUrlO31stB from '../../../Homilies/Ordinary31stB.pdf'
import pdfUrlO31stBa from '../../../Homilies/Ordinary31stBa.pdf'
import pdfUrlO31stC from '../../../Homilies/Ordinary31stC.pdf'
import pdfUrlO31stCa from '../../../Homilies/Ordinary31stCa.pdf'


const O31st = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 31st Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO31stA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 31st Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO31stAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 31st Week: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlO31stAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 31st Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO31stB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 31st Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO31stBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 31st Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO31stC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 31st Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO31stCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O31st;