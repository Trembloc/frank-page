import pdfUrlO19thA from '../../../Homilies/Ordinary19thA.pdf'
import pdfUrlO19thAa from '../../../Homilies/Ordinary19thAa.pdf'
import pdfUrlO19thAb from '../../../Homilies/Ordinary19thAb.pdf'
import pdfUrlO19thB from '../../../Homilies/Ordinary19thB.pdf'
import pdfUrlO19thC from '../../../Homilies/Ordinary19thC.pdf'
import pdfUrlO19thCa from '../../../Homilies/Ordinary19thCa.pdf'
const O19th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 19th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO19thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 19th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO19thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 19th Week: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlO19thAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 19th Week: Year B</h2>
        <iframe id="pdf" src={pdfUrlO19thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 19th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO19thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 19th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO19thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O19th;