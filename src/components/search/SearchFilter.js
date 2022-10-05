import React from 'react'

 function SearchFilter(props) {
  let {locationList,filterData} = props;
  return (
<>

          <div className="food-shadow col-12 col-lg-3 col-md-4 me-5 p-3 mb-4">
            <div className="d-flex justify-content-between">
              <p className="fw-bold m-0">Filters</p>
              <button
                className="d-lg-none d-md-none btn"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFilter"
                aria-controls="collapseFilter">              
                <span className="fa fa-eye"></span>
              </button>
            </div>
            {/* <!-- Collapse start  --> */}
            <div className="collapse show" id="collapseFilter">
              <div>
                <label htmlFor="" className="form-label">Select Location</label>
                <select className="form-select form-select-sm "
                 onChange={(event)=>filterData(event,"location")}>
                  <option value="">Select a Location</option>
                  {locationList.map((location,index)=>{
                    return  <option key={index} value={location.location_id}>
                      {location.name},{location.city}
                      </option>
                  })}
                </select>
              </div>
              <p className="fw-bold my-3">Cuisine</p>
        <input
          type="checkbox"
          name="cuisine"
          id="north"
          value="1"
          onChange={(event) => filterData(event, "cuisine")}
        />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          North Indian
        </label>
        <br />
        <input
          type="checkbox"
          name="cuisine"
          id="north"
          value="2"
          onChange={(event) => filterData(event, "cuisine")}
        />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          South Indian
        </label>
        <br />
        <input
          type="checkbox"
          name="cuisine"
          id="north"
          value="Chinese"
          onChange={(event) => filterData(event, "cuisine")}
        />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          Chinese
        </label>
        <br />
        <input
          type="checkbox"
          name="cuisine"
          id="north"
          value="3"
          onChange={(event) => filterData(event, "cuisine")}
        />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          Fast Food
        </label>
        <br />
        <input
          type="checkbox"
          name="cuisine"
          id="north"
          value="4"
          onChange={(event) => filterData(event, "cuisine")}
        />
        <label htmlFor="north" className="my-1 thirdColor ms-1">
          Street Food
        </label>
                <p className="mt-4 mb-2 fw-bold">Cost for Two</p>
                <div className="ms-1">
              <input  type="radio" className="form-check-input" value="0-500"
                onChange={(event) => filterData(event, "cost")}               
                name="cost"/>
              <label htmlFor="" className="form-check-label  thirdColor ms-1 ">
              Less than &#8377; 500
              </label>
            </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input" value = "500-1000"
                  onChange={(event)=>filterData(event,"cost")}
                  name="cost"/>
                  <label htmlFor="" className="form-check-label thirdColor ms-1"
                    > &#8377; 500 to &#8377; 1000</label>
                  
                </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input"  value = "1000-1500" 
                  onChange={(event)=>filterData(event,"cost")}
                  name="cost"/>
                  <label htmlFor="" className="form-check-label thirdColor ms-1"
                    > &#8377;1000 to &#8377; 1500</label>
                  
                </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input" value = "1500-2000"
                  onChange={(event)=>filterData(event,"cost")} 
                  name="cost"/>
                  <label htmlFor="" className="form-check-label thirdColor ms-1"
                    > &#8377;1500 to &#8377; 2000</label>
                  
                </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input" value = "2000-200000"
                  onChange={(event)=>filterData(event,"cost")}
                  name="cost" />
                  <label htmlFor="" className="form-check-label thirdColor ms-1">&#8377;2000+</label>
                </div>
              </div>
              <p className="mt-4 mb-2 fw-bold">Sort</p>
              <div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input"  value="1" name="sortByPrices"
                  onChange={(event)=>filterData(event,"sort")} />
                  <label htmlFor="" className="form-check-label thirdColor ms-1"
                    >Price low to high</label>
                  
                </div>
                <div className="ms-1">
                  <input type="radio" className="form-check-input"  value="-1" name="sortByPrices" 
                  onChange={(event)=>filterData(event,"sort")}/>
                  <label htmlFor="" className="form-check-label thirdColor ms-1"
                    >Price high to low</label>
                  
                </div>
              </div>
            </div>
          
           {/* <!-- Collapse end --> */}

</>
  );
}

export default SearchFilter;