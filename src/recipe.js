import React from 'react';
import Style from './recipe.module.css'

const Recipe = (props) =>{
 
    return (
        <div className={Style.recipe}>
            <h1 className={Style.title} >{props.title}</h1>
            <ul className={Style.list} >
                {props.ingredients.map(ingredient => {
                    return <li>{ingredient.text}</li>
                })}
            </ul>
            <h3>Calories : {props.calories}</h3>
            <img className={Style.image} src={props.image} alt=""  />
        </div>
    )
}

export default Recipe;