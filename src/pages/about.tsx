import Link from "next/link";
import Header from "../components/Header"; // Import the Header component


export default function About() {
  return (
    <div>
      <Header /> {/* Reusing the Header Component */}

      <main className="container mx-auto mt-20 p-4">
        {/* Hero Section */}
        <section className="text-center">
          <img src="/hero-image.jpg" alt="Our Story" className="w-full h-64 object-cover" />
          <h1 className="text-3xl font-bold mt-4">Our Story</h1>
          <p className="mt-2">
            We are a digital transformation consultancy and engineering company that delivers cutting-edge solutions for global organizations and technology startups. Since 2007, we have been helping companies and established brands reimagine their business through digitalization.
          </p>
        </section>

        {/* Team Section */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {/* Team Member Cards */}
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="text-center bg-gray-100 p-4 rounded-lg">
                <img src={`/team${id}.jpg`} alt={`Team Member ${id}`} className="w-24 h-24 mx-auto rounded-full" />
                <h3 className="mt-2 font-semibold">John Doe</h3>
                <p className="text-gray-600">Software Engineer</p>
                <p className="text-sm mt-1">Expert in building scalable web applications.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mt-10 text-center">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-2">
            Our mission is to help businesses achieve their digital transformation goals through cutting-edge technology and innovative software solutions.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4 mt-10">
        <p>© 2025 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
