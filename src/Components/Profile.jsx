import { Card, Dropdown } from "flowbite-react";
import Image from "../assets/1.jpeg";

export const Profile = () => {

    return (
        <Card className="max-w-full m-3">
          <div className="flex justify-between px-4 pt-4 flex-wrap">
          </div>

          <div className="flex items-center pb-10 space-x-4"> {/* Menambahkan flex dan space-x-4 */}
            <img
              alt="Photo Profile"
              height="96"
              src={Image}
              width="96"
              className="rounded-full shadow-lg"
            />

            <div className="flex flex-col">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Ananda Puttra</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Ananda Puttra</h5>
            <h2>Phone: +62 812-2099-5629</h2>
            <h5>Email: nand@Gmail.com</h5>
            <h5>GitHub: [Your GitHub Link]</h5>
            <h5>LinkedIn: [Your LinkedIn Link]</h5>
          </div>
        </Card>
    );
};
