import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // 상태 설정
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API에서 데이터 가져오기
    axios
      .get("http://localhost:3001/users")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시 한 번만 실행

  if (loading) return <div>Loading... 업데이트 확인</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
