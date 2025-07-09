import pdfUrlFuneral from '../../../Homilies/Funeral.pdf'
import pdfUrlFunerala from '../../../Homilies/Funerala.pdf'
import pdfUrlFuneralBertram from '../../../Homilies/FuneralBertram.pdf'

const Funerals = () => {
  return (
    <>
      <section>
        <h2>Funeral</h2>
        <iframe id="pdf" src={pdfUrlFuneral} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Funeral 2</h2>
        <iframe id="pdf" src={pdfUrlFunerala} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Bertram Canter Funeral Notes</h2>
        <iframe id="pdf" src={pdfUrlFuneralBertram} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Funerals