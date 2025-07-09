import pdfUrlTransfiguration from '../../../Homilies/TransfigurationB.pdf'


const Transfiguration = () => {
  return (
    <>
      <section>
        <h2>Transfiguration Year B</h2>
        <iframe id="pdf" src={pdfUrlTransfiguration} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Transfiguration