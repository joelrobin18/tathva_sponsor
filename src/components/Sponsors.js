import React from 'react'
import styled from "styled-components"
import "./sponsor.css"
import Sponsor1 from "../assest/sponsor1.jpg"
import Sponsor2 from "../assest/sponsor2.jpg"



function Sponsors() {

    return (
        <div>
            < Heading >
                <h1>Sponsors</h1>
            </Heading >
            <Sponsor>
                <SponsorImg>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </p>
                    <img src={Sponsor1} alt="Sponsors" />
                    <img src={Sponsor2} alt="Sponsors" />
                </SponsorImg>
            </Sponsor >
        </div >
    )
}

export default Sponsors
const Heading = styled.div`
    margin:150px 0px 50px 0px;
    display:flex;
    justify-content:center;
    h1{
        font-family:Origin Tech Demo;
        font-style:normal;
        font-weight:normal;
        font-size:50px;
    }
    
`
const Sponsor = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
margin:0 180px;
bottom:105px;
div{
    margin:10px;
        
}
@media(max-width:768px){
        margin:0 24px;
        justify-content:center;
    }

    p{
        color:white;
        line-height:1.8;
        display:flex;
        justify-content:center;
        text-align:center;
        margin-bottom:15px;
    }
`
const SponsorImg = styled.div`
width:75vw;
margin-top:25px;
justify-content:center;
img{
    width:inherit;
    height:inherit;
}
`