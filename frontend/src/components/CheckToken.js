import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function CheckToken() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      setAuthenticated(true);
    }
  }, [navigate]);

  return authenticated;
}
