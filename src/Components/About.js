import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState("");

  const getData = () => {
    setLoading(true);
    try {
      axios
        .get("http://localhost:4000/about")
        .then((value) => setData(value.data));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const addData = () => {
    console.log("추가 요청");
    if (data.findIndex((value) => value.text === inputData) !== -1) {
      alert("중복된 데이터는 입력할 수 없습니다");
      return;
    }

    axios
      .post("http://localhost:4000/about", { text: inputData })
      .then((value) => {
        setData(value.data);
      });
    setInputData("");
  };

  const click = (e) => {
    setInputData(e.target.value);
  };

  const remove = (id) => {
    console.log("삭제 요청");
    axios
      .post("http://localhost:4000/about/delete", { text: id })
      .then((value) => {
        setData(value.data);
      });
  };

  if (loading) {
    return (
      <>
        <h1>로딩중입니다</h1>
        <button
          onClick={() => {
            setLoading(!loading);
          }}
        >
          로딩 해제
        </button>
      </>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <input
        type="text"
        placeholder="데이터를 입력하세요"
        onChange={click}
        value={inputData}
      ></input>
      <button onClick={addData}>데이터 추가</button>
      {data.map((value, index) => (
        <h1 key={index} onClick={() => remove(value.text)}>
          {value.text}
        </h1>
      ))}

      <Link to="/">홈페이지 바로가기</Link>
    </>
  );
};

export default About;
