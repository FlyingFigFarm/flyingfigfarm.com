import Image from "next/image";

type SocialLinkProps = {
  url: string;
  img: string;
  text: string;
};

export const SocialLink = (props: SocialLinkProps) => {
  const { url, img, text } = props;

  return (
    <a className="no-underline" href={url}>
      <div className="flex flex-row mb-4">
        <div className="mr-4">
          <Image height={30} width={30} src={img} alt="" />
        </div>
        <div className="text-white">{text}</div>
      </div>
    </a>
  );
};
