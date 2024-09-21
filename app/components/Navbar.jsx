import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <section>
        <header className="flex justify-between items-center px-6 py-4">
            <Link href="/">
                <div className="flex ">
                <Image
                    src="/unity.png"
                    width={40}
                    height={40}
                    alt="logo"
                />
                <h1 className="text-3xl font-bold" >Payless4tech</h1>
                </div>
            </Link>
            <nav className='flex items-center space-x-6'>
                <Link href='#' className='text-sm font-bold'>Home</Link>
                <Link href='#' className='text-sm font-bold'>Shop</Link>
                <Link href='#' className='text-sm font-bold'>Blog</Link>
                <Link href='#' className='text-sm font-bold'>Contact</Link>
            </nav>
            <div className="flex items-center gap-8">
                <form className="relative flex items-center border rounded-full w-full max-w-sm">
                    <input
                    type="text"
                    placeholder="Search"
                    className="border-none outline-none rounded-full px-4 py-2 max-w-md w-72"
                    />
                    <button className="px-5 -mt-6 py-2 -mb-1">
                        <Image 
                            src="/search.png"
                            width={20}
                            height={20}
                            alt="search"
                            className="absolute right-2"
                        />
                    </button>
                </form>
                <button>
                    <Image
                        src="/cart.png"
                        width={30}
                        height={30}
                        alt="user"
                    />
                </button>
                <button>
                    <Image
                        src="/user.png"
                        width={30}
                        height={30}
                        alt="user"
                    />
                </button>
            </div>
        </header>
    </section>
  )
}

export default Navbar