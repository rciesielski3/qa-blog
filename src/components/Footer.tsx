import { Footer as FlowbiteFooter } from "flowbite-react";

const Footer = () => {
  return (
    <FlowbiteFooter className="bg-gray-800 text-white mt-10">
      <div className="w-full text-center py-4 p-10">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a
            className="hover:underline hover:text-blue-500"
            href="https://github.com/rciesielski3"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:underline hover:text-blue-500"
            href="https://rciesielski3.github.io/portfolio/"
            target="_blank"
          >
            Portfolio
          </a>
          <a
            className="hover:underline hover:text-blue-500"
            href="https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <p>Copyright © 2024 👨🏼‍💻 Author: Rafał Ciesielski</p>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
