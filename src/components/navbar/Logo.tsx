interface LogoProps {
  logo: string;
}

export function Logo({logo}: LogoProps) {
  return (
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-10" alt="Company Logo" />
    </a>
  );
}