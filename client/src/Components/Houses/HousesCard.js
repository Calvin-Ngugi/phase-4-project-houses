import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

const HousesCard = ({house}) => {

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img
            src={house.image_url}
            className="card-img-top"
            alt="..."
            height={330}
          />
          <div className="card-body">
            <h4 className="card-title">{house.name}</h4>
            <small className="text-muted">House to Let</small>
            <div className="card-text">{house.avg_score}</div>
            <p className="card-text">ksh {house.price}/=</p>
            <div className="card-button row d-flex justify-content-between">
              <button 
                className="btn btn-success ms-2 mb-1 justify-content-center"
                style={{ width: "180px" }}
              >
                <Link to={"/houses/" + house.id} >View House</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HousesCard