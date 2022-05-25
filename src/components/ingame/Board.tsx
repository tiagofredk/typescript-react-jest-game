import React from 'react'

export default function Board() {

    const myRef = React.useRef<HTMLDivElement>(null);

    const runCallback = () => {
        const row = [];
        for (var i = 1; i <= 99; i++) {
            row.push(
                <div ref={myRef} key={i} className={`place${i}`}>
                    <p>{i}</p>
                </div>
            );
        }
        return row;
    }

    function getPosition() {
        const element = document.getElementsByClassName('place3')[0];
        const rect = element.getBoundingClientRect();
        
        console.log(element);
        console.log(rect.y);
        console.log(rect.x);
        // console.log(rect);
        // console.log(`Coordinates: X: ${x}px, Y: ${y}px`);
        // return { x, y };
    }
    // document.getElementsByClassName('place1')[0].addEventListener("click", getPosition);

    return (
        <div className='board-container'>
            <section className='board'>
                {runCallback()}
            </section>
            <button onClick={()=> getPosition()}>Position</button>
        </div>
    )
}