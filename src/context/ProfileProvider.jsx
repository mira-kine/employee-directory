import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    birthday: '',
    bio: '',
    email: '',
  });

  // useEffect to try catch a profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const resp = await getProfile();
        // if there is profile, set into state
        if (resp.length > 0) {
          setProfile(resp);
        }
      } catch (e) {
        // if no profile, set empty object
        setProfile({ name: '', birthday: '', bio: '', email: '' });
      }
    };
    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export { ProfileProvider, useProfile };
