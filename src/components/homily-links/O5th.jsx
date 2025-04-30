import pdfUrlO5thAb from '../../../Homilies/Ordinary5thAb.pdf'
import pdfUrlO5thBa from '../../../Homilies/Ordinary5thBa.pdf'
import pdfUrlO5thC from '../../../Homilies/Ordinary5thC.pdf'
import pdfUrlO5thCa from '../../../Homilies/Ordinary5thCa.pdf'
import pdfUrlO5thCb from '../../../Homilies/Ordinary5thCb.pdf'
import pdfUrlO5thCc from '../../../Homilies/Ordinary5thCc.pdf'
import pdfUrlO5thCd from '../../../Homilies/Ordinary5thCd.pdf'

const O5th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 5th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO5thAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 5th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO5thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 5th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO5thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 5th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO5thCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 5th Week: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlO5thCb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 5th Week: Year C 4</h2>
        <iframe id="pdf" src={pdfUrlO5thCc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 5th Week: Year C 5</h2>
        <iframe id="pdf" src={pdfUrlO5thCd} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O5th;