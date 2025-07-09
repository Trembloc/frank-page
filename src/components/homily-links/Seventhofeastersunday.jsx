import pdfUrlEaster7th from '../../../Homilies/Easter7th.pdf'
import pdfUrlEaster7thA from '../../../Homilies/Easter7thA.pdf'
import pdfUrlEaster7thAa from '../../../Homilies/Easter7thAa.pdf'
import pdfUrlEaster7thB from '../../../Homilies/Easter7thB.pdf'
import pdfUrlEaster7thC from '../../../Homilies/Easter7thC.pdf'
import pdfUrlEaster7thCa from '../../../Homilies/Easter7thCa.pdf'


const Easter7 = () => {
  return (
    <>
      <section>
        <h2>Seventh Sunday of Easter</h2>
        <iframe id="pdf" src={pdfUrlEaster7th} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Seventh Sunday of Easter: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlEaster7thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Seventh Sunday of Easter: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlEaster7thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Seventh Sunday of Easter: Year B</h2>
        <iframe id="pdf" src={pdfUrlEaster7thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Seventh Sunday of Easter: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlEaster7thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Seventh Sunday of Easter: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlEaster7thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Easter7