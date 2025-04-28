import pdfUrlAssumption from '../../../Homilies/Assumption.pdf'
import pdfUrlAssumptionA from '../../../Homilies/AssumptionA.pdf'
import pdfUrlAssumptionAa from '../../../Homilies/AssumptionAa.pdf'
const Assumption = () => {
  return (
    <>
      <section>
        <h2>Assumption</h2>
        <iframe id="pdf" src={pdfUrlAssumption} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Assumption: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlAssumptionA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Assumption: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlAssumptionAa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Assumption;