import "./globals.css";
import CustomLink from "./components/CustomLink";



// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        <nav className="border-b border-gray-400 p-4">
          <ul className="flex gap-5 text-xl">
          <li>
            <CustomLink path="/">Home</CustomLink>
          </li>
          <li>
            <CustomLink path="/heavy">Heavy</CustomLink>
          </li>
          <li>
            <CustomLink path="/service">Service</CustomLink>
          </li>
          <li>
            <CustomLink path="/about">About Us</CustomLink>
          </li>
          <li>
            <CustomLink path="/contact">Contact Us</CustomLink>
          </li>
          <li>
            <CustomLink prefetch={false} path="/dashboard/settings">Dashboard Settings</CustomLink>
          </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
