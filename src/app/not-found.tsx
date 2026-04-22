import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center">
        <p className="text-6xl font-bold text-gold mb-4">404</p>
        <h1 className="text-2xl font-bold mb-2">Página no encontrada</h1>
        <p className="text-gray-500 mb-8">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-gold text-white font-semibold hover:bg-gold-dark transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
