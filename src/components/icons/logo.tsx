import Image from "next/image";

function Logo() {
  return (
    <Image
      src="/logo.png"
      alt={`${process.env.SITE_NAME}`}
      width={24}
      height={30}
      priority
    />
  );
}

export default Logo;
