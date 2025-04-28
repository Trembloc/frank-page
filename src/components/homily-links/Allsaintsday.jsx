import pdfUrlAllsaints from '../../../Homilies/All Saints.pdf'
import pdfUrlAllsaintsA from '../../../Homilies/All SaintsA.pdf'
import pdfUrlAllsaintsB from '../../../Homilies/All SaintsB.pdf'
import pdfUrlAllsaintsC from '../../../Homilies/All SaintsC.pdf'


const Allsaints = () => {
  return (
    <>
      <section>
        <h2>All Saints</h2>
        <iframe id="pdf" src={pdfUrlAllsaints} frameborder="0"></iframe>
      </section>
      <section>
        <h2>All Saints: Year A </h2>
        <iframe id="pdf" src={pdfUrlAllsaintsA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>All Saints: Year B</h2>
        <iframe id="pdf" src={pdfUrlAllsaintsB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>All Saints: Year C</h2>
        <iframe id="pdf" src={pdfUrlAllsaintsC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Allsaints;