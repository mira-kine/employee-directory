import { createContext, useContext, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState([
    profile
      ? {
          name: profile.name,
          birthday: profile.date,
          bio: profile.bio,
          email: profile.email,
        }
      : {},
  ]);
  const [loading, setLoading] = useState(false);

  // useEffect to try catch a profile
  useEffect(() => {
    try {
      const resp = getProfile();
      // if there is profile, set into state
      setProfile(resp);
      setLoading(true);
    } catch (e) {
      // if no profile, set empty object
      throw error;
    } finally {
      setLoading(false);
    }
  }, [loading]);

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
