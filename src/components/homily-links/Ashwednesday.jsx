import pdfUrlAshWedA from '../../../Homilies/AshWedA.pdf'
import pdfUrlAshWedB from '../../../Homilies/AshWedB.pdf'
import pdfUrlAshWedBa from '../../../Homilies/AshWedBa.pdf'
import pdfUrlAshWedBc from '../../../Homilies/AshWedBc.pdf'

const Ashwednesday = () => {
  return (
    <>
      <section>
        <h2>Ash Wednesday: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlAshWedA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ash Wednesday: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlAshWedB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ash Wednesday: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlAshWedBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ash Wednesday: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlAshWedBc} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Ashwednesday;