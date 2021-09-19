// import React from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { setUser, logout, selectUser } from "./dataSlice";

// function Login() {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   const logintoApp = () => {
//     dispatch(setUser({ user: "guneet" }));
//   };

//   return (
//     <div>
//       {user ? <h2>The user is {user}</h2> : <h2>No user is logged in</h2>}
//       <p>I am in Login Components</p>
//       <button onClick={logintoApp}>Log Me in</button>

//       <button onClick={() => dispatch(logout())}>Logout</button>
//     </div>
//   );
// }

// export default Login;