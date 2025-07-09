import pdfUrlEaster5thA from '../../../Homilies/Easter5thA.pdf'
import pdfUrlEaster5thAa from '../../../Homilies/Easter5thAa.pdf'
import pdfUrlEaster5thB from '../../../Homilies/Easter5thB.pdf'
import pdfUrlEaster5thC from '../../../Homilies/Easter5thC.pdf'
import pdfUrlEaster5thCa from '../../../Homilies/Easter5thCa.pdf'
import pdfUrlEaster5thCb from '../../../Homilies/Easter5thCb.pdf'


const Easter5 = () => {
  return (
    <>
      <section>
        <h2>Fifth Sunday of Easter: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlEaster5thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Fifth Sunday of Easter: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlEaster5thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Fifth Sunday of Easter: Year B</h2>
        <iframe id="pdf" src={pdfUrlEaster5thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Fifth Sunday of Easter: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlEaster5thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Fifth Sunday of Easter: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlEaster5thCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Fifth Sunday of Easter: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlEaster5thCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Easter5