import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-4 mt-4 text-white bg-gray-900">
      <div className="flex justify-between container mx-auto">
        <p>
          Created by{" "}
          <a
            href="https://codingjustin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500"
          >
            CodingJustin
          </a>
        </p>
        <div>
          <a
            href="https://github.com/justingarcianm/b4b-deck-builder"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-xl hover:text-red-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
