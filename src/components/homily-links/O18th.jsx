import pdfUrlO18thA from '../../../Homilies/Ordinary18thA.pdf'
import pdfUrlO18thAa from '../../../Homilies/Ordinary18thAa.pdf'
import pdfUrlO18thB from '../../../Homilies/Ordinary18thB.pdf'
import pdfUrlO18thBa from '../../../Homilies/Ordinary18thBa.pdf'
import pdfUrlO18thC from '../../../Homilies/Ordinary18thC.pdf'
const O18th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 18th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO18thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 18th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO18thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 18th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO18thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 18th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO18thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 18th Week: Year C</h2>
        <iframe id="pdf" src={pdfUrlO18thC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O18th;