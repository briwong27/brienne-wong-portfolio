import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: site.intro,
};

export default function ContactPage() {
  return (
    <div className="site-wrap">
      <div className="page-intro">
        <p className="kicker">Contact</p>
        <h1>Let’s talk</h1>
        <p className="lede">{site.intro}</p>
        <p>
          {site.location}
          {site.email ? (
            <>
              {" · "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </>
          ) : null}
        </p>
        {!site.email ? (
          <p className="note">
            An email isn’t listed on this page yet. Send a note below and it
            will copy to your clipboard so you can paste it into a message.
          </p>
        ) : null}
      </div>
      <ContactForm />
    </div>
  );
}
