import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/logo.png"}
        width={100}
        height={100}
        alt="/"
        className="translate-z-0 w-full right-30 h-full"
      />
    </div>
  );
};

export default Avatar;
