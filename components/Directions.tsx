export default function Directions() {
  return (
    <section id="directions" className="py-20 px-4 md:px-8 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white text-balance">
          Find Us
        </h2>
        <p className="text-center text-gold text-lg mb-12 text-pretty">
          Visit our elegant restaurant at this location
        </p>
        
        <div className="flex justify-center rounded-lg overflow-hidden shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.262042793737!2d81.0982222!3d16.713772000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36151fe68cdf11%3A0x95dc67bbff03db9a!2sKrigo%20fine%20dining%20family%20restaurant!5e0!3m2!1sen!2sin!4v1777991415875!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{border: 0, width: '100%', maxWidth: '800px'}}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
          <p className="text-gray-300 text-lg">
            📍 Krigo Fine Dining Family Restaurant<br />
            Visakhapatnam, Andhra Pradesh, India<br />
            <br />
            🕐 Hours: 11:00 AM - 11:00 PM Daily<br />
            📞 Reserve your table today
          </p>
        </div>
      </div>
    </section>
  )
}
