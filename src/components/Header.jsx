import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';


export default function Header() {
    const session = sessionStorage.getItem("account")

    const handleSignOut = () => {
        sessionStorage.clear()
    }
    const navigation = [
        { name: 'Sign Up', href: `/signup`, current: false, isMobile: false },
        { name: 'Sign In', href: '/signin', current: false, isMobile: false },
        { name: 'Manga Mangagement', href: '/manga-management', current: false, isMobile: true },
        { name: 'Sign Out', href: '/signin', current: false, isMobile: true, onClick: handleSignOut },
    ]
    return (
        <Disclosure as="nav" className="bg-gray-200">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-800  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to={'/'} className='font-bold text-lg'>Just Manga</Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {session &&
                                            <Link
                                                to={'/manga-management'}
                                                className='text-black  rounded-md px-3 py-2 text-sm font-medium'
                                            >
                                                Manga Management
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {session ?
                                    <Link
                                        onClick={handleSignOut}
                                        to={'/signin'}
                                        className='text-black  rounded-md px-3 py-2 text-sm font-medium hidden sm:block'
                                    >
                                        Sign Out
                                    </Link>
                                    : navigation.map((item) => {
                                        if (!item.isMobile) {
                                            return <Link
                                                key={"aaa-" + item.name}
                                                to={item.href}
                                                className='text-black  block rounded-md px-3 py-2 text-base font-medium sm:block hidden'
                                            >
                                                {item.name}
                                            </Link>
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {!session ? navigation.map((item) => {
                                if (!item.isMobile) {
                                    return <Link
                                        key={"aaa-" + item.name}
                                        to={item.href}
                                        className='text-black hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                                    >
                                        {item.name}
                                    </Link>
                                }
                            }) :
                                navigation.map((item) => {
                                    if (item.isMobile) {
                                        return <Link
                                            key={"aaa-" + item.name}
                                            onClick={item.onClick}
                                            to={item.href}
                                            className='text-black  block rounded-md px-3 py-2 text-base font-medium'
                                        >
                                            {item.name}
                                        </Link>
                                    }
                                })
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
