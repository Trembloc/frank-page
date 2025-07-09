import pdfUrlHolySaturdayMornPrayer from '../../../Homilies/HolySaturdayMornPrayer.pdf'

const HolySaturdayMornPrayer = () => {
  return (
    <>
      <section>
        <h2>Holy Saturday</h2>
        <iframe id="pdf" src={pdfUrlHolySaturdayMornPrayer} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default HolySaturdayMornPrayer;