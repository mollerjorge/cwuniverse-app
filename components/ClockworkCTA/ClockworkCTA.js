import React from 'react'

const ClockworkCTA = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-20 items-start">
      <img
        className="mr-16 mb-10 sm:mb-0"
        src="/images/clockwork.png"
        width={150}
        height={50}
        alt="clockwork"
      />

      <p className="font-lato antialiased font-normal leading-10 tracking-normal">
        <b>Clockwork Universe</b> is a free platform for founders looking to streamline investor
        reporting and collaboration. At Clockwork, we built this product with the idea in mind that
        all founders should have access to easy to use, sleek investor reporting software to saves
        time and energy when crafting impactful investor updates, and helps them to keep honest with
        consistency around reporting. If you’re ready to get the most out of your investor
        relationships, create your Clockwork Universe founder profile{' '}
        <a
          className="text-blue-dark"
          href="https://cwuniverse.app/sign-up?utm_source=clockwork&amp;utm_medium=website&amp;utm_campaign=general"
        >
          here
        </a>{' '}
        or contact us at
        <a className="text-blue-dark" href="mailto:contact@clockwork.app">
          contact@clockwork.app
        </a>{' '}
        to find out how Universe can meet your needs.
      </p>
    </div>
  )
}

export default ClockworkCTA
