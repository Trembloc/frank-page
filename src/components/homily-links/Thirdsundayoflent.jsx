import pdfUrlThirdLentA from '../../../Homilies/Lent3rdA.pdf'
import pdfUrlThirdLentAa from '../../../Homilies/Lent3rdAa.pdf'
import pdfUrlThirdLentB from '../../../Homilies/Lent3rdB.pdf'
import pdfUrlThirdLentBa from '../../../Homilies/Lent3rdBa.pdf'
import pdfUrlThirdLentBb from '../../../Homilies/Lent3rdBb.pdf'
import pdfUrlThirdLentC from '../../../Homilies/Lent3rdC.pdf'
import pdfUrlThirdLentCa from '../../../Homilies/Lent3rdCa.pdf'

const ThirdLent = () => {
  return (
    <>
      <section>
        <h2>ThirdLent: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlThirdLentA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>ThirdLent: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlThirdLentAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>ThirdLent: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlThirdLentB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>ThirdLent: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlThirdLentBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>ThirdLent: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlThirdLentBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>ThirdLent: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlThirdLentC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>ThirdLent: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlThirdLentCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default ThirdLent;