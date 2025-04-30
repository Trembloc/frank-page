import pdfUrlChristmasB from '../../../Homilies/ChristmasB.pdf'


const Christmas = () => {
  return (
    <>
      <section>
        <h2>Christmas: Year B</h2>
        <iframe id="pdf" src={pdfUrlChristmasB} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Christmas;