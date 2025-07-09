import pdfUrlHolyFamily from '../../../Homilies/HolyFamilyGEN-COL-LK.pdf'
const Holyfamily = () => {
  return (
    <>
      <section>
        <h2>Holy Family</h2>
        <iframe id="pdf" src={pdfUrlHolyFamily} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default Holyfamily;