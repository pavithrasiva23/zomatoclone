import React, {useState,useEffect} from 'react';
import axios from 'axios';
import QuickSearchItem from './QuickSearchItem';

function QuickSearch(){
  let [mealType,setMealTYpe] = useState([])
let getQuickSearchData= async () =>{
  let URL='http://localhost:4000/api/get-meal-types'; 
  try{
    let response = await axios.get(URL);
    let {status,meal_type} = response.data;
    if(status === true){
      setMealTYpe([...meal_type]);
          }
          else{
            alert("Meal types not found");
          }
  }catch(error){    
    alert(error);
    console.log(error);

  }
  
};

    //let imag_path = process.env.PUBLIC_URL;
    // init ===>  component created
    // mounting ==> component loaded
    // useEffect ==> hook it run on side-effect in component
    useEffect(() => {
      getQuickSearchData();
    },[]);
    return(
<>
<section className="row justify-content-center">
        <section className="col-10 mt-3">
          <h3 className="fw-bold text-navy">Quick Searches</h3>
          <p className="text-secondary">Discover restaurants by type of meal</p>
        </section>
        <section className="col-10">
         
          <section className="row py-2">
            <section className="col-12 px-0 d-flex justify-content-between flex-wrap">
              {
            mealType.map((meal)=>{
              return <QuickSearchItem meal={meal} key= {meal._id}/>;
            })
              }
            </section>
          </section>
        </section>
      </section>
 </>
    )
};

export default QuickSearch;