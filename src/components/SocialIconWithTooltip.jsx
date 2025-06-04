import Link from "next/link";

const SocialIconWithTooltip = ({ icon, name }) => {
  return (
    <Link href="#" role="button">
      <div className="relative">
        <div>{icon}</div>
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded mt-1 opacity-0 transition-opacity duration-300 pointer-events-none">
          {name}
        </span>
      </div>
    </Link>
  );
};

export default SocialIconWithTooltip;
