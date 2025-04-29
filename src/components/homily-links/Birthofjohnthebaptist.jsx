import pdfUrlBirth from '../../../Homilies/Birth of John the Baptist.pdf'
import pdfUrlBirtha from '../../../Homilies/Birth of John the Baptista.pdf'

const Birthofjohnthebaptist = () => {
  return (
    <>
      <section>
        <h2>Birth of John the Baptist: Year B</h2>
        <iframe id="pdf" src={pdfUrlBirtha} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Birth of John the Baptist: Year C </h2>
        <iframe id="pdf" src={pdfUrlBirth} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Birthofjohnthebaptist;