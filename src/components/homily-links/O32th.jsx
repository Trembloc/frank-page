import pdfUrlO32ndA from '../../../Homilies/Ordinary32ndA.pdf'
import pdfUrlO32ndAa from '../../../Homilies/Ordinary32ndAa.pdf'
import pdfUrlO32ndB from '../../../Homilies/Ordinary32ndB.pdf'
import pdfUrlO32ndBa from '../../../Homilies/Ordinary32ndBa.pdf'
import pdfUrlO32ndC from '../../../Homilies/Ordinary32ndC.pdf'
import pdfUrlO32ndCa from '../../../Homilies/Ordinary32ndCa.pdf'


const O32nd = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 32nd Week: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlO32ndA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 32nd Week: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlO32ndAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 32nd Week: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlO32ndB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 32nd Week: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlO32ndBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 32nd Week: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlO32ndC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 32nd Week: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlO32ndCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default O32nd;