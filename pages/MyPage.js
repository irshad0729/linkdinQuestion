import Image from "next/image";

function MyPage() {
  return (
    <div className="image-parent-style">
      <Image
        src="/images/img-1.webp"
        alt="A beautiful image"
        width={800}
        height={600}
        className="image-style"
      />
    </div>
  );
}

export default MyPage;
