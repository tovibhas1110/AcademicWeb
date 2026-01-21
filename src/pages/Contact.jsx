// src/pages/Home.jsx
import { Link } from "react-router-dom";
import './AcademicWebsite.css';

function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-900 font-serif">
      <main className="space-y-12">
       
    <section id="contact" className="contact">
      <form action="https://formspree.io/f/mgvenzro" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="_replyto" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      </section>
      </main>

      <footer className="mt-12 text-sm text-center text-gray-500 border-t pt-6">
        &copy; 2025 Dr. ir. Vibhas Mishra
      </footer>
    </div>
  );
}

export default Contact;
