import React from 'react';
import "./ProfileScreen.css";
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return <div className='profileScreen'>
    <Nav />
    <div className="profileScreen__body">
      <h1>Edit Profile</h1>
      <div className="profileScreen__info">
        <img
          src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
          alt=""
        />
        <div className="profileScreen__details">
          <h2>{user.email}</h2>
          <div className="profileScreen__plans">
            <h3>Plans</h3>
            <PlansScreen />
            <button
              onClick={() => auth.signOut()}
              className="profileScreen__signOut">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default ProfileScreen;
