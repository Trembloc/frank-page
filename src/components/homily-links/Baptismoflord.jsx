import pdfUrlBaptismA from '../../../Homilies/BaptismOfLordA.pdf'
import pdfUrlBaptismAa from '../../../Homilies/BaptismOfLordAa.pdf'
import pdfUrlBaptismB from '../../../Homilies/BaptismOfLordB.pdf'
import pdfUrlBaptismC from '../../../Homilies/BaptismOfLordC.pdf'
const Baptismoflord = () => {
  return (
    <>
      <section>
        <h2>Baptism Of Lord: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlBaptismA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Baptism Of Lord: Year A 2 </h2>
        <iframe id="pdf" src={pdfUrlBaptismAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Baptism Of Lord: Year B</h2>
        <iframe id="pdf" src={pdfUrlBaptismB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Baptism Of Lord: Year C</h2>
        <iframe id="pdf" src={pdfUrlBaptismC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Baptismoflord;