"use client"

import Image from "next/image";
import { AnimatePresence, motion } from 'framer-motion';
import { FADE_IN_ANIMATION_SETTINGS } from "../../lib/constants";
import UserDropdown from "../Layout/user-dropdown";
import { useSignInModal } from "../Layout/sign-in-modal";

export const Navbar = () => {

    const { SignInModal, setShowSignInModal } = useSignInModal();
    return (
        <>
            <SignInModal />
            <div className="h-16 bg-teal-600 text-white w-full">
                <div className="flex flex-row h-16 justify-between items-center">
                    <div className="flex md:flex lg:flex lg:flex-row xl:flex xl: flex-row items-center">
                        <div className="mr-2 ml-2 mt-1 ">
                            <Image
                                src="https://www.svgrepo.com/show/218756/dashboard.svg"
                                width={24}
                                height={24}
                                alt=""
                            />
                        </div>
                        <span className="font-semibold text-2xl">Dashboard</span>
                    </div>

                    <div className="hidden md:hidden lg:hidden lg:flex-row xl:flex xl:flex-row items-center">
                    </div>
                    <div
                        className="flex md:flex lg:flex xl:hidden items-center mr-4 cursor-pointer"
                    // onClick={handleMenu}
                    >
                        <Image
                            src="https://www.svgrepo.com/show/36538/menu.svg"
                            width={24}
                            height={24}
                            alt=""
                        />
                    </div>
                    <AnimatePresence>
                        {/* {!session && status !== "loading" ? ( */}
                        {!true ? (
                            <motion.button
                                className="rounded-full mr-2 border border-green-400 bg-green-200 p-1.5 px-4 text-sm text-gray-800 transition-all hover:bg-white hover:text-black"
                                onClick={() => setShowSignInModal(true)}
                                {...FADE_IN_ANIMATION_SETTINGS}
                            >
                                Sign In
                            </motion.button>
                        ) : (
                            <UserDropdown />
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </>

    );
};