import React from 'react';
import MainSection from '../components/MainSection';
import Services from '../components/Services';
import Quotes from '../components/Quotes';
import Differentiators from '../components/Differentiators';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => (
  <div className="container mx-auto px-4 py-8">
    <MainSection />
        <Services />
        <Quotes />
        <Differentiators />
        <Testimonials />
        <ContactForm />
  </div>
);

export default Home; 