//Yritin luoda reseptin etsijän, mutta se ei toiminut niin kuin oli tarkoitus!


import './App.css';
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
