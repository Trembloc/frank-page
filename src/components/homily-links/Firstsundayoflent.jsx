import pdfUrlFirstLentA from '../../../Homilies/Lent1stA.pdf'
import pdfUrlFirstLentAa from '../../../Homilies/Lent1stAa.pdf'
import pdfUrlFirstLentB from '../../../Homilies/Lent1stB.pdf'
import pdfUrlFirstLentBa from '../../../Homilies/Lent1stC.pdf'
import pdfUrlFirstLentBb from '../../../Homilies/Lent1stCa.pdf'

const FirstLent = () => {
  return (
    <>
      <section>
        <h2>FirstLent: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlFirstLentA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FirstLent: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlFirstLentAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FirstLent: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlFirstLentB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FirstLent: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlFirstLentBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FirstLent: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlFirstLentBb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default FirstLent;