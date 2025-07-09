import pdfUrlHolyThursday from '../../../Homilies/Holy Thursday.pdf'

const HolyThursday = () => {
  return (
    <>
      <section>
        <h2>Holy Thursday</h2>
        <iframe id="pdf" src={pdfUrlHolyThursday} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default HolyThursday;