import pdfUrlO10thA from '../../../Homilies/Ordinary10thA.pdf'
import pdfUrlO10thAa from '../../../Homilies/Ordinary10thAa.pdf'
import pdfUrlO10thB from '../../../Homilies/Ordinary10thB.pdf'
import pdfUrlO10thC from '../../../Homilies/Ordinary10thC.pdf'
import pdfUrlO10thCa from '../../../Homilies/Ordinary10thCa.pdf'

const O10th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 10th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO10thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 10th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO10thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 10th Week: Year B</h2>
        <iframe id="pdf" src={pdfUrlO10thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 10th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO10thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 10th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO10thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O10th;