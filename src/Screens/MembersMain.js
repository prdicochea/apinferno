import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logoutButton";

const coran = 'https://api.quran.com/api/v4/chapters?language=en';

const getData = function(){
  fetch(coran).then(response => {
    console.log(response.json());
  })
}

getData();

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }


  return (
    isAuthenticated && (
      
      <div>
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <LogoutButton />
        </div>
        <div>
          <h3>Leer el Corán</h3>
          
        </div>
      </div>

      
      
    )
  );
};

export default Profile;