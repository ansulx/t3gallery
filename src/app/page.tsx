import Link from "next/link";

const mockUrls = [
 "https://utfs.io/f/5e2d05ba-a04d-4b3c-b27d-70c16b7a9483-8t1gh4.jpg",
 "https://utfs.io/f/7cb46d7a-b53d-462b-90a7-8b26b5a1d513-ore28u.jpeg",
 "https://utfs.io/f/57014206-8501-424f-b9c8-5a938373af57-ao082f.jpeg",
 "https://utfs.io/f/7ac5dd36-755b-4d20-a21a-ab3f70be0bd3-yz11s4.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-1/4 p-2">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
