import pdfUrlPresentationA from '../../../Homilies/PresentationA.pdf'
import pdfUrlPresentationAa from '../../../Homilies/PresentationAa.pdf'
import pdfUrlPresentationAb from '../../../Homilies/PresentationAb.pdf'

const Presentation = () => {
  return (
    <>
      <section>
        <h2>Presentation: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlPresentationA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Presentation: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlPresentationAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Presentation: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlPresentationAb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Presentation