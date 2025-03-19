import AdditionalLinks from './additional-links/AdditionalLinks.tsx';

export default function Bottom() {
  return (
    <section className="border-t-gray max-xs:px-16 max-xs:py-12 grid grid-cols-[1fr_max-content_1fr] gap-x-16 border-t px-64 py-24 text-center max-sm:px-32">
      <p className="col-start-2 text-base">
        © 2022 PlantMe. All Rights Reserved
      </p>
      <AdditionalLinks />
    </section>
  );
}
