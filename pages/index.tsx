import axios from 'axios';
import { useState } from 'react';
import JSONPretty from 'react-json-pretty';

const HomePage = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);

  const checkSpelling = async () => {
    try {
      const response = await axios.post('/api/spellingCheck', { text });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const checkSpelling2 = async () => {
    try {
      const response2 = await axios.post('/api/spellingCheck2', { text });
      setResult2(response2.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '30px' }}>
      <input
        style={{ border: '1px solid black', width: '500px', padding: '5px' }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          checkSpelling();
          checkSpelling2();
        }}
      >
        Check
      </button>

      {result && (
        <div style={{ marginTop: '20px' }}>
          <h3>맞춤법 검사 결과(DAUM):</h3>
          <JSONPretty
            style={{ marginTop: '10px' }}
            id="json-pretty"
            data={result}
          ></JSONPretty>
        </div>
      )}

      {result2 && (
        <div style={{ marginTop: '20px' }}>
          <h3>맞춤법 검사 결과(부산대):</h3>
          <JSONPretty
            style={{ marginTop: '10px' }}
            id="json-pretty"
            data={result2}
          ></JSONPretty>
        </div>
      )}
    </div>
  );
};

export default HomePage;
