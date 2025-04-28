import pdfUrlAllsouls from '../../../Homilies/All Souls Day.pdf'
import pdfUrlAllsoulsA from '../../../Homilies/All SoulsA.pdf'
import pdfUrlAllsoulsB from '../../../Homilies/All SoulsB.pdf'


const Allsoulsday = () => {
  return (
    <>
      <section>
        <h2>All Souls Day</h2>
        <iframe id="pdf" src={pdfUrlAllsouls} frameborder="0"></iframe>
      </section>
      <section>
        <h2>All Souls Day: A</h2>
        <iframe id="pdf" src={pdfUrlAllsoulsA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>All Souls Day: B</h2>
        <iframe id="pdf" src={pdfUrlAllsoulsB} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Allsoulsday;