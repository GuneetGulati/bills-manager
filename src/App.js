import  List  from "./List"
import React,{useState, useEffect} from 'react'
import CategoryList from "./CategoryList"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import { selectCategory , setData, selectData } from "./features/data/dataSlice";
import data from "./data.json";

function App() {

  const category = useSelector(selectCategory);
  const catdata =  useSelector(selectData)
  // const dispatch = useDispatch();
  const [newArr , setNewArr] = useState([]);

  useEffect(() => {
    // dispatch(setData({ updatedarr: catdata }));
    let arr = data?.filter(value => value.category === category?.category);
    console.log("yyy",arr);
    
    setNewArr(arr);
  }, [category])

  return (
    <Router>
      <div>

        <Switch>

          <Route path={`/category/${category?.category}` }>
           
          <h1>Congo</h1>
            <CategoryList  />
            {console.log("zz",newArr)}
            <List data={newArr}  />
          </Route>

          <Route path="/" strict>
            {/* {localStorage.removeItem("bill-list")} */}
            <CategoryList data ={data} />
            <List data ={data}/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
