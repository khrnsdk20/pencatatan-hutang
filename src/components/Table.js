import { useState } from 'react';

export default function Table({ data, onDelete }) {
  const grouped = data.reduce((acc, item) => {
    acc[item.nama] = acc[item.nama] || [];
    acc[item.nama].push(item);
    return acc;
  }, {});

  const total = (arr) => arr.reduce((sum, i) => sum + i.jumlah, 0);

  return (
    <div className="mt-10 px-8">
      <h2 className="text-2xl font-bold text-white mb-4">Daftar Tagihan</h2>
      <table className="w-full text-left text-black bg-white rounded-md overflow-hidden">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="p-3">Nama</th>
            <th className="p-3">Jumlah</th>
            <th className="p-3">Tanggal</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(grouped).map(([nama, list]) => (
            <>
              <tr className="font-bold">
                <td className="p-3">{nama}</td>
                <td className="p-3">Rp {total(list).toLocaleString('id-ID')}</td>
                <td className="p-3">{list[list.length - 1].tanggal}</td>
                <td className="p-3"></td>
              </tr>
              {list.map((item, idx) => (
                <tr key={idx} className="bg-red-100">
                  <td></td>
                  <td className="p-3">Rp {item.jumlah.toLocaleString('id-ID')}</td>
                  <td className="p-3">{item.tanggal}</td>
                  <td className="p-3 flex gap-2">
                    <button className="bg-blue-500 text-white p-1 rounded">+</button>
                    <button onClick={() => onDelete(item)} className="bg-red-600 text-white p-1 rounded">🗑</button>
                  </td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
