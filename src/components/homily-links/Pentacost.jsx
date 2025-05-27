import pdfUrlPentecost from '../../../Homilies/Pentecost.pdf'
import pdfUrlPentecosta from '../../../Homilies/Pentecosta.pdf'
import pdfUrlPentecostAa from '../../../Homilies/PentecostAa.pdf'
import pdfUrlPentecostAb from '../../../Homilies/PentecostAb.pdf'
import pdfUrlPentecostB from '../../../Homilies/PentecostB.pdf'
import pdfUrlPentecostBa from '../../../Homilies/PentecostBa.pdf'
import pdfUrlPentecostC from '../../../Homilies/PentecostC.pdf'
import pdfUrlPentecostCa from '../../../Homilies/PentecostCa.pdf'
import pdfUrlPentecostCb from '../../../Homilies/PentecostCb.pdf'

const Pentecost = () => {
  return (
    <>
      <section>
        <h2>Pentecost Sunday</h2>
        <iframe id="pdf" src={pdfUrlPentecost} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Sunday: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlPentecosta} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Sunday: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlPentecostAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Sunday: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlPentecostAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Sunday: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlPentecostB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Sunday: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlPentecostBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Sunday: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlPentecostC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Sunday: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlPentecostCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Pentecost Sunday: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlPentecostCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Pentecost