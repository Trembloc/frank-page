import pdfUrlO21stA from '../../../Homilies/Ordinary21stA.pdf'
import pdfUrlO21stB from '../../../Homilies/Ordinary21stB.pdf'
import pdfUrlO21stBa from '../../../Homilies/Ordinary21stBa.pdf'
import pdfUrlO21stBc from '../../../Homilies/Ordinary21stBc.pdf'
import pdfUrlO21stC from '../../../Homilies/Ordinary21stC.pdf'
import pdfUrlO21stCa from '../../../Homilies/Ordinary21stCa.pdf'
import pdfUrlO21stCb from '../../../Homilies/Ordinary21stCb.pdf'
import pdfUrlO21stCc from '../../../Homilies/Ordinary21stCc.pdf'
const O21st = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 21st Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO21stA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 21st Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO21stB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 21st Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO21stBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 21st Week: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlO21stBc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 21st Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO21stC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 21st Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO21stCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 21st Week: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlO21stCb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 21st Week: Year C 4</h2>
        <iframe id="pdf" src={pdfUrlO21stCc} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O21st;