import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleCallback } from './Auth';

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      handleCallback(code);
      navigate('/');
    }
  }, []);

  return <div>Redirecting...</div>;
}

export default Callback;