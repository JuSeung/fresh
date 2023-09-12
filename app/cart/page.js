import {age, name, hello} from './data.js'; // ./(현재경로) ../(상위폴더)

export default function Cart() {
    let carts = ['Tomatoes', 'Pasta'];
    return (
      <div>
        {hello}
        <h4 className="title">Cart</h4>
        <CartItem item={carts[0]}/>
        <Banner content="롯데카드"/>
        <Banner content="현대카드"/>
        <Btn color="red"/>
        <Btn color="blue"/>
      </div> 
    )
  }
  
  function Btn(props){
    return <button style={{ background : props.color }}>버튼임</button>
  }

  function Banner(props) {
    return <h5>{props.content} 결제 행사중</h5>
  }

  function CartItem(props) {
    return (
      <div className="cart-item">
        <p>{props.item}</p>
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
