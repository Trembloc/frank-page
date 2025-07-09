
import pdfUrlTrinitySundayA from '../../../Homilies/TrinitySundayA.pdf'
import pdfUrlTrinitySundayAa from '../../../Homilies/TrinitySundayAa.pdf'
import pdfUrlTrinitySundayAb from '../../../Homilies/TrinitySundayAb.pdf'
import pdfUrlTrinitySundayAc from '../../../Homilies/TrinitySundayAc.pdf'
import pdfUrlTrinitySundayB from '../../../Homilies/TrinitySundayB.pdf'
import pdfUrlTrinitySundayBa from '../../../Homilies/TrinitySundayBa.pdf'
import pdfUrlTrinitySundayC from '../../../Homilies/TrinitySundayC.pdf'
import pdfUrlTrinitySundayCa from '../../../Homilies/TrinitySundayCa.pdf'
import pdfUrlTrinitySundayCb from '../../../Homilies/TrinitySundayCb.pdf'


const TrinitySunday = () => {
  return (
    <>
      <section>
        <h2>Trinity Sunday: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Trinity Sunday: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayAa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Trinity Sunday: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Trinity Sunday: Year A 4</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayAc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Trinity Sunday: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Trinity Sunday: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Trinity Sunday: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Trinity Sunday: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayCa} frameborder="0"></iframe>
      </section>
            <section>
        <h2>Trinity Sunday: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlTrinitySundayCb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default TrinitySunday