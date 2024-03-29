
const ProductsReducer  = (state,action) =>{
   

switch(action.type){
   case  "DISPLAY-PRODUCTS":

    const max = action?.payload.reduce((acc,prod) => prod.price>acc?acc = prod.price:acc,0)
 const min = action?.payload.reduce((acc,prod) => prod.price<acc?acc = prod.price:acc,0)

 
    return {...state,products:action.payload,maximumPrice: max,minimumPrice:min}
   
   case "SET-LOADER":
    // console.log("loading",action.payload)

    return {...state,loading:action.payload}

    case "SET-STAR_RATING":
      console.log(" STAR_RATING reducer",action.payload)
      return {...state, starRating:action.payload}
    case "CLEAR-PRODUCT-IN-DETAIL":
      return { ...state,ProductToBeDetailed:{},loading:true}
       
    case "PRODUCT-IN-DETAIL":
       
        return { ...state,ProductToBeDetailed:action.payload}
        case "SEARCH":
          console.log("esrach in reducer",action.payload)
          return {...state,search:action.payload}
          case "SORT":
            return {...state,sort:action.payload}

            case "CATEGORY":
              
           return  {...state, categoryInput:action.payload,allFlag : !state.allFlag}
           case "GENRE":
           
            
           return  state.genre.includes(action.payload)?{...state,genre:state.genre.filter((type) => type !== action.payload)}
          :
            {...state, genre:[...state.genre,action.payload]}

            case "RANGE":
              
             const { name,value} = action.payload
          

              return {...state,[name]:Number(value)}
              case "DISPLAY-ALL-PRODUCTS":
           
               

                return    {
                  
                  ...state,
                   all:!state.all
                     }
           
             case "CLEAR-FILTER":
             
             return    {
                  
                 ...state,
                 genre:[],
                 starRating:-1,
                 loading:false,
                 maximumPrice:4000,
                 minimumPrice:297,
                 price:297,
                 sort: "",
                 search: "",
                 categoryInput:"",
                 all:false
                    }
     default:
                return state

}
// console.log("data received from conextx",data)


}

export const initialState = {islaoding:true,
    products :[],

 
   ProductToBeDetailed:{},
   loading:false,
    genre:[],
    starRating:-1,
    maximumPrice:4000,
    minimumPrice:297,
    price:297,
    sort: "",
    search: "",
    categoryInput:"",
    all:false
   
    }
export default ProductsReducer;