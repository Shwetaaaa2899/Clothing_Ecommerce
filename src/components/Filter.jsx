import {CartState} from "../context/productsContext"
import { useContext } from "react";
import { NavLink } from "react-router-dom";


const Filter = () => {
  const { state :{all,genre,price,maximumPrice,minimumPrice,sort,categoryInput},getData, dispatch } = CartState()

console.log("sort is",sort)
  const setInputText = (e) =>{
    dispatch({type:"SEARCH",payload:e.target.value})
  }
  const showAllProducts = () => {
    // console.log("1st step")
    dispatch({type:"DISPLAY-ALL-PRODUCTS"})
  }
  const filterDataonCategory = (e) =>{
   

      dispatch({type:"CATEGORY",payload:e.target.value})
    
   
  }
  const filterDataonSort = (e) =>{
    console.log("data",e.target.value)
    dispatch({type:"SORT",payload:e.target.value}) 
  }
     const filterDataonCheck = (e) =>{
      dispatch({type:"GENRE",payload:e.target.value}) 
     }
      const  ClearFilterHandler = () => {
        dispatch({type:"CLEAR-FILTER"}) 
      }
      const sortByRange = (e) =>{
        const name = e.target.name;
        const value= e.target.value;
const payloadObj = {name,value}
        dispatch({type:"RANGE",payload:payloadObj }) 
      }
   
  return (
    <>
      <h1>Filters:</h1>
      <h3>Sort By Price</h3>
      <input
        type="radio"
        value="lowtohigh"
        name="category"
        onChange={filterDataonSort}
        checked = {sort?.length>0 && sort==="lowtohigh"?true:false}
      />  Sort(lowtohigh)
      <input
        type="radio"
        name="category"
        value="hightolow"
        checked = {sort?.length>0 && sort==="hightolow"?true:false}
        onChange={filterDataonSort}
      />
      Sort(hightolow)
    <h3>Sort By Range</h3>
    <div>
    <h4>Current Price: {price}</h4>
    <span>{minimumPrice===0?300:minimumPrice}</span>
      <input type = "range" name = "price" step = {10} min={300} max={maximumPrice} value={price} onChange = {(e)=>sortByRange(e)}/>
      <span>{maximumPrice}</span>
      </div> 
      <h3>Sort By Category</h3>
      
      <input type="text"  placeholder = "search" onChange={(e) => sortByRange(e)} name="myInput"  />
      <input
        type="radio"
        name = "gender"
    
        value="all"
        onChange= {showAllProducts}
        checked = {all}
       
      />
     All

   
     <input
        type="radio"
        name = "gender"
    
        value="men"
        onChange={filterDataonCategory}
        checked = {categoryInput?.length>0 && categoryInput==="men"?true:false}
      />

      Men's Section
     
      <input
        type="radio"
        name = "gender"
    
        value="women"
         onChange={filterDataonCategory}
        checked = {categoryInput?.length>0 && categoryInput==="women"?true:false}
      />
      Women's Section
    
       <input
       type="radio"
        name = "gender"
    
        value="kids"
        onChange={filterDataonCategory}
        checked = {categoryInput?.length>0 && categoryInput==="kids"?true:false}
      />
      kid's Section



      {/* checkbox category */}
   
      <input    
        type="checkbox"
        value="sports"
        name = "sports"
        onChange={(e) => filterDataonCheck(e)}
        checked ={genre?.includes("sports")?true:false}
      />
      Sport's Wear
      <input
        type="checkbox"
        value="formal"
        onChange={(e) => filterDataonCheck(e)}
        checked ={genre?.includes("formal")?true:false}
      />
   Formal Wear
     <input
        type="checkbox"
        value="casual"
        onChange={(e) => filterDataonCheck(e)}
        checked ={genre?.includes("casual")?true:false}
      />
 Casual Wear  
    
      <button onClick = {ClearFilterHandler} >Clear Filter</button>
    </>
  );
};
export default Filter;
