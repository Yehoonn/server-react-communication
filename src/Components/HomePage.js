import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>홈페이지 입니다</h1>
      <Link to="/about">어바웃 바로가기</Link>
    </>
  );
};

export default HomePage;
