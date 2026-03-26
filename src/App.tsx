import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';

// Placeholder pages - to be implemented
function Collection() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif text-slate-900 mb-4">Collection</h1>
        <p className="text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif text-slate-900 mb-4">About Us</h1>
        <p className="text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-serif text-slate-900 mb-4">Contact</h1>
        <p className="text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
