import pdfUrl4A from '../../../Homilies/Advent4thA.pdf'
import pdfUrl4Aa from '../../../Homilies/Advent4thAa.pdf'
import pdfUrl4Ab from '../../../Homilies/Advent4thAb.pdf'
import pdfUrl4B from '../../../Homilies/Advent4thB.pdf'
import pdfUrl4Ba from '../../../Homilies/Advent4thBa.pdf'
import pdfUrl4C from '../../../Homilies/Advent4thC.pdf'

const Advent4 = () => {
  return (
    <>
    <section>
      <h2>4th Week of Advent: Year A 1</h2>
    <iframe id="pdf" src={pdfUrl4A} frameborder="0"></iframe>
    </section>
    <h2>4th Week of Advent: Year A 2 </h2>
    <iframe id="pdf" src={pdfUrl4Aa} frameborder="0"></iframe>
    <section>
      <h2>4th Week of Advent: Year A 4</h2>
      <iframe id="pdf" src={pdfUrl4Ab} frameborder="0"></iframe>
    </section>
    <section>
      <h2>4th Week of Advent: Year A 4</h2>
      <iframe id="pdf" src={pdfUrl4B} frameborder="0"></iframe>
    </section>
    <section>
      <h2>4th Week of Advent: Year B 1</h2>
      <iframe id="pdf" src={pdfUrl4Ba} frameborder="0"></iframe>
    </section>
    <section>
      <h2>4th Week of Advent: Year B 2</h2>
      <iframe id="pdf" src={pdfUrl4C} frameborder="0"></iframe>
    </section>
    </>
  )
}

export default Advent4;