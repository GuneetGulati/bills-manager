import React,{useState} from "react";
import { useSelector } from "react-redux";
import { selectData } from "./features/data/dataSlice";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCategory } from "./features/data/dataSlice";

function CategoryList() {
  const data = useSelector(selectData);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
            setAnchorEl(null)
    };
  
    const clickHandle = (val) =>{
       
        dispatch(setCategory({ category: val }));

        history.push(`/category/${val}`);
    }
    
    const handlehome = () =>{
      localStorage.removeItem("bill-list");
      history.push("/");
      window.location.reload();
    }

  return (
    <div>
      <button onClick={()=>handlehome()}>Home</button>
        <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            CATEGORY
            </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>

            {data.updatedarr?.map((res) => (
                <MenuItem key = {res.id} value ={res.category}  onClick = {()=> clickHandle(res.category)}   >{res.category}</MenuItem>
                ))}
            
        </Menu>
    </div>
  );
}

export default CategoryList;
