import pdfUrlLentpalmA from '../../../Homilies/LentPalmA.pdf'
import pdfUrlLentpalmAa from '../../../Homilies/LentPalmAa.pdf'
import pdfUrlLentpalmAb from '../../../Homilies/LentPalmAb.pdf'
import pdfUrlLentpalmB from '../../../Homilies/LentPalmB.pdf'
import pdfUrlLentpalmC from '../../../Homilies/LentPalmC.pdf'
import pdfUrlLentpalmCa from '../../../Homilies/LentPalmCa.pdf'

const PalmSunday = () => {
  return (
    <>
      <section>
        <h2>Palm Sunday: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlLentpalmA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Palm Sunday: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlLentpalmAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Palm Sunday: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlLentpalmAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Palm Sunday: Year B</h2>
        <iframe id="pdf" src={pdfUrlLentpalmB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Palm Sunday: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlLentpalmC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Palm Sunday: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlLentpalmCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default PalmSunday