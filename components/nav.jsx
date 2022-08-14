import Link from "next/link";

import { BsGearFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="mb-8 bg-gray-900 bg-opacity-70">
      <div className=" text-white container py-6 mx-auto">
        <div className="flex justify-between items-center">
          <h1>
            <Link href={"/"} passHref>
              <a className="text-4xl uppercase text-red-500">
                B4B Deck Builder
              </a>
            </Link>
          </h1>
          <ul className="flex justify-end gap-4 items-center">
            <li>
              <Link href="#" passHref>
                <a className="hover:text-red-500 uppercase">Login</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a className="hover:text-red-500 uppercase">Sign up</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a className="hover:text-red-500 uppercase">Logout</a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a className="hover:text-red-500 uppercase">
                  <FaUserCircle />
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <a className="hover:text-red-500 uppercase">
                  <BsGearFill />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
