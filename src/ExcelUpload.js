import React, { useState } from 'react';
import axios from 'axios';

const ExcelUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    console.log(selectedFile, '---selectedFile');
    if (!selectedFile) {
      alert('Please select an Excel file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:3001/app/excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      alert('File uploaded successfully.');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file.');
    }

    // Clear the file input
    // setSelectedFile(null);
  };

  return (
    <div>
      <h1>Excel Upload Page</h1>
      <input type="file" accept=".xlsx, .xls, .csv" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Excel</button>
    </div>
  );
};

export default ExcelUpload;
