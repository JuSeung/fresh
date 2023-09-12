'use client'

import { useState } from "react";

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Cocount'];
    // state : 데이터 잠깐 저장
    // 장점 : state 변경되면 사용하고 있는 html 자동 랜더링 된다.
    // state 자주쓰면 좋지만 굳이 안바뀌는 데이터는 안해도 된다.
    let [수량, 수량변경] = useState([0,0,0]);

    return (
        <div>
          <h4 className="title"> 상품목록 </h4>
            {/* <span>{수량[0]}</span>
            <button onClick={() => {
                let copy = [...수량];
                copy[0] ++;
                수량변경(copy);
            }}> + </button> */}
            {
                상품.map((a, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"></img>
                            <h4>{a} $40 </h4>
                            <span> {수량[i]} </span>
                            <button onClick={() => {
                                    let plusCopy = [...수량];
                                    plusCopy[i]++;
                                    수량변경(plusCopy);
                            }}>+</button>
                            <button onClick={() => {
                                    let minusCopy = [...수량];
                                    minusCopy[i]--; 
                                    수량변경(minusCopy)
                            }}>-</button>
                        </div>
                    )
                })
            }            
        </div>
    )
  }
  