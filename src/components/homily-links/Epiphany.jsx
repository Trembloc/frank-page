import pdfUrlEpiphanyA from '../../../Homilies/EpiphanyA.pdf'
import pdfUrlEpiphanyAa from '../../../Homilies/EpiphanyAa.pdf'
import pdfUrlEpiphanyB from '../../../Homilies/EpiphanyB.pdf'
import pdfUrlEpiphanyBa from '../../../Homilies/EpiphanyBa.pdf'
import pdfUrlEpiphanyBb from '../../../Homilies/EpiphanyBb.pdf'
import pdfUrlEpiphanyC from '../../../Homilies/EpiphanyC.pdf'
import pdfUrlEpiphanyCa from '../../../Homilies/EpiphanyCa.pdf'

const Epiphany = () => {
  return (
    <>
      <section>
        <h2>Epiphany: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlEpiphanyA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Epiphany: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlEpiphanyAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Epiphany: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlEpiphanyB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Epiphany: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlEpiphanyBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Epiphany: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlEpiphanyBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Epiphany: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlEpiphanyC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Epiphany: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlEpiphanyCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Epiphany;