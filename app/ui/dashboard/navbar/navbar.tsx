import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/dashboard/profile">Profile</Link>
      <Link href="/dashboard/settings">Settings</Link>
    </div>
  );
}

export default Navbar;