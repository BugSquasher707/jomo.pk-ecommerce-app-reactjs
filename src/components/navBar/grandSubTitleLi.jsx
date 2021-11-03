import React from 'react'

function GrandSubTitleLi({imgVal, textVal}) {
    return (
        <div>

            <div className="subTitleContentDiv">

                <div className="leftSide menLeftSide" style={{backgroundImage: `url(${imgVal})`}}></div>

                <div>

                    <h1 className='liH1 menLi'>{textVal}</h1>

                </div>

            </div>

        </div>
    )
}

export default GrandSubTitleLi
