import React from 'react'

import Header from 'components/Header'

export default function Custom404() {
  return (
    <>
      <Header />
      <div className="justify-center flex-col items-center flex min-h-screen w-full">
        <h1 className="text-9xl md:text-250 leading-tight text-blue-dark mb-0">404</h1>
        <p className="text-4xl md:text-60 mb-10 text-blue-dark">Page not found</p>
        <a href="/" className="btn btn-primary flex items-center">
          Back to home{' '}
          <svg
            className="w-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </a>
      </div>
    </>
  )
}
