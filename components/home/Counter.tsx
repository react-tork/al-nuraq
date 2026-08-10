"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Counter — homepage counter section                                 */
/*  Reproduced from quarter-rtl/index.html (counter section).          */
/* ------------------------------------------------------------------ */
export default function Counter() {
    const items = [
        { icon: "flaticon-select", target: 560, suffix: "+", label: "Total Area Sq" },
        { icon: "flaticon-office", target: 197, suffix: "K+", label: "Apartments Sold" },
        { icon: "flaticon-excavator", target: 268, suffix: "+", label: "Total Constructions" },
        { icon: "flaticon-armchair", target: 340, suffix: "+", label: "Apartio Rooms" },
    ];

    return (
        <>
            {/* ==================== counter section ==================== */}
            <section className="bg-section-bg-1">
                <div className="container pt-30 pb-70px">
                    <div className="text-center counter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-30px mb-45px -mt-3">
                        {items.map((item) => (
                            <div key={item.label}>
                                <div className="text-65px text-secondary-color">
                                    <i className={`${item.icon} leading-1`} />
                                </div>
                                <h5 className="text-3xl md:text-4xl lg:text-42px text-heading-color font-bold mb-10px">
                                    <CountNumber target={item.target} />
                                    <span>{item.suffix}</span>
                                </h5>
                                <p className="text-sm lg:text-base font-bold">
                                    <span className="leading-1.8">{item.label}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

/* ------------------------------------------------------------------ */
/*  CountNumber — animates a number from 0 to `target` when scrolled    */
/*  into view. Reproduces the original template's `counterup.js`:       */
/*  IntersectionObserver (threshold 0) triggers a 2500ms request-       */
/*  animation-frame count-up using easeOutQuint easing, formatted with  */
/*  en-US thousands separators.                                         */
/* ------------------------------------------------------------------ */
interface CountNumberProps {
    target: number;
}

function CountNumber({ target }: CountNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);
    // Initial value matches the original template's static HTML (the final
    // number is shown until the observer resets it to 0 and counts up).
    const [value, setValue] = useState(target);
    const startedRef = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !startedRef.current) {
                        startedRef.current = true;
                        const duration = 2500;
                        let startTimestamp: number | null = null;

                        const step = (timestamp: number) => {
                            if (startTimestamp === null) startTimestamp = timestamp;
                            const elapsedPercent = (timestamp - startTimestamp) / duration;
                            const eased = Math.min(1 - Math.pow(1 - elapsedPercent, 5), 1);
                            setValue(Math.abs(eased * target));
                            if (eased < 1) {
                                window.requestAnimationFrame(step);
                            } else {
                                setValue(target);
                            }
                        };

                        setValue(0);
                        window.requestAnimationFrame(step);
                        observer.disconnect();
                    }
                });
            },
            { root: null, rootMargin: "0px 0px", threshold: 0 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span
            ref={ref}
            className="leading-1.3"
            data-countup-number={target}
        >
            {value.toLocaleString("en-US")}
        </span>
    );
}
