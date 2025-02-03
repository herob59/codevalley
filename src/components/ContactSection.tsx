export default function ContactSection() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">Contact Us</h2>
            <p className="text-gray-600 mt-2">We’d love to hear from you!</p>
          </div>
  
          {/* Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Contact Form */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Name" required />
                </div>
  
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Your Email" required />
                </div>
  
                <div>
                  <label className="block text-gray-700">Message</label>
                  <textarea className="w-full p-3 border border-gray-300 rounded h-32" placeholder="Your Message" required></textarea>
                </div>
  
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
  
            {/* Google Map */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="w-full h-full min-h-[350px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.093897507524!2d-122.41941528468103!3d37.77492977975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c2f5f04b1%3A0x1f2e38bfdf9d018!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1616781285319!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  