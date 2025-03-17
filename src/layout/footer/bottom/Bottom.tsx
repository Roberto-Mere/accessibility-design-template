import AdditionalLinks from './additional-links/AdditionalLinks.tsx';

export default function Bottom() {
  return (
    <section className="border-t-gray grid grid-cols-3 justify-items-end border-t px-64 py-24">
      <p className="col-start-2 justify-self-center text-base">
        © 2022 PlantMe. All Rights Reserved
      </p>
      <AdditionalLinks />
    </section>
  );
}
