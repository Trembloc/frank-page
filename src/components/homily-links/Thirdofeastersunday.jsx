import pdfUrlEaster3rdA from '../../../Homilies/Easter3rdA.pdf'
import pdfUrlEaster3rdBa from '../../../Homilies/Easter3rdBa.pdf'
import pdfUrlEaster3rdB from '../../../Homilies/Easter3rdB.pdf'
import pdfUrlEaster3rdBb from '../../../Homilies/Easter3rdBb.pdf'
import pdfUrlEaster3rdC from '../../../Homilies/Easter3rdC.pdf'
import pdfUrlEaster3rdCa from '../../../Homilies/Easter3rdCa.pdf'
import pdfUrlEaster3rdCb from '../../../Homilies/Easter3rdCb.pdf'
import pdfUrlEaster3rdCc from '../../../Homilies/Easter3rdCc.pdf'


const Easter3 = () => {
  return (
    <>
      <section>
        <h2>Third Sunday of Easter: Year A</h2>
        <iframe id="pdf" src={pdfUrlEaster3rdA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Third Sunday of Easter: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlEaster3rdB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Third Sunday of Easter: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlEaster3rdBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Third Sunday of Easter: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlEaster3rdBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Third Sunday of Easter: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlEaster3rdC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Third Sunday of Easter: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlEaster3rdCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Third Sunday of Easter: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlEaster3rdCb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Third Sunday of Easter: Year C 4</h2>
        <iframe id="pdf" src={pdfUrlEaster3rdCc} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Easter3