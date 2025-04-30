import pdfUrlChristmasdawnA from '../../../Homilies/ChristmasDawnA.pdf'
import pdfUrlChristmasdawnAa from '../../../Homilies/ChristmasDawnAa.pdf'

const Christmasdawn = () => {
  return (
    <>
      <section>
        <h2>Christmasdawn: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlChristmasdawnA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Christmasdawn: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlChristmasdawnAa} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Christmasdawn;