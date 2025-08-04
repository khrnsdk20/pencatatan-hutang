export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-400 text-white">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="w-6 h-6" />
        <span className="font-bold text-xl">BON</span>
      </div>
      <nav className="flex gap-4 text-white font-semibold">
        <a href="#">Home</a>
        <a href="#">Tagihan</a>
        <a href="#">Kontak</a>
      </nav>
    </header>
  );
}
