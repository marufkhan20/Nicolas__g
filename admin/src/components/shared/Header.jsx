import toast from "react-hot-toast";
import { FaBars } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../app/features/auth/authSlice";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Header = ({ setOpenSidebar }) => {
  // logout handler
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLoggedOut());
    toast.success("Logged out successfully");
  };

  return (
    <header className="py-6 bg-white flex items-center justify-between gap-5 flex-wrap pr-8">
      <div className="flex items-center gap-5">
        <FaBars
          onClick={() => setOpenSidebar(true)}
          className="block lg:hidden cursor-pointer"
        />
        <div className="flex items-center gap-5">
          <RiSearchLine className="text-2xl" />
          <Input placeholder="Search..." />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Button onClick={logoutHandler}>Logout</Button>
        <img
          src="https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg"
          alt="avatar"
          className="w-[30px] h-[30px] rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
