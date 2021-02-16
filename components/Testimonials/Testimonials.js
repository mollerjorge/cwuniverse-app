import React from 'react'
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css'

const Testimonials = () => {
  return (
    <section className="py40">
      <div className="container py-40">
        <div>
          <h2 className="text-center mb-20 text-4xl lg:text-5xl w-sm text-black">
            What they&apos;re saying about us
          </h2>
        </div>
        <div className="flickity-container">
          <Flickity
            options={{
              initialIndex: 1,
            }}
          >
            <div className="border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 ">
              <p className="text-sm leading-5 lg:text-lg font-lato lg:leading-8 antialiased text-gray-600 ">
                “Clockwork has helped us put portfolio monitoring and operations on auto-pilot so we
                can focus on what matters most, while company updates and consolidated LP reporting
                are handled seamlessly.”
              </p>

              <div className="flex justify-start flex-col items-start">
                <div className="object-cover my-5">
                  <img
                    src="/images/magicHour.png"
                    alt="client magic hour"
                    width={100}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-normal w-full antialiased text-base text-gray-900">
                    Jake Sargent, General Partner
                  </p>
                  <p className="text-gray-500 antialiased text-sm ">Magic Hour</p>
                </div>
              </div>
            </div>

            <div className="border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 ">
              <p className="text-sm leading-5 lg:text-lg font-lato lg:leading-8 antialiased text-gray-600 ">
                “My investor communications have become more impactful with Clockwork Universe. This
                has helped foster more collaborative investor relationships as everyone is clearer
                on what my needs are and how they can best support what we’re building.”
              </p>

              <div className="flex justify-start flex-col items-start">
                <div className="object-cover">
                  <img
                    src="/images/ffora.png"
                    alt="client ffora"
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-normal w-full antialiased text-base text-gray-900">
                    Lucy Jones, Founder
                  </p>
                  <p className="text-gray-500 antialiased text-sm ">Ffora</p>
                </div>
              </div>
            </div>
            <div className="border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 ">
              <p className="text-sm leading-5 lg:text-lg font-lato lg:leading-8 antialiased text-gray-600 ">
                “I love that Clockwork Universe helps manage investor communications in one place.
                I&apos;ve noticed that investors are more engaged with our updates, which has led to
                more productive relationships overall.”
              </p>

              <div className="flex justify-start flex-col items-start">
                <div className="object-cover my-5">
                  <img
                    width={80}
                    height={80}
                    className="rounded-full"
                    src="/images/logo-cardboard.png"
                    alt="client"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-normal w-full antialiased text-base text-gray-900">
                    Wilson Hunter, Founder
                  </p>
                  <p className="text-gray-500 antialiased text-sm ">CardBoard Live</p>
                </div>
              </div>
            </div>

            <div className="border-1 border-gray-300 rounded-md w-1/3 h-120 p-12 ">
              <p className="text-sm leading-5 lg:text-lg font-lato lg:leading-8 antialiased text-gray-600 ">
                “Working with Clockwork provides our team with easy, centralized access to key data
                and updates from our portfolio companies, and features like alerts and the weekly
                digest help us better stay on top of our private investments.”
              </p>

              <div className="flex justify-start flex-col items-start">
                <div className="flex flex-col">
                  <p className="font-normal w-full antialiased text-base text-gray-900 mt-10">
                    Moses Gates Holdings
                  </p>
                </div>
              </div>
            </div>
          </Flickity>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
