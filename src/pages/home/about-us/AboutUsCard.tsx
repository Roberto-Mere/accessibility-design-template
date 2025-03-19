interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  srcSet: string;
  sizes: string;
}

export default function AboutUsCard({
  title,
  description,
  image,
  imageAlt,
}: Props) {
  return (
    <article className="bg-dark-green flex h-[29rem] p-24 pb-36 max-md:h-[26rem] max-md:w-full">
      <img
        src={image}
        alt={imageAlt}
        className="h-full flex-1/3 object-cover"
      />
      <div className="ml-16 flex-2/3 text-white">
        <h2 className="text-large mb-12 font-bold">{title}</h2>
        <p className="max-h-[64%] grow overflow-clip text-base max-md:max-h-[47%]">
          {description}
        </p>
        <a
          href="/"
          className="mt-24 block h-max text-base underline"
          aria-label={`Learn more about ${title}`}
        >
          Learn more about →
        </a>
      </div>
    </article>
  );
}
