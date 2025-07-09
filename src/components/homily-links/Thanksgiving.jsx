import pdfUrlThanksgivingHomily from '../../../Homilies/ThanksgivingHomily.pdf'
import pdfUrlThanksgivingHomilya from '../../../Homilies/ThanksgivingHomilya.pdf'
import pdfUrlThanksgivingHomilyJail from '../../../Homilies/ThanksgivingHomilyJail.pdf'

const Thanksgiving = () => {
  return (
    <>
      <section>
        <h2>Thanksgiving 1</h2>
        <iframe id="pdf" src={pdfUrlThanksgivingHomily} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Thanksgiving 2</h2>
        <iframe id="pdf" src={pdfUrlThanksgivingHomilya} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Thanksgiving: Jail</h2>
        <iframe id="pdf" src={pdfUrlThanksgivingHomilyJail} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Thanksgiving