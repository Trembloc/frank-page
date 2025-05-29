import pdfUrlEaster2ndA from '../../../Homilies/Easter2ndA.pdf'
import pdfUrlEaster2ndBa from '../../../Homilies/Easter2ndBa.pdf'
import pdfUrlEaster2ndB from '../../../Homilies/Easter2ndB.pdf'
import pdfUrlEaster2ndBb from '../../../Homilies/Easter2ndBb.pdf'
import pdfUrlEaster2ndC from '../../../Homilies/Easter2ndC.pdf'
import pdfUrlEaster2ndCa from '../../../Homilies/Easter2ndCa.pdf'


const Easter2 = () => {
  return (
    <>
      <section>
        <h2>Second Sunday of Easter: Year A</h2>
        <iframe id="pdf" src={pdfUrlEaster2ndA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Second Sunday of Easter: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlEaster2ndB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Second Sunday of Easter: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlEaster2ndBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Second Sunday of Easter: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlEaster2ndBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Second Sunday of Easter: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlEaster2ndC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Second Sunday of Easter: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlEaster2ndCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Easter2