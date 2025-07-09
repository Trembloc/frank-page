import pdfUrlExaltationA from '../../../Homilies/Exaltation of the Cross.pdf'
import pdfUrlExaltationHoly from '../../../Homilies/Exaltation of the Holy Cross.pdf'


const Exaltation = () => {
  return (
    <>
      <section>
        <h2>Exaltation of the Holy Cross: Year A</h2>
        <iframe id="pdf" src={pdfUrlExaltationA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Exaltation of the Holy Cross</h2>
        <iframe id="pdf" src={pdfUrlExaltationHoly} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Exaltation;