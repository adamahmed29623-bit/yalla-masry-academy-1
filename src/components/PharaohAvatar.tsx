'use client';

export default function PharaohAvatar({ src }: { src: string }) {
  return (
    <div className="pharaoh-avatar">
      <img src={src} alt="Pharaoh Avatar" className="rounded-full w-24 h-24 object-cover" />
      <style jsx>{`
        .pharaoh-avatar {
          border: 3px solid #d4af37;
          border-radius: 50%;
          padding: 5px;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
