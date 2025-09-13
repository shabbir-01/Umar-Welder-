import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Umar Welder – Expert Welding Services in Riyadh
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
          Providing top-quality iron welding, repairing, custom metal work, and shed making services in Saudi Arabia. Reliable, fast, and professional.
        </p>
        <a href="#contact" className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
          Contact Us
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">About Umar Welder</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Umar Welder specializes in steel fabrication, welding repairs, custom projects, and shed construction, serving clients across Riyadh, Saudi Arabia. Our expert team ensures quality work with every project.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <ul className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="p-4 border rounded shadow hover:shadow-lg transition">Iron Welding</li>
          <li className="p-4 border rounded shadow hover:shadow-lg transition">Repairing</li>
          <li className="p-4 border rounded shadow hover:shadow-lg transition">Custom Metal Work</li>
          <li className="p-4 border rounded shadow hover:shadow-lg transition">Shed Making</li>
        </ul>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Image src="/images/img1.jpg" alt="Iron welding project by Umar Welder in Riyadh" width={400} height={300} />
          <Image src="/images/img2.jpg" alt="Repairing project by Umar Welder in Riyadh" width={400} height={300} />
          <Image src="/images/img3.jpg" alt="Custom metal work project by Umar Welder in Riyadh" width={400} height={300} />
          <Image src="/images/img4.jpg" alt="Shed making project by Umar Welder in Riyadh" width={400} height={300} />
          <Image src="/images/img12.jpg" alt="Metal fabrication project by Umar Welder in Riyadh" width={400} height={300} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">Phone: +966 53 706 0492</p>
        <p className="text-gray-700 mb-4">Email: umarua847@gmail.com</p>
        <a href="tel:+966537060492" className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
          Call Now
        </a>
      </section>
    </main>
  );
}
