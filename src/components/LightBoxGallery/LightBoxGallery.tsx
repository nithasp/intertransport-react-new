import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { LightBoxGalleryInterface, Image } from "../../interfaces";

export default function LightBoxGallery(props: LightBoxGalleryInterface) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [props.galleryID]);

  return (
    <div
      className="pswp-gallery"
      id={props.galleryID}
      style={{ width: "100%", height: "100%" }}
    >
      {props.images.map((image: Image, index: number) => {
        return (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.thumbnailURL} alt="" />
          </a>
        );
      })}
    </div>
  );
}
