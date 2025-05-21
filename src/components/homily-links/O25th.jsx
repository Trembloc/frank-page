import pdfUrlO25thA from '../../../Homilies/Ordinary25thA.pdf'
import pdfUrlO25thAa from '../../../Homilies/Ordinary25thAa.pdf'
import pdfUrlO25thAb from '../../../Homilies/Ordinary25thAb.pdf'
import pdfUrlO25thB from '../../../Homilies/Ordinary25thB.pdf'
import pdfUrlO25thBa from '../../../Homilies/Ordinary25thBa.pdf'
import pdfUrlO25thC from '../../../Homilies/Ordinary25thC.pdf'
import pdfUrlO25thCa from '../../../Homilies/Ordinary25thCa.pdf'

const O25th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 25th Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO25thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 25th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO25thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 25th Week: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlO25thAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 25th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO25thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 25th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO25thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 25th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO25thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 25th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO25thCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O25th;