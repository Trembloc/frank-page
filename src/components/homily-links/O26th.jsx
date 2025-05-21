import pdfUrlO26thA from '../../../Homilies/Ordinary26thA.pdf'
import pdfUrlO26thAa from '../../../Homilies/Ordinary26thAa.pdf'
import pdfUrlO26thAb from '../../../Homilies/Ordinary26thAb.pdf'
import pdfUrlO26thAc from '../../../Homilies/Ordinary26thAc.pdf'
import pdfUrlO26thB from '../../../Homilies/Ordinary26thB.pdf'
import pdfUrlO26thBa from '../../../Homilies/Ordinary26thBa.pdf'
import pdfUrlO26thC from '../../../Homilies/Ordinary26thC.pdf'
import pdfUrlO26thCa from '../../../Homilies/Ordinary26thCa.pdf'


const O26th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 26th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO26thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 26th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO26thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 26th Week: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlO26thAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 26th Week: Year A 4</h2>
        <iframe id="pdf" src={pdfUrlO26thAc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 26th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO26thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 26th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO26thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 26th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO26thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 26th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO26thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O26th;