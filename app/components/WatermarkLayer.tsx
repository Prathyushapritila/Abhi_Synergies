export default function WatermarkLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 watermark-bg"
      style={{
        backgroundImage: "url('/abhi-logo.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: 0.12,
        zIndex: 0,
      }}
    />
  );
}

