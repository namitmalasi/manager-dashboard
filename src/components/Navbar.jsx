import { ChevronDown, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigationLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Clients", path: "/clients" },
    { name: "Time", path: "/time" },
    { name: "Reports", path: "/reports" },
  ];
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-xl font-bold">
        <span className="text-green-400">H </span>O U R S
      </h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `pb-2 ${
                  isActive
                    ? "border-b-2 border-green-400 text-green-400"
                    : "hover:text-green-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* User Profile */}
      <div className="flex items-center space-x-3">
        <UserCircle size={26} />
        <span>Mario</span>
        <ChevronDown />
      </div>
    </nav>
  );
};

export default Navbar;
