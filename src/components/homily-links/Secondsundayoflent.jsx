import pdfUrlSecondLentA from '../../../Homilies/Lent2ndA.pdf'
import pdfUrlSecondLentAa from '../../../Homilies/Lent2ndAa.pdf'
import pdfUrlSecondLentAb from '../../../Homilies/Lent2ndAb.pdf'

import pdfUrlSecondLentB from '../../../Homilies/Lent2ndB.pdf'
import pdfUrlSecondLentBa from '../../../Homilies/Lent2ndBa.pdf'
import pdfUrlSecondLentBb from '../../../Homilies/Lent2ndBb.pdf'
import pdfUrlSecondLentC from '../../../Homilies/Lent2ndC.pdf'
import pdfUrlSecondLentCa from '../../../Homilies/Lent2ndCa.pdf'
import pdfUrlSecondLentCb from '../../../Homilies/Lent2ndCb.pdf'

const SecondLent = () => {
  return (
    <>
      <section>
        <h2>SecondLent: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlSecondLentA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>SecondLent: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlSecondLentAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>SecondLent: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlSecondLentAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>SecondLent: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlSecondLentB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>SecondLent: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlSecondLentBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>SecondLent: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlSecondLentBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>SecondLent: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlSecondLentC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>SecondLent: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlSecondLentCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>SecondLent: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlSecondLentCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default SecondLent;