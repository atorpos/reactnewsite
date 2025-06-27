import React, { useState } from ‘react’;

// Type definitions
interface NavItem {
id: string;
label: string;
}

interface NavbarProps {
currentPage: string;
setCurrentPage: (page: string) => void;
}

interface ContactFormData {
name: string;
email: string;
message: string;
}

interface ServiceCardProps {
title: string;
description: string;
features: string[];
color: string;
}

// Individual page components
const Home: React.FC = () => (

  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
      <p className="text-lg text-gray-600 mb-8">
        This is a modern React + TypeScript website with navigation. Explore different sections using the menu above.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">Type Safety</h3>
          <p className="text-gray-600">Built with TypeScript for better development experience and fewer runtime errors.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-3 text-indigo-600">Modern React</h3>
          <p className="text-gray-600">Uses React hooks and functional components with proper TypeScript typing.</p>
        </div>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
const values = [
{ icon: ‘🚀’, title: ‘Innovation’, description: ‘Pushing boundaries with cutting-edge technology’ },
{ icon: ‘🤝’, title: ‘Collaboration’, description: ‘Working together to achieve great results’ },
{ icon: ‘✨’, title: ‘Excellence’, description: ‘Delivering quality in everything we do’ }
];

return (
<div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
<div className="bg-white p-8 rounded-lg shadow-md">
<p className="text-lg text-gray-600 mb-6">
We are a passionate team dedicated to creating amazing web experiences with TypeScript and React.
Our mission is to build innovative, type-safe solutions that make a difference.
</p>
<div className="grid md:grid-cols-3 gap-6 mt-8">
{values.map((value, index) => (
<div key={index} className="text-center">
<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
<span className="text-2xl">{value.icon}</span>
</div>
<h3 className="font-semibold text-gray-800">{value.title}</h3>
<p className="text-sm text-gray-600 mt-2">{value.description}</p>
</div>
))}
</div>
</div>
</div>
</div>
);
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, color }) => (

  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className={`text-xl font-semibold mb-3 text-${color}-600`}>{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="text-sm text-gray-500 space-y-1">
      {features.map((feature, index) => (
        <li key={index}>• {feature}</li>
      ))}
    </ul>
  </div>
);

const Services: React.FC = () => {
const services = [
{
title: ‘Web Development’,
description: ‘Custom websites and web applications built with modern technologies like React, TypeScript, and Node.js.’,
features: [‘Responsive Design’, ‘Performance Optimization’, ‘SEO Friendly’],
color: ‘purple’
},
{
title: ‘Mobile Apps’,
description: ‘Native and cross-platform mobile applications for iOS and Android devices.’,
features: [‘React Native’, ‘Flutter’, ‘Native Development’],
color: ‘purple’
},
{
title: ‘TypeScript Solutions’,
description: ‘Type-safe applications that reduce bugs and improve developer productivity.’,
features: [‘Type Safety’, ‘Better IDE Support’, ‘Scalable Architecture’],
color: ‘purple’
},
{
title: ‘Consulting’,
description: ‘Technical consulting and strategic guidance to help you make the right technology decisions.’,
features: [‘Architecture Planning’, ‘Technology Stack Selection’, ‘Performance Audits’],
color: ‘purple’
}
];

return (
<div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 p-8">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
<div className="grid md:grid-cols-2 gap-6">
{services.map((service, index) => (
<ServiceCard
key={index}
title={service.title}
description={service.description}
features={service.features}
color={service.color}
/>
))}
</div>
</div>
</div>
);
};

const Contact: React.FC = () => {
const [formData, setFormData] = useState<ContactFormData>({
name: ‘’,
email: ‘’,
message: ‘’
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const { name, value } = e.target;
setFormData(prev => ({
…prev,
[name]: value
}));
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
// Reset form
setFormData({ name: ‘’, email: ‘’, message: ‘’ });
};

return (
<div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 p-8">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-lg shadow-md">
<h3 className="text-xl font-semibold mb-6 text-orange-600">Get in Touch</h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
<input 
type="text"
name="name"
value={formData.name}
onChange={handleInputChange}
className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
placeholder="Your name"
required
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input 
type="email"
name="email"
value={formData.email}
onChange={handleInputChange}
className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
placeholder="your@email.com"
required
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
<textarea 
name="message"
value={formData.message}
onChange={handleInputChange}
rows={4}
className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
placeholder="Your message here..."
required
/>
</div>
<button 
onClick={handleSubmit}
type="submit"
className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
>
Send Message
</button>
</div>
</div>
<div className="bg-white p-8 rounded-lg shadow-md">
<h3 className="text-xl font-semibold mb-6 text-orange-600">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-center">
<span className="text-2xl mr-4">📧</span>
<div>
<p className="font-medium">Email</p>
<p className="text-gray-600">hello@example.com</p>
</div>
</div>
<div className="flex items-center">
<span className="text-2xl mr-4">📞</span>
<div>
<p className="font-medium">Phone</p>
<p className="text-gray-600">+1 (555) 123-4567</p>
</div>
</div>
<div className="flex items-center">
<span className="text-2xl mr-4">📍</span>
<div>
<p className="font-medium">Address</p>
<p className="text-gray-600">123 Main Street<br />City, State 12345</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
};

// Navigation component
const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

const navItems: NavItem[] = [
{ id: ‘home’, label: ‘Home’ },
{ id: ‘about’, label: ‘About’ },
{ id: ‘services’, label: ‘Services’ },
{ id: ‘contact’, label: ‘Contact’ }
];

const handleNavClick = (pageId: string): void => {
setCurrentPage(pageId);
setIsMobileMenuOpen(false);
};

return (
<nav className="bg-white shadow-lg sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4">
<div className="flex justify-between items-center py-4">
{/* Logo */}
<button
onClick={() => handleNavClick(‘home’)}
className=“text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors”
>
TypeScript Site
</button>

```
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentPage === item.id
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-indigo-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    {/* Mobile menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                currentPage === item.id
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>
```

);
};

// Main App component
const App: React.FC = () => {
const [currentPage, setCurrentPage] = useState<string>(‘home’);

const renderPage = (): JSX.Element => {
switch(currentPage) {
case ‘home’:
return <Home />;
case ‘about’:
return <About />;
case ‘services’:
return <Services />;
case ‘contact’:
return <Contact />;
default:
return <Home />;
}
};

return (
<div className="min-h-screen bg-gray-50">
<Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
{renderPage()}
</div>
);
};

export default App;
