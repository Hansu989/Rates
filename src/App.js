import './App.css';
import {useState} from 'react';

const URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=35305d0894f856334821063caeb39ee0';


function App() {
  const [eur,setEuro] = useState(0);
  const [gbp,setGbp] = useState(0);
  const [rate,setRate] = useState(0);

  async function convert(e) {
    e.preventDefault();
    try {
      const address = URL;
      const response = await fetch(address);


      if (response.ok) {
        const json = await response.json();
        console.log(json.rates.GBP);
        setRate(json.rates.GBP);

        setGbp(eur * json.rates.GBP);
      } else {
        alert('Error retrieving exchange rate.');
        console.log(response)
      }

    } catch (err) {
      alert(err);
    }
  }

  return (
    <div id="container">
      <form onSubmit={convert}>
        <div>
          <label>Eur</label>&nbsp;
          <input type="number" step="0.01" value={eur} onChange={e => setEuro(e.target.value)}></input>
          <output>{rate}</output>
        </div>
        <div>
          <label>Gbp</label>
          <output>{gbp.toFixed(2)} £</output>
        </div>
        <div>
          <button>Calculate</button>
        </div>

      </form>
     </div>
  )
}

export default App;



//Yritin luoda reseptin etsijän, mutta se ei toiminut niin kuin oli tarkoitus!


/*import './App.css';
import {useState} from 'react';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'



function App() {

const [Search,setSearch] = useState([])
const [Recipe,setRecipe] = useState([])

async function convert(e) {
  e.preventDefault();
  try {
    const address = URL;
    const response = await fetch(address);


    if (response.ok) {
      const json = await response.json();
      console.log(json.Recipe.Search)
      setRecipe(json.Recipe.Search);


    } else {
      alert('Error retrieving recipe.')
      console.log(response)
    }

  } catch (err) {
    alert(err);
  }
}


    return(

        <div id="container">
            <form onSubmit={convert}>
            <div>
                <label>Cocktail of the day</label>
                <input type="text" value={Search} onChange={e => setSearch(e.target.value)}></input>
                <output>{Recipe}</output>
            </div>
            <div>
                <button>Search</button>
            </div>

            </form>
        </div>
    )
}

export default App;
 */
