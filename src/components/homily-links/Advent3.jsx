import pdfUrl3A from '../../../Homilies/Advent3rdA.pdf'
import pdfUrl3Aa from '../../../Homilies/Advent3rdAa.pdf'
import pdfUrl3Ab from '../../../Homilies/Advent3rdAb.pdf'
import pdfUrl3Ac from '../../../Homilies/Advent3rdAc.pdf'
import pdfUrl3B from '../../../Homilies/Advent3rdB.pdf'
import pdfUrl3Ba from '../../../Homilies/Advent3rdBa.pdf'
import pdfUrl3Bb from '../../../Homilies/Advent3rdBb.pdf'
import pdfUrl3C from '../../../Homilies/Advent3rdC.pdf'
import pdfUrl3Ca from '../../../Homilies/Advent3rdCa.pdf'
import pdfUrl3Cb from '../../../Homilies/Advent3rdCb.pdf'

const Advent3 = () => {
  return (
    <>
    <section>
      <h2>3rd Week of Advent: Year A 1</h2>
    <iframe id="pdf" src={pdfUrl3A} frameborder="0"></iframe>
    </section>
    <h2>3rd Week of Advent: Year A 2 </h2>
    <iframe id="pdf" src={pdfUrl3Aa} frameborder="0"></iframe>
    <section>
      <h2>3rd Week of Advent: Year A 3</h2>
      <iframe id="pdf" src={pdfUrl3Ab} frameborder="0"></iframe>
    </section>
    <section>
      <h2>3rd Week of Advent: Year A 4</h2>
      <iframe id="pdf" src={pdfUrl3Ac} frameborder="0"></iframe>
    </section>
    <section>
      <h2>3rd Week of Advent: Year B 1</h2>
      <iframe id="pdf" src={pdfUrl3B} frameborder="0"></iframe>
    </section>
    <section>
      <h2>3rd Week of Advent: Year B 2</h2>
      <iframe id="pdf" src={pdfUrl3Ba} frameborder="0"></iframe>
    </section>
    <section>
      <h2>3rd Week of Advent: Year B 3</h2>
      <iframe id="pdf" src={pdfUrl3Bb} frameborder="0"></iframe>
    </section>
    <section>
      <h2>3rd Week of Advent: Year C 1</h2>
      <iframe id="pdf" src={pdfUrl3C} frameborder="0"></iframe>
    </section>
    <section>
      <h2>3rd Week of Advent: Year C 2</h2>
      <iframe id="pdf" src={pdfUrl3Ca} frameborder="0"></iframe>
    </section>
    <section>
      <h2>3rd Week of Advent: Year C 3</h2>
      <iframe id="pdf" src={pdfUrl3Cb} frameborder="0"></iframe>
    </section>        
    </>
  )
}

export default Advent3;