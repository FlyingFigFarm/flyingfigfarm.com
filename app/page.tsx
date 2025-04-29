/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import matter from "gray-matter";
import { ProductBox } from "./components/ProductBox";
import { SocialLink } from "./components/SocialLink";

type PageContent = {
  readonly splashImage: string;
  readonly welcomeImage: string;
  readonly nativePlantsImage: string;
  readonly ediblePlantsImage: string;
  readonly pondPlantsImage: string;
  readonly contactEmail: string;
  readonly facebookLabel: string;
  readonly facebookLink: string;
  readonly welcomeText: string;
};

export default function Page() {
  const page = matter.read("content/pages/home.md").data as PageContent;

  return (
    <div>
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0"
      ></Script>

      <div>
        <div className="grid grid-cols-5">
          <div className="col-span-5 md:col-span-2 order-1 md:order-0">
            <img className="max-w-full h-auto" src={page.welcomeImage} alt="" />
          </div>
          <div
            className={`col-span-5 md:col-span-3 order-0 md:order-1 flex flex-col items-center justify-center text-center`}
          >
            <h1 className="title mt-4 mb-2">
              Welcome to
              <br />
              Flying Fig Farm
            </h1>
            <img
              src="/assets/img/logo.png"
              className="mb-2"
              alt=""
              width="50%"
            />
            <div className="p-6 md:p-8">{page.welcomeText}</div>
          </div>
        </div>
        <div className="bg-[#fbfaf4] px-[3em] py-[6em]">
          <h1 className="title text-center mb-4">What We Offer</h1>

          <div className={`grid grid-cols-3 w-[90%] ml-auto mr-auto`}>
            <div className={`p-4 col-span-3 md:col-span-1 flex justify-center`}>
              <ProductBox
                label="Native Plants"
                url="plants/native"
                img={page.nativePlantsImage}
              />
            </div>
            <div className={`p-4 col-span-3 md:col-span-1 flex justify-center`}>
              <ProductBox
                label="Edible Plants"
                url="plants/edible"
                img={page.ediblePlantsImage}
              />
            </div>
            <div className={`p-4 col-span-3 md:col-span-1 flex justify-center`}>
              <ProductBox
                label="Pond Plants"
                url="plants/pond"
                img={page.pondPlantsImage}
              />
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 p-2 md:p-12">
          <div className="grid grid-cols-5">
            <div className="col-span-5 md:col-span-2 pb-6">
              <h1 className={`title text-white text-left mb-6`}>
                Get in Touch
              </h1>
              {page.facebookLink && (
                <SocialLink
                  text={page.facebookLabel}
                  url={page.facebookLink}
                  img="/assets/img/facebook.png"
                />
              )}
              {page.contactEmail && (
                <SocialLink
                  text={page.contactEmail}
                  url={`mailto:${page.contactEmail}`}
                  img="/assets/img/email.png"
                />
              )}
            </div>
            <div className="col-span-5 md:col-span-3 text-left md:text-right">
              {page.facebookLink && (
                <div
                  className="fb-page"
                  data-href={page.facebookLink}
                  data-tabs="timeline,messages"
                  data-width="500"
                  data-height=""
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="false"
                >
                  <blockquote
                    cite="https://www.facebook.com/facebook"
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href={page.facebookLink}>Facebook</a>
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
