
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


function Search() {
  const user = useSelector(store => store.auth.user);
  console.log(user,"user")
  const [search, setSearch] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get(`https://medicalstore.mashupstack.com/api/medicine/search?keyword=${keyword}`,{
      headers: 
        {'Authorization': 'Bearer ' + user.token}
    } 
     
    ).then(response=>{
      console.log(response.data,"respone in")
      setSearch(response.data)
    })
  }, [keyword,user.token])

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <form >
        <input
          type="text" placeholder="Search here "value={keyword} onChange={handleChange  }/>
      
      </form>
      <div>
        {search.map((search) => (
          <div key={search.id}>
            <h3>{search.name}</h3>
            <p>Company: {search.company}</p>
            <p>Expiry date: {search.expiry_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;