import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
  id?: number;
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [] }: Props) {
  return (
    <div class="container grid grid-cols-1 grid-rows-[100px_1fr] py-10 sm:flex justify-center">
      <Slider class="carousel carousel-center sm:carousel-end gap-6">
        {highlights.map(({ href, src, alt, label }, index) => (
          <Slider.Item
            index={index}
            class="carousel-item first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0 min-w-[190px]"
          >
            <a href={href} class="card card-compact bg-base-100">
              <figure>
                <Image
                  class="rounded-[20px]"
                  src={src}
                  alt={alt}
                  width={175}
                  height={100}
                />
              </figure>
            </a>
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default Highlights;
