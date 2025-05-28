import pdfUrlSacredHeart from '../../../Homilies/Sacred Heart.pdf'


const SacredHeart = () => {
  return (
    <>
      <section>
        <h2>Sacred Heart</h2>
        <iframe id="pdf" src={pdfUrlSacredHeart} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default SacredHeart