import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);

  const handleAdd = (item) => {
    setData((prev) => [...prev, item]);
  };

  const handleDelete = (target) => {
    setData((prev) => prev.filter((item) => item !== target));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-pink-200">
      <Header />
      <Form onAdd={handleAdd} />
      <Table data={data} onDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
