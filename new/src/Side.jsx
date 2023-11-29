import logo from "./Logo.svg";
import './App.css';
import { useNavigate } from "react-router-dom";

function Side() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };  

  return (
<div>

<div className="sideall">
  <img src={logo} alt=""  onClick={() => handleClick("/")} />
  <div onClick={() => handleClick("/one")}> 웹사이트 소개 </div>
  <div onClick={() => handleClick("/two")}> 사이트 분석 </div>
  <div onClick={() => handleClick("/three")}> 키워드 연구 및 분석 </div>
  <div onClick={() => handleClick("/four")}> 내부 SEO </div>
  <div onClick={() => handleClick("/five")}> 콘텐츠 최적화 </div>
  <div onClick={() => handleClick("/six")}> 사이트 성능 및 속도 </div>
  <div onClick={() => handleClick("/seven")}> 외부 SEO (백링크)  </div>
  <div onClick={() => handleClick("/eight")}> 사이트 보안 및 HTTPS  </div>
  <div onClick={() => handleClick("/nine")}> 검색 엔진 색인 상태  </div>
  <div onClick={() => handleClick("/ten")}> 웹마스터 도구 활용  </div>
  <div onClick={() => handleClick("/oneone")}> 분석 및 리포팅  </div>
  <div onClick={() => handleClick("/onetwo")}> 개선제안과 전략  </div>
</div>




</div>
  );
}

export default Side;
