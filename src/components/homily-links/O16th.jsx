import pdfUrlO16thA from '../../../Homilies/Ordinary16thA.pdf'
import pdfUrlO16thAa from '../../../Homilies/Ordinary16thAa.pdf'
import pdfUrlO16thB from '../../../Homilies/Ordinary16thB.pdf'
import pdfUrlO16thBa from '../../../Homilies/Ordinary16thBa.pdf'
import pdfUrlO16thBb from '../../../Homilies/Ordinary16Bb.pdf'
import pdfUrlO16thC from '../../../Homilies/Ordinary16thC.pdf'
import pdfUrlO16thCa from '../../../Homilies/Ordinary16thCa.pdf'
import pdfUrlO16thCb from '../../../Homilies/Ordinary16thCb.pdf'

const O16th = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 16th Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO16thA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 16th Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO16thAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 16th Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO16thB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 16th Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO16thBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 16th Week: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlO16thBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 16th Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO16thC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 16th Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO16thCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 16th Week: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlO16thCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O16th;