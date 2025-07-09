import pdfUrlGoodFriday from '../../../Homilies/Good Friday.pdf'
import pdfUrlGoodFridayA from '../../../Homilies/Good FridayA.pdf'
import pdfUrlGoodFridayMorningPrayer from '../../../Homilies/Good FridayMorningPrayer.pdf'
const GoodFriday = () => {
  return (
    <>
      <section>
        <h2>Good Friday</h2>
        <iframe id="pdf" src={pdfUrlGoodFriday} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Good Friday 2</h2>
        <iframe id="pdf" src={pdfUrlGoodFridayA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Good Friday Morning Prayer</h2>
        <iframe id="pdf" src={pdfUrlGoodFridayMorningPrayer} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default GoodFriday;