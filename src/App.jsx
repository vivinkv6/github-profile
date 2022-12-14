import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Input from "./components/Input";
import Cards from "./components/Cards";

function App() {
  //github api -> https://api.github.com/users/
  const [user, setUser] = useState("");
  const [userDetails, setUserDetails] = useState({});
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = await (await axios.get(`https://api.github.com/users/${user}`)).data;
        setUserDetails(query);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="container">
      <Input
        user={user}
        setUser={setUser}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      {user.length<=0   ?
      
       <h1 align="center" style={{marginTop:'50px'}}>No Github user</h1>
       :
       <Cards userDetails={userDetails} />
      }
    </div>
  );
}

export default App;
