interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function AboutUsCard({
  title,
  description,
  image,
  imageAlt,
}: Props) {
  return (
    <article className="bg-dark-green flex h-[30rem] p-24 pb-36">
      <img
        src={image}
        alt={imageAlt}
        className="h-full flex-1/3 object-cover"
      />
      <div className="ml-16 flex-2/3 text-white">
        <h2 className="text-large mb-12 font-bold">{title}</h2>
        <p className="mb-24 grow text-base">{description}</p>
        <a
          href="/"
          className="text-base underline"
          aria-label={`Learn more about ${title}`}
        >
          Learn more about →
        </a>
      </div>
    </article>
  );
}
