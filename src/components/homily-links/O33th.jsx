import pdfUrlO33rdA from '../../../Homilies/Ordinary33rdA.pdf'
import pdfUrlO33rdB from '../../../Homilies/Ordinary33rdB.pdf'
import pdfUrlO33rdC from '../../../Homilies/Ordinary33rdC.pdf'
import pdfUrlO33rdTeen from '../../../Homilies/Ordinary33rdCTeenMass.pdf'


const O33rd = () => {
  return (
    <>
      <section>
        <h2>Ordinary, 33rd Week: Year A</h2>
        <iframe id="pdf" src={pdfUrlO33rdA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 33rd Week: Year B</h2>
        <iframe id="pdf" src={pdfUrlO33rdB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 33rd Week: Year C</h2>
        <iframe id="pdf" src={pdfUrlO33rdC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ordinary, 33rd Week: Year C Teen Mass</h2>
        <iframe id="pdf" src={pdfUrlO33rdTeen} frameborder="0"></iframe>
      </section>

    </>
  )
}

export default O33rd;