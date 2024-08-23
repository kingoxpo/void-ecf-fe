import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get('code');
  const [authCode, setAuthCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    if (code) {
      setAuthCode(code);
      console.log('Authorization Code:', code);
      const codeVerifier = localStorage.getItem('code_verifier');
      const codeChallenge = localStorage.getItem('code_challenge');

      // Access Token 요청
      const fetchToken = async () => {
        try {
          const response = await axios.post('http://localhost:3001/app/auth/token', {
            code,
            code_verifier: codeVerifier,
            code_challenge: codeChallenge,
          });
          console.log(response, 'response--');
          // 응답에서 엑세스 토큰 가져오기
          if (response.data && response.data.access_token) {
            setAccessToken(response.data.access_token);
            console.log('Access Token:', response.data.access_token);
          } else {
            console.error('Access token not found in response:', response.data);
          }
        } catch (error) {
          console.error('Failed to fetch access token:', error);
        }
      };

      fetchToken();
    }
  }, [code]);

  return (
    <div>
      {authCode ? (
        <div>
          <h1>인증 코드가 성공적으로 수신되었습니다:</h1>
          <p>{authCode}</p>
        </div>
      ) : (
        <h1>인증 코드 수신 중...</h1>
      )}
      {accessToken ? (
        <div>
          <h1>엑세스 토큰이 성공적으로 수신되었습니다:</h1>
          <p>{accessToken}</p>
        </div>
      ) : (
        authCode && <h1>엑세스 토큰 수신 중...</h1>
      )}
    </div>
  );
};

export default Callback;
