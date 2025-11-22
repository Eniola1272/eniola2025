import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Mayowa Philips",
    role: "CEO",
    company: "Mayowa Philips Projects",
    image: "/images/testimonial-1.jpg",
    text: "Eniola completely transformed our online presence! Before working with him, our website was outdated and didn't convert. He built us a stunning WordPress site that's not only beautiful but increased our lead generation by 200%. He went above and beyond to understand our business needs and was incredibly easy to work with throughout the entire process.",
  },
  {
    id: 2,
    name: "David Ogunleye",
    role: "Founder",
    company: "Evolve Labs",
    image: "/images/testimonial-2.jpg",
    text: "I was blown away by Eniola's expertise! He built The Course Masters platform from scratch using React and Next.js, and the results exceeded all expectations. What impressed me most was how he truly understood our vision and technical requirements. He's not just a developer - he's a strategic partner who genuinely cares about your business success. Would work with him again in a heartbeat!",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Owner",
    company: "Align Digital Tech",
    image: "/images/testimonial-3.jpg",
    text: "Eniola is absolutely phenomenal! He took our rough ideas and created a website that perfectly captures our brand while being incredibly functional. His technical knowledge is impressive, but what really sets him apart is his dedication to clients. He was available, patient with our questions, and delivered everything ahead of schedule. Our website has become our #1 marketing tool thanks to his work.",
  },
  {
    id: 4,
    name: "Emmanuel Boluwatife",
    role: "Director",
    company: "Omega Digital Agency",
    image: "/images/testimonial-4.jpg",
    text: "Working with Eniola was a game-changer for our agency. He doesn't just build websites - he builds solutions that drive business growth. His attention to detail is remarkable, and he consistently delivered beyond what we asked for. He's incredibly knowledgeable about modern web technologies and his communication skills made the collaboration smooth and productive. Highly recommended!",
  },
  {
    id: 5,
    name: "Jennifer Martinez",
    role: "Marketing Director",
    company: "Bloom Creative",
    image: "/images/testimonial-5.jpg",
    text: "Eniola is the real deal! He rebuilt our entire website and the impact was immediate - our bounce rate dropped by 60% and conversions tripled. What I appreciate most is how he takes the time to understand your business objectives and translates them into technical solutions. He's responsive, professional, and truly goes all out for his clients. Worth every penny!",
  },
  {
    id: 6,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "TechInnovate",
    image: "/images/testimonial-6.jpg",
    text: "As a non-technical founder, I was nervous about building our web platform, but Eniola made the process incredibly smooth. He explained complex technical concepts in simple terms and always kept me informed. The website he delivered is not only technically solid but also user-friendly and scalable. His expertise and client-focused approach are unmatched!",
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    gsap.from('.testimonial-card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.from('.testimonial-content', {
      opacity: 0,
      x: -30,
      duration: 0.6,
      delay: 0.3,
      ease: 'power2.out',
    });
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="testimonial-orb testimonial-orb-1"></div>
      <div className="testimonial-orb testimonial-orb-2"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-16">
          <p className="testimonial-badge">Testimonials</p>
          <h2 className="testimonial-heading">
            What People Say
          </h2>
          <p className="testimonial-subheading">
            Feedback from colleagues and clients I've worked with
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="quote-icon">"</div>
            
            <p className="testimonial-text">
              {currentTestimonial.text}
            </p>

            <div className="testimonial-author">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="author-image"
              />
              <div>
                <h4 className="author-name">{currentTestimonial.name}</h4>
                <p className="author-role">{currentTestimonial.role}</p>
                <p className="author-company">{currentTestimonial.company}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-navigation">
            <button onClick={handlePrev} className="nav-btn">
              <img src="/images/left-arrow.png" alt="Previous" />
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button onClick={handleNext} className="nav-btn">
              <img src="/images/right-arrow.png" alt="Next" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;