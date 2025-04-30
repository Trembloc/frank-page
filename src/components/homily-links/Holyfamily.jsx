import pdfUrlChristmas1stA from '../../../Homilies/Christmas1stA.pdf'
import pdfUrlChristmas1stB from '../../../Homilies/Christmas1stB.pdf'
import pdfUrlChristmas1stC from '../../../Homilies/Christmas1stC.pdf'
import pdfUrlChristmas1stCa from '../../../Homilies/Christmas1stCa.pdf'
const Holyfamily = () => {
  return (
    <>
      <section>
        <h2>Holy Family: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlChristmas1stA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Holy Family: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlChristmas1stB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Holy Family: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlChristmas1stC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Holy Family: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlChristmas1stCa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Holyfamily;