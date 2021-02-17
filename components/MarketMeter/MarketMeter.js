import React from 'react'
import PropTypes from 'prop-types'

const MarketMetter = ({ count }) => {
  return (
    <>
      <div className="flex justify-between mt-5">
        <div>
          <img
            style={{ margin: '5px 0' }}
            src="/images/bull-down.svg"
            width={40}
            height={40}
            alt="bearish"
          />
          <span className="text-gray-700">Bearish</span>
        </div>
        <div>
          <img
            style={{ margin: '5px 0' }}
            src="/images/bull-up.svg"
            width={40}
            height={40}
            alt="bull40t"
          />
          <span className="text-gray-700">Bullish</span>
        </div>
      </div>
      <div className="w-full h-5 bg-gray-100 flex mt-5">
        {new Array(count).fill(null).map(() => (
          <div key={Math.random()} className="bg-blue h-5" style={{ width: '10%' }} />
        ))}
      </div>
      <div className="flex justify-between">
        <p>0</p>
        <p>5</p>
        <p>10</p>
      </div>
    </>
  )
}

MarketMetter.propTypes = {
  count: PropTypes.number.isRequired,
}

export default MarketMetter
