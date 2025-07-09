import pdfUrlCorpusChristi from '../../../Homilies/CorpusChristi.pdf'
import pdfUrlCorpusChristiA from '../../../Homilies/CorpusChristiA.pdf'
import pdfUrlCorpusChristiAb from '../../../Homilies/CorpusChrista.pdf'
import pdfUrlCorpusChristiAc from '../../../Homilies/CorpusChristab.pdf'
import pdfUrlCorpusChristiB from '../../../Homilies/CorpusChristiB.pdf'
import pdfUrlCorpusChristiBa from '../../../Homilies/CorpusChristiBa.pdf'

import pdfUrlCorpusChristiC from '../../../Homilies/CorpusChristiC.pdf'
import pdfUrlCorpusChristiCa from '../../../Homilies/CorpusChristiCa.pdf'
import pdfUrlCorpusChristiCb from '../../../Homilies/CorpusChristiCb.pdf'
import pdfUrlCorpusChristiCc from '../../../Homilies/CorpusChristiCc.pdf'

const CorpusChristi = () => {
  return (
    <>
      <section>
        <h2>Corpus Christi</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristi} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year A 1</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiA} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year A 2</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiAb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year A 3</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiAc} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year B 1</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiB} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year B 2</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiBa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year C 1</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiC} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year C 2</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiCa} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year C 3</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiCb} frameborder="0"></iframe>
      </section>
      <section>
        <h2>Corpus Christi: Year C 4</h2>
        <iframe id="pdf" src={pdfUrlCorpusChristiCc} frameborder="0"></iframe>
      </section>
    </>
  )
}

export default CorpusChristi;