import React ,{useEffect ,useState} from 'react'
import Recipe from './recipe'
import './styles.css'

const App = () =>{
    const [recipes , setRecipes] = useState([])
    const [search , setSearch] = useState('')
    const [query , setQuery] = useState('Banana')

    
    const exampleReq= `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    
    
    useEffect(() =>{
        getRecipes();
    } , [query])

    const getRecipes = async () =>{
        const response = await fetch(exampleReq)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits);
    }

    const updateSearch = e =>{
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }


    
    return(
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input type="text" className="search-bar" value={search} onChange={updateSearch}  />
                <button type="submit" className="search-button" >Search</button>
            </form>
            <div className="recipe">
            {recipes.map((recipe , index) =>(
                <Recipe 
                    key={index}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients}
                />
            ))}
            </div>
        </div>
    )
}

export default App;