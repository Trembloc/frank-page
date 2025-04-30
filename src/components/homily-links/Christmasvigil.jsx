import pdfUrlChristmasvigil from '../../../Homilies/ChristmasVigil.pdf'
import pdfUrlChristmasvigilA from '../../../Homilies/ChristmasVigilA.pdf'
import pdfUrlChristmasvigilB from '../../../Homilies/ChristmasVigilB.pdf'
import pdfUrlChristmasvigilC from '../../../Homilies/ChristmasVigilC.pdf'


const Christmasvigil = () => {
  return (
    <>
      <section>
        <h2>Christmas Vigil</h2>
        <iframe id="pdf" src={pdfUrlChristmasvigil} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Christmas Vigil: Year A </h2>
        <iframe id="pdf" src={pdfUrlChristmasvigilA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Christmas Vigil: Year B </h2>
        <iframe id="pdf" src={pdfUrlChristmasvigilB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Christmas Vigil: Year C</h2>
        <iframe id="pdf" src={pdfUrlChristmasvigilC} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Christmasvigil;