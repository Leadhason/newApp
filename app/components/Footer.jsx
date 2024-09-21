import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section>
      <div className="w-full bg-neutral-70">
        <footer className="bg-neutral-100 py-8 px-8">
          <div className="flex justify-between flex-wrap gap-8">
            <div className="flex flex-col">
              <Link href="/">
                  <div className="flex ">
                    <Image
                        src="/unity.png"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                    <h1 className="text-2xl font-bold" >Payless4tech</h1>
                  </div>
              </Link>
              <p className="text-sm text-neutral-600 mt-2">
              Specializes in providing high-quality, stylish products for your wardrobe
              </p>
            </div>
            <div className="flex flex-wrap gap-16">
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">SHOP</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>All Collections</li>
                  <li>Winter Edition</li>
                  <li>Discount</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">COMPANY</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>About Us</li>
                  <li>Contact</li>
                  <li>Affiliates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">SUPPORT</h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>FAQs</li>
                  <li>Cookie Policy</li>
                  <li>Terms of Use</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-800 mb-2">PAYMENT METHODS</h4>
              <div className="flex gap-3">
                <Image
                  src="/card.png"
                  width={32}
                  height={32}
                  alt="Mastercard"
                  className="object-cover"
                />
                <Image
                  src="/visa.png"
                  width={32}
                  height={32}
                  alt="VISA"
                  className="object-cover"
                />
                <Image
                  src="/paypal.png"
                  alt="PayPal"
                  width={32}
                  height={32}
                  className="object-cover"
                />
                <Image
                  src="/momo.jpeg"
                  alt="momo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </div>
            <hr className="my-8 border-neutral-300" />
            <p className="text-sm text-neutral-600 text-center gap-6">
              Copyright ©2022 Nostra. All right reserved
            </p>
            <a href="#" className="text-neutral-900 text-sm">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer