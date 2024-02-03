import React, { useState } from 'react';

// Sample data for profiles
const profilesData = [
  { id: 1, name: 'John Doe', age: 30, bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imageUrl: 'https://example.com/john.jpg' },
  { id: 2, name: 'Jane Smith', age: 25, bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'https://example.com/jane.jpg' },
  { id: 3, name: 'Alice Johnson', age: 28, bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imageUrl: 'https://example.com/alice.jpg' }
];

const Profile = ({ profile }) => (
  <div className="profile">
    <img src={profile.imageUrl} alt={profile.name} />
    <div className="profile-details">
      <h2>{profile.name}, {profile.age}</h2>
      <p>{profile.bio}</p>
    </div>
  </div>
);

const ProfileList = ({ profiles }) => (
  <div className="profile-list">
    {profiles.map(profile => (
      <Profile key={profile.id} profile={profile} />
    ))}
  </div>
);

const App = () => {
  const [profiles, setProfiles] = useState(profilesData);

  return (
    <div className="App">
      <h1>Profile List</h1>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default App;
