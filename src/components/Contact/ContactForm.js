"use client";
import React from "react";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";

export default function ContactForm() {
  return (
    <div className="flex  mt-8">
      <a
        href={siteMetadata.linkedin}
        className="inline-block w-6 h-6 mr-4"
        aria-label="Reach out to me via LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
      </a>
      <a
        href={siteMetadata.twitter}
        className="inline-block w-6 h-6 mr-4"
        aria-label="Reach out to me via Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
      </a>
      <a
        href={siteMetadata.github}
        className="inline-block w-6 h-6 mr-4 fill-light"
        aria-label="Check my profile on Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
      </a>
      <a
        href={siteMetadata.youtube}
        className="inline-block w-6 h-6 mr-4 fill-light"
        aria-label="Check my profile on Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YoutubeIcon className="hover:scale-125 transition-all ease duration-200" />
      </a>
    </div>
  );
}
