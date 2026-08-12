// components/team/TeamSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, type Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";

interface TeamMember {
  id: string;
  nameKey: string;
  roleKey: string;
  image: string;
  socials: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    nameKey: "team.member1.name",
    roleKey: "team.member1.role",
    image: "/images/team/4.jpg",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    id: "team-2",
    nameKey: "team.member2.name",
    roleKey: "team.member2.role",
    image: "/images/team/2.jpg",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
    },
  },
  {
    id: "team-3",
    nameKey: "team.member3.name",
    roleKey: "team.member3.role",
    image: "/images/team/5.jpg",
    socials: {
      facebook: "https://www.facebook.com",
      twitter: "https://x.com",
      linkedin: "https://www.linkedin.com",
    },
  },
];

export default function TeamSection() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) as Locale;

  return (
    <section>
      <div className="container pt-115px pb-90px">
        {/* section heading */}
        <div className="text-center mb-50px">
          <p className="text-sm md:text-15px lg:text-base text-secondary-color bg-secondary-color/10 capitalize mb-15px py-0.5 px-5 rounded-full inline-block font-semibold">
            <span className="leading-1.3">{getTranslation("team.subtitle", locale)}</span>
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-26px lg:text-3xl xl:text-44px text-heading-color font-bold">
            <span className="leading-1.3">{getTranslation("team.title", locale)}</span>
          </h2>
        </div>

        {/* team cards */}
        <div className="service-cards flex flex-wrap justify-center items-center text-center -mx-15px">
          {teamMembers.map((member) => {
            const name = getTranslation(member.nameKey, locale);
            return (
              <div
                key={member.id}
                className="service-card basis-full sm:basis-1/2 lg:basis-1/3 px-15px mb-30px"
              >
                <div className="border border-white-6 hover:shadow-box-shadow-1 bg-white relative transition-all duration-300">
                  <div className="text-center mb-5">
                    <Image
                      src={member.image}
                      alt={name}
                      width={370}
                      height={400}
                      className="inline-block w-full h-auto"
                    />
                  </div>
                  <div className="text-center px-15px py-25px">
                    <h6 className="text-17px md:text-lg lg:text-xl text-heading-color font-bold mb-15px">
                      <Link
                        href={`/team/${member.id}`}
                        className="hover:text-secondary-color leading-1.3 md:leading-1.3 lg:leading-1.3"
                      >
                        {name}
                      </Link>
                    </h6>
                    <h6 className="text-sm md:text-15px lg:text-base font-bold mb-15px">
                      <span className="text-secondary-color leading-1.3 md:leading-1.3 lg:leading-1.3">
                        {getTranslation(member.roleKey, locale)}
                      </span>
                    </h6>

                    {/* social */}
                    <ul className="text-sm lg:text-base flex gap-15px justify-center items-center">
                      {member.socials.facebook && (
                        <li className="leading-1.8 lg:leading-1.8">
                          <a
                            href={member.socials.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name} on Facebook`}
                          >
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                      )}
                      {member.socials.twitter && (
                        <li className="leading-1.8 lg:leading-1.8">
                          <a
                            href={member.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name} on Twitter`}
                          >
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                      )}
                      {member.socials.linkedin && (
                        <li className="leading-1.8 lg:leading-1.8">
                          <a
                            href={member.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${name} on LinkedIn`}
                          >
                            <i className="fab fa-linkedin" />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
