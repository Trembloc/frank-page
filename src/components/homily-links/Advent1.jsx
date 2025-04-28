import pdfUrl1A from '../../../Homilies/Advent 1A.pdf'
import pdfUrl1B from '../../../Homilies/Advent1stB.pdf'
import pdfUrl1Ba from '../../../Homilies/Advent1stBa.pdf'
import pdfUrl1C from '../../../Homilies/Advent1stC.pdf'
import pdfUrl1Ca from '../../../Homilies/Advent1stCa.pdf'
import pdfUrl1Cb from '../../../Homilies/Advent1stCb.pdf'


const Advent1 = () => {
  return (
    <>
      <section>
        <h2>1st Week of Advent: Year A</h2>
        <iframe id="pdf" src={pdfUrl1A} frameborder="0"></iframe>
      </section>
      <section>
        <h2>1st Week of Advent: Year B 1 </h2>
        <iframe id="pdf" src={pdfUrl1B} frameborder="0"></iframe>
      </section>
      <section>
        <h2>1st Week of Advent: Year B 2</h2>
        <iframe id="pdf" src={pdfUrl1Ba} frameborder="0"></iframe>
      </section>
      <section>
        <h2>1st Week of Advent: Year C 1</h2>
        <iframe id="pdf" src={pdfUrl1C} frameborder="0"></iframe>
      </section>
      <section>
        <h2>1st Week of Advent: Year C 2</h2>
        <iframe id="pdf" src={pdfUrl1Ca} frameborder="0"></iframe>
      </section>
      <section>
        <h2>1st Week of Advent: Year C 3</h2>
        <iframe id="pdf" src={pdfUrl1Cb} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Advent1;