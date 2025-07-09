import pdfUrlMMG from '../../../Homilies/MaryMotherOfGod - Jan 1.pdf'
import pdfUrlMMGa from '../../../Homilies/MaryMotherOfGod - Jan 1a.pdf'
import pdfUrlMMGb from '../../../Homilies/MaryMotherOfGod - Jan 1b.pdf'
import pdfUrlMMGc from '../../../Homilies/MaryMotherOfGod - Jan 1c.pdf'
const MaryMotherOfGod = () => {
  return (
    <>
      <section>
        <h2>Mary Mother of God: 1</h2>
        <iframe id="pdf" src={pdfUrlMMG} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Mary Mother of God: 2</h2>
        <iframe id="pdf" src={pdfUrlMMGa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Mary Mother of God: 3</h2>
        <iframe id="pdf" src={pdfUrlMMGb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Mary Mother of God: 4</h2>
        <iframe id="pdf" src={pdfUrlMMGc} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default MaryMotherOfGod;