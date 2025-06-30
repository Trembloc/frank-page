import pdfUrlFourthLentA from '../../../Homilies/Lent4thA.pdf'
import pdfUrlFourthLentAa from '../../../Homilies/Lent4thAa.pdf'
import pdfUrlFourthLentAb from '../../../Homilies/Lent4thAb.pdf'
import pdfUrlFourthLentAc from '../../../Homilies/Lent4thAc.pdf'
import pdfUrlFourthLentAd from '../../../Homilies/Lent4thAd.pdf'
import pdfUrlFourthLentAe from '../../../Homilies/Lent4thAe.pdf'

import pdfUrlFourthLentB from '../../../Homilies/Lent4thB.pdf'
import pdfUrlFourthLentBa from '../../../Homilies/Lent4thBa.pdf'
import pdfUrlFourthLentBb from '../../../Homilies/Lent4thBb.pdf'
import pdfUrlFourthLentC from '../../../Homilies/Lent4thC.pdf'

const FourthLent = () => {
  return (
    <>
      <section>
        <h2>FourthLent: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlFourthLentA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlFourthLentAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlFourthLentAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year A 4</h2>
        <iframe id="pdf" src={pdfUrlFourthLentAc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year A 5</h2>
        <iframe id="pdf" src={pdfUrlFourthLentAd} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year A 6</h2>
        <iframe id="pdf" src={pdfUrlFourthLentAe} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlFourthLentB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlFourthLentBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year B 3</h2>
        <iframe id="pdf" src={pdfUrlFourthLentBb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>FourthLent: Year C</h2>
        <iframe id="pdf" src={pdfUrlFourthLentC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default FourthLent;