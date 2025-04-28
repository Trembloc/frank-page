import pdfUrlAscensionA from '../../../Homilies/AscensionA.pdf'
import pdfUrlAscensionAa from '../../../Homilies/AscensionAa.pdf'
import pdfUrlAscensionB from '../../../Homilies/AscensionB.pdf'
import pdfUrlAscensionBa from '../../../Homilies/AscensionBa.pdf'
import pdfUrlAscensionC from '../../../Homilies/AscensionC.pdf'

const Ascensionsunday = () => {
  return (
    <>
      <section>
        <h2>Ascension: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlAscensionA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ascension: Year A 2 </h2>
        <iframe id="pdf" src={pdfUrlAscensionAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ascension: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlAscensionB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ascension: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlAscensionBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Ascension: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlAscensionC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Ascensionsunday;