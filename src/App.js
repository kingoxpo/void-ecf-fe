import React from 'react';
const clientId = process.env.REACT_APP_CAFE24_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CAFE24_CLIENT_SECRET;

const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scope = 'mall.read_application,mall.write_application,mall.read_product,mall.write_product,mall.read_supply,mall.write_supply,mall.read_customer,mall.write_customer,mall.read_order,mall.write_order';

// const authUrl = `https://ecfincofficial.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&code_challenge=${code_challenge}&code_challenge_method=S256`;
const authUrl = `https://ecfincofficial.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${clientId}&state=1234&redirect_uri=${redirectUri}&scope=${scope}`;
console.log(authUrl, 'authUrl--');
    // Base64 인코딩을 통한 Authorization 헤더
const authHeader = 'Basic ' + btoa(`${clientId}:${clientSecret}`);
console.log(authHeader, '--authHeader--');


const App = () => {
  const handleAuth = () => {
    window.location.href = authUrl;
  };
  const handleExcelUploadRedirect = () => {
    window.location.href = '/excel'; // Redirect to Excel upload page
  };

  return (
    <div>
      <button onClick={handleAuth}>Cafe24 인증</button>
      <button onClick={handleExcelUploadRedirect}>엑셀 업로드</button>
    </div>
  );
};

export default App;