import Image from 'next/image'

export default function About() {
  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-2">
        <div class="mt-24">
          <p class="text-8xl font-bold">Building digital </p>
          <p class="text-8xl font-bold mt-2">Products,brands</p>
          <p class="text-8xl font-bold mt-2 text-blue-600">experience</p>
          <div class="mt-6">
            <p class="text-2xl">A product designer and Visual developer in sf.</p>
            <p class="text-2xl">
              I specialize in UI/UX Design ,reponsive web Design, and visual
              Development
            </p>
            <p class="text-2xl">and visual Development </p>
          </div>
        </div>
        <div>
        <Image
        src="/headeryoung2.svg"
        alt="Picture of the author"
        width={720}
        height={580}
      />
        </div>
      </div>
    </div>
  );
}
