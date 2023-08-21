import Hello from "./Component/Hello";
import Welcome from "./Component/Welcome";



function App() {
  // 변수 
  const name = "Hong";
  let age = 30 ; 
  const naver = {
     name : "네이버",
     url : "https://www.naver.com",
     target : "_blank"
  }
  return (
    <div className="App">
      {/* 컴포넌트 */}
     <Hello></Hello>
     <Welcome></Welcome>
     <Welcome></Welcome>
     {/* {변수,숫자,문자열} 사용가능  */}
     <h1>{'이름 : '}{name},{age}</h1>
     {/* 객체 {객체이름.속성} */}
     <h2><a href={naver.url} target={naver.target}>{naver.name}</a></h2>

    </div>
  );
}

export default App;
