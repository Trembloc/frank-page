import pdfUrlPeterPaulA from '../../../Homilies/Peter&PaulA.pdf'
import pdfUrlPeterPaulAa from '../../../Homilies/Peter&PaulAa.pdf'
import pdfUrlPeterPaulAb from '../../../Homilies/Peter&PaulB.pdf'


const PandP = () => {
  return (
    <>
      <section>
        <h2>Peter and Paul: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlPeterPaulA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Peter and Paul: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlPeterPaulAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Peter and Paul: Year B</h2>
        <iframe id="pdf" src={pdfUrlPeterPaulAb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default PandP