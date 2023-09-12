import {age, name, hello} from './data.js'; // ./(현재경로) ../(상위폴더)

export default function Cart() {
    return (
      <div>
      {hello}
      <h4 className="title">Cart</h4>
        <CartItem/>
      </div> 
    )
  }
  function CartItem() {
    return (
      <div className="cart-item">
        <p>상품명 {age}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    )
  }


  // 1. server component
    // - html에 자바스크립 기능 넣기 불가능
    // - useState, useEffect 안됨
    // - 로딩속도 빠름
    // - 검색엔진 노출
    // - 큰페이지는 server component
  // 2. client component `user client 넣고 만들면
    // - 로딩속도 느림(자바스크립트 많이 필요)
    // - htdration(분석) 필요
    // - JS 기능필요한곳만 clent component
