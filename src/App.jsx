import React from "react";
import { useState, useEffect } from "react";
import User from "./components/User";
import "./index.scss";

export default function App() {
  const [isLoading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('antony-black');

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();

      if (data) {
        setUserData(data);
        setLoading(false);
      }
    } catch(e) {
      setErrorMsg(e);
      setLoading(false);
    }
  }  

  useEffect(() => {
    fetchUserData();
  },[]);

  if (isLoading) {
    return <div>...loading</div>;
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }
  
  return <div className="main-container">
    <div className="input-container">
      <input 
      name="search-user" 
      type="text" placeholder="Enter the name..." 
      
      value={userName} onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={fetchUserData}>SEARCH</button>
    </div>
    <div className="user-data">
      {userData && <User userData={userData}/>}
    </div>
  </div>;
}















// import { useEffect } from "react";
// import { useState } from "react";
// import User from "./components/User";
// import "./index.scss";

// export default function App() {
//   const [userName, setUserName] = useState("sangammukherjee");
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchGithubUserData() {
//     setLoading(true);
//     const res = await fetch(`https://api.github.com/users/${userName}`);

//     const data = await res.json();
//     if (data) {
//       setUserData(data);
//       setLoading(false);
//       setUserName('')
//     }
//   }

//   function handleSubmit() {
//     fetchGithubUserData()
//   }

//   useEffect(() => {
//     fetchGithubUserData();
//   }, []);

//   if (loading) {
//     return <h1>Loading data ! Please wait</h1>;
//   }

//   return (
//     <div className="github-profile-container">
//       <div className="input-wrapper">
//         <input
//           name="search-by-username"
//           type="text"
//           placeholder="Search Github Username..."
//           value={userName}
//           onChange={(event) => setUserName(event.target.value)}
//         />
//         <button onClick={handleSubmit}>Search</button>
//       </div>
//       {userData !== null ? <User user={userData} /> : null}
//     </div>
//   );
// }