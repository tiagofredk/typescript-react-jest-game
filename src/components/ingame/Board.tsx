import React from 'react'

export default function Board() {

    const createPlaces = () => {
        const row = [];
        for (var i = 1; i <= 99; i++) {
            row.push(
                <div key={i} className={`place${i}`}>
                    <p>{i}</p>
                </div>
            );
        }
        return row;
    }

    return (
        <div className='board-container'>
            <section className='board'>
                {createPlaces()}
            </section>
        </div>
    )
}