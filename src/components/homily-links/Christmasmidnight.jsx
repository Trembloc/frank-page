import pdfUrlChristmasmidnightA from '../../../Homilies/ChristmasBmidnight.pdf'
import pdfUrlChristmasmidnightB from '../../../Homilies/ChristmasBmidnighta.pdf'

const Christmasmidnight = () => {
  return (
    <>
      <section>
        <h2>Christmasmidnight: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlChristmasmidnightA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Christmasmidnight: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlChristmasmidnightB} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Christmasmidnight;