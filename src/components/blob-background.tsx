export function BlobBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl animate-blob" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold/8 blur-3xl animate-blob-delay" />
      <div className="absolute bottom-[-5%] left-[30%] w-[400px] h-[400px] rounded-full bg-gold/12 blur-3xl animate-blob-delay-2" />
    </div>
  );
}
