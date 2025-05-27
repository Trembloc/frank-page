
import pdfUrlPentecostVigilC from '../../../Homilies/PentecostVigilC.pdf'
import pdfUrlPentecostVigilCa from '../../../Homilies/PentecostVigilCa.pdf'
import pdfUrlPentecostVigilCb from '../../../Homilies/PentecostVigilCb.pdf'

const PentecostVigil = () => {
  return (
    <>
      <section>
        <h2>Pentecost Vigil: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlPentecostVigilC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Vigil: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlPentecostVigilCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Vigil: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlPentecostVigilCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default PentecostVigil