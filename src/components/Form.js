import { useState } from 'react';

export default function Form({ onAdd }) {
  const [nama, setNama] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [tanggal, setTanggal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !jumlah || !tanggal) return;
    onAdd({ nama, jumlah: parseInt(jumlah), tanggal });
    setNama('');
    setJumlah('');
    setTanggal('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 rounded-xl p-6 backdrop-blur-md border text-white max-w-lg mx-auto mt-6"
    >
      <h2 className="text-center font-bold text-xl mb-4">Catatan Belanja</h2>
      <input className="input-style" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
      <input className="input-style" placeholder="Jumlah Belanja" type="number" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
      <input className="input-style" placeholder="dd/mm/yyyy" type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
      <button className="w-full bg-red-600 rounded-md py-2 mt-2 font-bold hover:bg-red-700 transition">
        Tambahkan
      </button>
    </form>
  );
}
