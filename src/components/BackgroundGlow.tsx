export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-drift-1 absolute -left-20 -top-32 h-[420px] w-[420px] rounded-full bg-[#7F77DD]/20 blur-[100px]" />
      <div className="animate-drift-2 absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-[#B8A6FF]/10 blur-[100px]" />
      <div className="background-image absolute inset-0 opacity-[0.15]" />
    </div>
  );
}
