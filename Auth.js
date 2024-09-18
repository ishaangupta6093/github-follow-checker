import axios from 'axios';

const clientId = '<your_client_id>';
const clientSecret = '<your_client_secret>';
const redirectUri = 'http://localhost:3000/callback';

const   
 authorize = () => {
  const authorizationUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user%3Arepo%2Cuser%3Afollow&redirect_uri=${redirectUri}`;
  window.location.href = authorizationUrl;
};

const handleCallback = async (code) => {
  try {
    const response = await axios.post('https://github.com/login/oauth/access_token', {
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri:   
 redirectUri,
      grant_type: 'authorization_code'
    });

    const accessToken = response.data.access_token;
    localStorage.setItem('githubAccessToken', accessToken);
    window.location.href = '/';
  } catch (error) {
    console.error(error);
  }
};

export { authorize, handleCallback };