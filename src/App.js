import "./App.css";
import React, { useState, useEffect } from "react";
import data from "./data.json";
import { Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Form } from "react-bootstrap";

function getModalStyle() {
  const top = 30;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyl = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 378,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid lightgray",
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 2, 4),
    outlineStyle: "none",
  },
}));

function App() {
  const classes = useStyl();
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const [budget, setBudget] = useState();
  const [arr, setArr] = useState(data);
  const [openEdit, setOpenEdit] = useState(false);

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState();
  const [date, setDate] = useState();
  const [saveid, setSaveid] = useState();
  const [newObj, setNewObj] = useState({});

  useEffect(() => {
    const localdata = localStorage.getItem("bill-list");
    if (localdata) {
      setArr(JSON.parse(localdata));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bill-list", JSON.stringify(arr));
  }, [arr]);

  function removeData(id) {
    const newArr = arr.filter((res) => res.id !== id);
    setArr(newArr);
  }

  function addData(event, id) {
    var obj = {
      id: id,
      description: description,
      category: category,
      amount: amount,
      date: date,
    };

    setArr([obj, ...arr]);

    console.log("xx", obj);

    setOpen(false);
  }

  let obj = {};

  function editData(e, id) {
    setSaveid(id);

    arr.map((e) => e.id == id && (obj = e));
    console.log(obj);

    setDescription(obj.description);
    setCategory(obj.category);
    setAmount(obj.amount);
    setDate(obj.date);

    console.log("yy", obj);
    setOpenEdit(true);
  }

  function Addmodel(e) {
    setDescription("");
    setCategory("");
    setAmount();
    setDate();
    setOpen(true);
  }

  function submitEdit(e) {
    e.preventDefault();
    let ex = {
      id: saveid,
      description: description,
      category: category,
      amount: amount,
      date: date,
    };
    console.log("edid", ex);

    const elementsIndex = arr.findIndex((element) => element.id == saveid);
    let newArray = [...arr];
    console.log("newww", ex);
    newArray[elementsIndex] = ex;

    setArr(newArray);

    setOpenEdit(false);
  }

  return (
    <div className="App">
      <input
        type="number"
        placeholder="enter budget"
        onChange={(e) => setBudget(e.target.value)}
        value={budget}
      />
      <h3>Your Budget: {budget} </h3>

      <button
        onClick={(e) => Addmodel(e, Math.floor(Math.random() * 1000 + 1))}
      >
        Add
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_login">
            <center className="ds">
              <h3>Add data</h3>
            </center>

            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />

            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
            />

            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            />

            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
            />

            <center className="ds">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                classname="butonn"
                onClick={(e) => addData(e)}
              >
                Submit
              </Button>
            </center>
          </form>
        </div>
      </Modal>

      <Modal open={openEdit} onClose={() => setOpenEdit(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app_login">
            <center className="ds">
              <h3>Edit data</h3>
            </center>

            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />

            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
            />

            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
            />

            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Date"
            />

            <center className="ds">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                classname="butonn"
                onClick={(e) => submitEdit(e)}
              >
                Submit
              </Button>
            </center>
          </form>
        </div>
      </Modal>

      {arr.map((res) => {
        return (
          <div id={res.id}>
            <h1>{res.description}</h1>
            <h3>{res.category}</h3>
            <h3>Amount: {res.amount}</h3>
            <h3>Due Date: {res.date}</h3>
            <button onClick={() => removeData(res.id)}>Remove</button>
            <button onClick={(e) => editData(e, res.id)}>Edit</button>

            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
