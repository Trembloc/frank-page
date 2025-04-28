import pdfUrl2A from '../../../Homilies/Advent2ndA.pdf'
import pdfUrl2Aa from '../../../Homilies/Advent2ndAa.pdf'
import pdfUrl2Ab from '../../../Homilies/Advent2ndAb.pdf'
import pdfUrl2B from '../../../Homilies/Advent2ndB.pdf'
import pdfUrl2C from '../../../Homilies/Advent2ndC.pdf'
import pdfUrl2Ca from '../../../Homilies/Advent2ndCa.pdf'
import pdfUrl2Cb from '../../../Homilies/Advent2ndCb.pdf'
import pdfUrl2Cd from '../../../Homilies/Advent2ndCd.pdf'


const Advent2 = () => {
  return (
    <>
      <section>
        <h2>2nd Week of Advent: Year A 1</h2>
        <iframe id="pdf" src={pdfUrl2A} frameborder="0"></iframe>
      </section>
      <section>
        <h2>2nd Week of Advent: Year A 2 </h2>
        <iframe id="pdf" src={pdfUrl2Aa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>2nd Week of Advent: Year A 3</h2>
        <iframe id="pdf" src={pdfUrl2Ab} frameborder="0"></iframe>
      </section>
      <section>
        <h2>2nd Week of Advent: Year B</h2>
        <iframe id="pdf" src={pdfUrl2B} frameborder="0"></iframe>
      </section>
      <section>
        <h2>2nd Week of Advent: Year C 1</h2>
        <iframe id="pdf" src={pdfUrl2C} frameborder="0"></iframe>
      </section>
      <section>
        <h2>2nd Week of Advent: Year C 2</h2>
        <iframe id="pdf" src={pdfUrl2Ca} frameborder="0"></iframe>
      </section>
      <section>
        <h2>2nd Week of Advent: Year C 3</h2>
        <iframe id="pdf" src={pdfUrl2Cb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>2nd Week of Advent: Year C 4</h2>
        <iframe id="pdf" src={pdfUrl2Cd} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Advent2;