import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from '../context/UserProvider';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: '',
    birthday: '',
    bio: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  // useEffect to try catch a profile
  // grab user and put into dependency array
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const resp = await getProfile();
        // if there is profile, set into state
        if (resp.length > 0) {
          setProfile(resp[0]);
        }
      } catch (e) {
        // if no profile, set empty object
        setProfile({ name: '', birthday: '', bio: '', email: '' });
      }
    };
    fetchProfile();
    setLoading(false);
  }, [user]);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, loading }}>
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
