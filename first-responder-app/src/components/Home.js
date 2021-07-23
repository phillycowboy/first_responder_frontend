import React from 'react'

const Home = () => {
    return(
        <div className="slide-in-right">
            <div className="home-logo">
                <div className="tracking-in-contract-bck-top">
                <h1><strong>FIRST RESPONDER</strong></h1>
                </div>
            </div>
            <img src="https://images.pexels.com/photos/6520084/pexels-photo-6520084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500" alt="ambulance" className="home-image"/>
            <div className="emt-logo">
                <img src="https://media.istockphoto.com/vectors/medical-care-vector-icon-vector-id960975360?k=6&m=960975360&s=612x612&w=0&h=ra8KHiezr_tqbyTblKfWuLN8W4-gYz22_0kcIaKH14c=" alt="emt" />
            </div>
        </div>
    )
}

export default Home