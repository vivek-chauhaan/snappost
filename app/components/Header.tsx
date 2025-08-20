// "use client";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";
// import { Home, User } from "lucide-react";
// import { useNotification } from "./Notification";

// export default function Header() {
//   const { data: session } = useSession();
//   const { showNotification } = useNotification();

//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       showNotification("Signed out successfully", "success");
//     } catch {
//       showNotification("Failed to sign out", "error");
//     }
//   };

//   return (
//     <header className="  sticky top-0 z-50 shadow-md">
//       <div className="container  mx-auto flex items-center justify-between px-4 py-2">
//         {/* Logo */}
//         <Link
//           href="/"
//           prefetch={true}
//           className="flex items-center gap-2 text-xl font-bold normal-case btn btn-ghost"
//           onClick={() =>
//             showNotification("Welcome to ImageKit ReelsPro", "info")
//           }
//         >
//           <Home className="w-5 h-5" />
//           ImageKit ReelsPro
//         </Link>
//         {/* User Menu */}
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle hover:bg-base-200 transition-colors"
//           >
//             <User className="w-5 h-5" />
//           </div>

//           <ul className="dropdown-content z-50 shadow-lg bg-base-100 rounded-lg w-64 mt-2 py-2">
//             {session ? (
//               <>
//                 {/* User Info */}
//                 <li className="px-4 py-2">
//                   <span className="text-sm opacity-70">
//                     {session.user?.email?.split("@")[0]}
//                   </span>
//                 </li>
//                 <div className="divider my-1"></div>

//                 {/* Dashboard Link */}
//                 <li>
//                   <Link
//                     href="/upload"
//                     className="block w-full px-4 py-2 text-base hover:bg-base-200 transition-colors"
//                     onClick={() =>
//                       showNotification("Welcome to Admin Dashboard", "info")
//                     }
//                   >
//                     Video Upload
//                   </Link>
//                 </li>

//                 {/* Sign Out */}
//                 <li>
//                   <button
//                     onClick={handleSignOut}
//                     className="w-full text-left px-4 py-2 text-error hover:bg-base-200 transition-colors"
//                   >
//                     Sign Out
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <Link
//                   href="/login"
//                   className="block w-full px-4 py-2 text-base hover:bg-base-200 transition-colors"
//                   onClick={() =>
//                     showNotification("Please sign in to continue", "info")
//                   }
//                 >
//                   Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";
// import { Home, User, LogOut, Upload } from "lucide-react";
// import { useNotification } from "./Notification";

// export default function Header() {
//   const { data: session } = useSession();
//   const { showNotification } = useNotification();

//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       showNotification("Signed out successfully", "success");
//     } catch {
//       showNotification("Failed to sign out", "error");
//     }
//   };

//   return (
//     <header className="sticky top-0 z-50 shadow-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
//       <div className="container mx-auto flex items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <Link
//           href="/"
//           prefetch={true}
//           className="flex items-center gap-2 text-2xl font-bold text-white hover:opacity-90 transition"
//           onClick={() =>
//             showNotification("Welcome to ImageKit ReelsPro", "info")
//           }
//         >
//           <Home className="w-6 h-6" />
//           <span>Snap Post</span>
//         </Link>

//         {/* User Menu */}
//         <div className="relative">
//           <div
//             tabIndex={0}
//             role="button"
//             className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition cursor-pointer"
//           >
//             <User className="w-5 h-5 text-white" />
//           </div>

//           {/* Dropdown */}
//           <ul className="absolute  right-0 mt-3 w-64 bg-white shadow-xl rounded-xl overflow-hidden animate-fadeIn">
//             {session ? (
//               <>
//                 {/* User Info */}
//                 <li className="px-4 py-3 border-b text-sm text-gray-600">
//                   Signed in as{" "}
//                   <span className="font-semibold text-gray-900">
//                     {session.user?.email?.split("@")[0]}
//                   </span>
//                 </li>

//                 {/* Upload */}
//                 <li>
//                   <Link
//                     href="/upload"
//                     className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
//                     onClick={() =>
//                       showNotification("Welcome to Admin Dashboard", "info")
//                     }
//                   >
//                     <Upload className="w-4 h-4" /> Video Upload
//                   </Link>
//                 </li>

//                 {/* Logout */}
//                 <li>
//                   <button
//                     onClick={handleSignOut}
//                     className="flex items-center gap-2 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition text-left"
//                   >
//                     <LogOut className="w-4 h-4" /> Sign Out
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <Link
//                   href="/login"
//                   className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
//                   onClick={() =>
//                     showNotification("Please sign in to continue", "info")
//                   }
//                 >
//                   Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Home, User, LogOut, Upload } from "lucide-react";
import { useNotification } from "./Notification";

export default function Header() {
  const { data: session } = useSession();
  const { showNotification } = useNotification();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
      setOpen(false);
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          prefetch={true}
          className="flex items-center gap-2 text-2xl font-bold text-white hover:opacity-90 transition"
          onClick={() =>
            showNotification("Welcome to ImageKit ReelsPro", "info")
          }
        >
          <Home className="w-6 h-6" />
          <span>Snap Post</span>
        </Link>

        {/* User Menu */}
        <div className="relative">
          <div
            className=" flex   justify-center items-center  gap-2"
            // role="button"
            // onClick={() => setOpen((prev) => !prev)}
            // className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition cursor-pointer"
          >
            <div
              role="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition cursor-pointer"
            >
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-semibold text-gray-900">
                {session?.user?.email?.split("@")[0] || "Guest"}
              </span>
            </div>
          </div>

          {/* Dropdown */}
          {open && (
            <ul className="absolute right-0 mt-3 w-64 bg-white shadow-xl rounded-xl overflow-hidden animate-fadeIn">
              {session ? (
                <>
                  {/* User Info */}
                  <li className="px-4 py-3 border-b text-sm text-gray-600">
                    Signed in as{" "}
                    <span className="font-semibold text-gray-900">
                      {session.user?.email?.split("@")[0]}
                    </span>
                  </li>

                  {/* Upload */}
                  <li>
                    <Link
                      href="/upload"
                      className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                      onClick={() => {
                        showNotification("Welcome to Admin Dashboard", "info");
                        setOpen(false);
                      }}
                    >
                      <Upload className="w-4 h-4" /> Video Upload
                    </Link>
                  </li>

                  {/* Logout */}
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition text-left"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition"
                    onClick={() => {
                      showNotification("Please sign in to continue", "info");
                      setOpen(false);
                    }}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
