import { Link } from "react-router-dom";


const Homilies = () => {
  return (
    <table>
      <tr>
        <th>ADVENT</th>
        <th>CHRISTMAS TIME</th>
        <th colspan="2">ORGINARY TIME</th>
        <th>FEAST DAYS</th>
        <th>LENT/EASTER</th>
        <th>OTHERS</th>
      </tr>
      <tr>
        <td>
          <Link to="/Advent1">Advent 1</Link>
        </td>
        <td>
          <Link to="/Holy Family">Holy Family</Link>
        </td>
        <td>
          <Link to="/O2nd">2nd</Link>
        </td>
        <td>19th</td>
        <td>Presentation of the Lord</td>
        <td>
          <Link to="/Ashwednesday">Ash Wednesday</Link>
        </td>
        <td>
          <Link to="/Assumption">Assumption</Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link to="/Advent2">Advent 2</Link>
        </td>
        <td>
          <Link to="/Epiphany">Epiphany</Link>
        </td>
        <td>
          <Link to="/O3rd">3rd</Link>
        </td>
        <td>20th</td>
        <td>Pentacost Vigil</td>
        <td>1st Sunday of Lent</td>
        <td>
          <Link to="/Birth">Birth of John the Baptist</Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link to="/Advent3">Advent 3</Link>
        </td>
        <td>
          <Link to="/Baptism">Baptism of Lord</Link>
        </td>
        <td>
          <Link to="/O4th">4th</Link>
        </td>
        <td>21st</td>
        <td>Pentacost Sunday</td>
        <td>2nd Sunday Of Lent</td>
        <td>Funerals</td>
      </tr>
      <tr>
        <td>
          <Link to="/Advent4">Advent 4</Link>
        </td>
        <td>
          <Link to="/Christmas">Christmas</Link>
        </td>
        <td>
          <Link to="/O5th">5th</Link>
        </td>
        <td>22nd</td>
        <td>The Most Holy Trinity</td>
        <td>3rd Sunday of Lent</td>
        <td>Mary Mother of God</td>
      </tr>
      <tr>
        <td></td>
        <td>
          Christmas Midnight
        </td>
        <td>6th</td>
        <td>23rd</td>
        <td>Corpus Christi</td>
        <td>4th Sunday of Lent</td>
        <td>Sacred Heart</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Link to="/Christmasdawn">Christmas Dawn</Link>
        </td>
        <td>7th</td>
        <td>24th</td>
        <td>Saints Peter & Paul</td>
        <td>5th Sunday</td>
        <td>Thanksgiving</td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Link to="/Christmasvigil">Christmas Vigil</Link>
        </td>
        <td>8th</td>
        <td>25th</td>
        <td>Exaltation of the Holy Cross</td>
        <td>Holy Thursday</td>
        <td>Transfiguration</td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>9th</td>
        <td>26th</td>
        <td>
          <Link to="/Allsoulsday">All Souls Day</Link>
        </td>
        <td>Good Friday</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>10th</td>
        <td>27th</td>
        <td>OLJC, King of the Universe</td>
        <td>Holy Saturday</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>11th</td>
        <td>28th</td>
        <td>
          <Link to="/Allsaints">All Saints</Link>
        </td>
        <td>Palm Sunday</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>12th</td>
        <td>29th</td>
        <td></td>
        <td>Easter Sunday</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>13th</td>
        <td>30th</td>
        <td></td>
        <td>2nd Sunday of Easter</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>14th</td>
        <td>31st</td>
        <td></td>
        <td>3rd Sunday of Easter</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>15th</td>
        <td>32nd</td>
        <td></td>
        <td>4th Sunday of Easter</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>16th</td>
        <td>33rd</td>
        <td></td>
        <td>5th Sunday of Easter</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>17th</td>
        <td>34th</td>
        <td></td>
        <td>6th Sunday of Easter</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>18th</td>
        <td></td>
        <td></td>
        <td>7th Sunday of Easter</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <Link to="/Ascension">Ascension Sunday</Link>
        </td>
        <td></td>
      </tr>
    </table>
  )
}

export default Homilies;