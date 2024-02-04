import React from 'react';

// Personal Profile Example
const PersonalProfile = () => {
  const profileData = {
    name: 'Jane Doe',
    age: 30,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://example.com/jane.jpg',
    location: 'Blacksburg, VA',
    major: 'Computer Science'
  };

  return (
    <div className="personal-profile">
      <img src={profileData.imageUrl} alt={profileData.name} />
      <div className="profile-details">
        <h2>{profileData.name}</h2>
        <p>Age: {profileData.age}</p>
        <p>Location: {profileData.location}</p>
        <p>Major: {profileData.major}</p>
        <p>Bio: {profileData.bio}</p>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div className="App">
      <h1>Personal Profile</h1>
      <PersonalProfile />
    </div>
  );
};

export default App;