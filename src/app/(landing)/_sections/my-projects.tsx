import Image from "next/image";

export function MyProjectsSection() {
  return (
    <section className="bg-black text-white p-32">
      <div className="flex justify-center mb-16">
        <h2 className="text-5xl font-bold">My Projects</h2>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/atlas.svg"
            alt="house-picture"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold">01</h3>
          <h4 className="text-3xl font-bold">
            Fragua - Real Estate Market Analytics
          </h4>
          <p>
            Fragua provided advanced real estate analytics designed to enhance
            decision-making with beautiful and insightful data visualizations.
            The platform leveraged machine learning models to interpret data and
            uncover trends, all within a straightforward user experience that
            made complex insights accessible.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold">02</h3>
          <h4 className="text-3xl font-bold">User Management Service </h4>
          <p>
            The carrier user service was designed to manage thousands of
            transactions, seamlessly integrating with the company&apos;s
            event-driven architecture to communicate with other microservices.
            It handled user authorization and personal data, ensuring secure and
            efficient operations across the platform.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/user-service.svg"
            alt="storage-servers-picture"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
