import React from 'react'
import Footer from './components/Footer' 
import Navbar from './components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <section className="mx-10 my-5">
      <Navbar />

      {/*Hero Section*/}
      <div className="relative mt-8">
        <div className="w-full h-[450px] bg-neutral-200 rounded-lg overflow-hidden relative">
          <Image 
            src="/hero.jpg"
            layout="fill"

            alt="hero"
            className="object-fill w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-5xl font-bold leading-tight max-w-[800px] mx-auto">
            Upgrade your tech game with our latest laptop collection!
            </h1>
            <Link href="#">
              <button className="mt-6 px-6 py-3 bg-white rounded-full text-sm font-bold text-black flex items-center">
                Shop now 
                <Image
                  src="/right-arrow.png"
                  width={20}
                  height={20}
                  alt="arrow"
                  className="ml-2 material-symbols-outlined"
                />
              </button>
            </Link>
          </div>
          <div className="flex justify-between">
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white-300 rounded-full p-3 shadow-md">
              <Image
                src="/less-than.png"
                width={20}
                height={20}
                alt="arrow"
                className="material-symbols-outlined"
              />
            </button>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white-300 rounded-full p-3 shadow-md">
              <Image
                  src="/greater-than.png"
                  width={20}
                  height={20}
                  alt="arrow"
                  className="material-symbols-outlined"
              />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
          </div>
    	  </div>

        <div className="flex justify-between mt-8 gap-6">
    	    <div className="flex flex-col items-center text-center gap-4">
    	      <div className="bg-neutral-100 p-4 rounded-md">
    	        <Image
                src="/security.png"
                width={30}
                height={30}
                alt="original"
                className="material-symbols-outlined text-neutral-500 text-2xl"
              />
    	      </div>
    	      <div>
    	        <h3 className="font-title text-md font-semibold">Original Products</h3>
    	        <p className="text-neutral-500 text-sm">
    	          We provide money back guarantee if the product are not original
    	        </p>
    	      </div>
    	    </div>
    	    <div className="flex flex-col items-center text-center gap-4">
    	      <div className="bg-neutral-100 p-4 rounded-md">
    	        <Image
                src="/verified.png"
                width={30}
                height={30}
                alt="satisfaction"
                className="material-symbols-outlined text-neutral-500 text-2xl"
              />
    	      </div>
    	      <div>
    	        <h3 className="font-title text-md font-semibold">
    	          Satisfaction Guarantee
    	        </h3>
    	        <p className="text-neutral-500 text-sm">
    	          Exchange the product you've purchased if it doesn't fit on you
    	        </p>
    	      </div>
    	    </div>
    	    <div className="flex flex-col items-center text-center gap-4">
    	      <div className="bg-neutral-100 p-4 rounded-md">
    	        <Image
                src="/new-release.png"
                width={30} 
                height={30}
                alt="new"
                className="material-symbols-outlined text-neutral-500 text-2xl"
              />
    	      </div>
    	      <div>
    	        <h3 className="font-title text-md font-semibold">New Arrival Everyday</h3>
    	        <p className="text-neutral-500 text-sm">
    	          We updates our collections almost everyday
    	        </p>
    	      </div>
    	    </div>

    	    <div className="flex flex-col items-center text-center gap-4">
    	      <div className="bg-neutral-100 p-4 rounded-md">
    	        <Image 
                src="/delivery.png"
                width={30}
                height={30}
                alt="shipping"
                className="material-symbols-outlined text-neutral-500 text-2xl"
              />
    	      </div>
    	      <div>
    	        <h3 className="font-title text-md font-semibold">Fast & Free Shipping</h3>
    	        <p className="text-neutral-500 text-sm">
    	          We offer fast and free shipping for our loyal customers
    	        </p>
    	      </div>
    	    </div>
        </div>

        <div className="my-10 w-ful flex shadow rounded-0 overflow-hidden">
          <div className="bg-gray-300">
            <Image
              src="/lappy.png"
              width={1200}
              height={400}
              alt="banner"
              className="w-[450px] h-[250px] object-cover"
            />
          </div>
          <div className="bg-neutral-900 text-neutral-50 flex flex-col justify-center px-8 py-6 w-full">
            <p className="text-sm uppercase tracking-wide mb-2">Limited Offer</p>
            <h2 className="text-4xl font-title mb-4">35% off only this friday and get special gift</h2>
            <button className="bg-neutral-50 text-neutral-900 px-6 py-3 rounded-md flex items-center justify-center gap-2 w-fit">
              Grab it now
              <Image
                src="/right-arrow.png"
                width={20}
                height={20}
                alt="arrow"
                className="material-symbols-outlined"
              />
            </button>
    	    </div>
        </div>


        <div className='w-full bg-white p-8'>
            <h2 className="font-title text-2xl font-bold text-center mb-4">
              Subscribe to our newsletter to get updates to our latest collections
            </h2>
            <p className="text-center text-neutral-500 mb-6">
              Get 20% off on your first order just by subscribing to our newsletter
            </p>
            <div className="flex items-center justify-center gap-2">
              <form className="relative w-[280px]">
                <Image
                  src="/email.png"
                  width={20}
                  height={20}
                  alt="email"
                  className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"
                />
                <input 
                  type="email" 
                  className="w-full pl-12 py-3 rounded-md border border-neutral-300 focus:outline-none focus:border-neutral-500"
                  placeholder="Enter your email" 
                />
              </form>
              <button className="bg-neutral-900 text-white rounded-md px-6 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-center text-neutral-500 mt-4">
              You will be able to unsubscribe at any time.
            </p>
          </div>
      </div>
      <Footer />
    </section>
  )
}

export default Home