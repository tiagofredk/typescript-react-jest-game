import React from 'react'

export default function Board() {

    const runCallback = () => {
        const row = [];
        for (var i = 0; i <= 99; i++) {
            row.push(
                <div key={i} className={`place${i}`}>
                    <p >{i}</p>
                </div>
            );
        }
        return row;
    }

    return (
        <div className='container'>
            <section className='board'>
                {
                    runCallback()
                }
            </section>
        </div>
    )
}