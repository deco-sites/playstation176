import Button from "$store/components/ui/Button.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImg } from "deco-sites/std/components/types.ts";

export interface BannerSecondary {
  /** @description desktop otimized image */
  desktop: LiveImg;
  /** @description mobile otimized image */
  mobile: LiveImg;
  /** @description Image's alt text */
  alt: string;
  /** @description Same number as highlight carousel */
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    subTitle: string;
    /** @description Button label */
    label: string;
    btnColor: "primary" | "secondary";
    mobile?: LiveImg;
    desktop?: LiveImg;
    txtColor: "white" | "black";
  };
}

export interface Props {
  image: BannerSecondary;

  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
}

function BannerSecondary(
  { image, lcp }: { image: BannerSecondary; lcp?: boolean },
) {
  if (image === undefined) return;

  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  return (
    <a
      href={action?.href ?? "#"}
      aria-label={action?.label}
      class="relative overflow-y-hidden w-full flex flex-col sm:flex-row-reverse"
    >
      <Picture preload={lcp}>
        <Source
          media="(max-width: 767px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={mobile}
          width={360}
          height={600}
        />
        <Source
          media="(min-width: 768px)"
          fetchPriority={lcp ? "high" : "auto"}
          src={desktop}
          width={1440}
          height={600}
        />
        <img
          class="object-cover w-full h-auto"
          loading={lcp ? "eager" : "lazy"}
          src={desktop}
          alt={alt}
        />
      </Picture>
      {action && (
        <div class="relative m-auto sm:max-w-2xl sm:text-right sm:justify-start max-h-min flex flex-col justify-center items-center gap-4 p-5 text-black">
          <span
            class={`text-xl font-extralight color-neutral ${
              action.txtColor === "white" ? "text-white" : "text-black"
            }`}
          >
            {action.title}
          </span>
          <span
            class={`font-extralight text-base text-ellipsis text-center max-h-28 overflow-hidden ${
              action.txtColor === "white" ? "text-white" : "text-black"
            }`}
          >
            {action.subTitle}
          </span>
          <Button
            class={`btn ${
              action.btnColor === "primary" ? "bg-prim" : "bg-secon"
            } text-white rounded-full p-0 w-32 border-0`}
          >
            {action.label}
          </Button>
        </div>
      )}
    </a>
  );
}

export default BannerSecondary;
