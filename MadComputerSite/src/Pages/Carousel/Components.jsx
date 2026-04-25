import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

export function SkladanieKomputerow() {
  return (
    <section className="carousel-slide-section">
      <div className="carousel-slide-container">
        <div className="carousel-slide-content">
          <h2 className="carousel-title">Składanie komputerów</h2>
          <p className="carousel-description">
            Precision engineering for your digital needs. We build custom,
            high-performance PC rigs tailored for extreme gaming, complex 3D
            rendering, or heavy-duty workstation tasks, ensuring optimal thermal
            management and component harmony.
          </p>
          <a className="carousel-link text-primary" href="#">
            Explore Builds <ChevronRight size={18} />
          </a>
        </div>
        <div className="carousel-slide-image-wrapper">
          <img
            alt="Custom high-performance PC build"
            className="carousel-slide-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACmZxmfYA3qOjZ0a8FxVztX0iUVmuLJ5k9UUTY-xvjLL4ZFWm-KuOanmT56eFD6rensWmBwj4QaJ-wMw1u0mHRfOvLW1isYH-RDH2iAr-Jdoh1JIzjs60J94Eok6J_09OrZstw0b_ba4Qov2lt4hEXMSV1R2HpwV1QPJluSwsdShEUq9NDATvaBb8ygb1xYf9QPvwdAldxYYINVBXYoKT16vEr-dyGYNLLEGdRpxEQ13ZyC35aNSzSBY2COuNuHLycDKke4UqFRiW4"
          />
        </div>
      </div>
    </section>
  );
}

export function KasyFiskalne() {
  return (
    <section className="carousel-slide-section">
      <div className="carousel-slide-container">
        <div className="carousel-slide-content">
          <h2 className="carousel-title">Kasy fiskalne</h2>
          <p className="carousel-description">
            Modernizing your point of sale. We provide and configure reliable
            fiscal registers and integrated POS systems designed for seamless
            transactions, detailed reporting, and compliance with the latest tax
            regulations.
          </p>
          <a className="carousel-link text-primary" href="#">
            View Terminals <ChevronRight size={18} />
          </a>
        </div>
        <div className="carousel-slide-image-wrapper">
          <img
            alt="Modern sleek point of sale terminal"
            className="carousel-slide-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBszjO9vArsG-GDsz9Kb1EE7cyluOpe42rtmVl_-f-LTZkazAPvjLCL9XgJUxiQWvCK3sJcKOswi2-hFcQ8GMVmlSkIheUDCEfRg7DLIH66MR8kcPtIKTbP6DA7Ztt9i8d0KRDb9aMzWvwBQH1m2Kw_OTPZKt8gM7W3MunMFsiyEEKq1s73I8XEEr_dspDOGQ5cceB2EgJPsaFr0gtQuc0ptYN94xqDylIBjfN5sD7rCK9WHiJzPZxDo082tLVSBictlDcIdLlwSgzN"
          />
        </div>
      </div>
    </section>
  );
}

export function DpdPickup() {
  return (
    <section className="carousel-slide-section">
      <div className="carousel-slide-container">
        <div className="carousel-slide-content">
          <h2 className="carousel-title">DPD Pickup</h2>
          <p className="carousel-description">
            Authorized DPD parcel point. Send, receive, and return your packages
            with ease through our integrated logistics terminal, ensuring fast
            and secure handling of your physical shipments.
          </p>
          <a className="carousel-link text-primary" href="#">
            Check Rates <ChevronRight size={18} />
          </a>
        </div>
        <div className="carousel-slide-image-wrapper">
          <img
            alt="DPD branded delivery van"
            className="carousel-slide-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCia4IYfvmoy1KVc8p5bSuhMf2GJxufG5a4DEyOcA_wufk9v937gsclK1ofJrmQNjNFR6BCHJozk0umnkT_MCst5Lt9sIEDCeVC1i5qgwEB4Wtkz9d2peyZ9ZflqC1s0ZEjuT82J9sHxxvRzKtT6TV9vzMPCaBRQQt8SAgXS8Tvk6U0lG8d_utYxmicHbYdqVWWQcSVQfDpIZ0R2bkrw8H9AYahV9j24eksFgsS8Dd7euegskB_B-OhdkKPG3rpI_AtwHur9huOaewQ"
          />
        </div>
      </div>
    </section>
  );
}

export function Fotowoltaika() {
  return (
    <section className="carousel-slide-section">
      <div className="carousel-slide-container">
        <div className="carousel-slide-content">
          <div className="carousel-badge text-secondary">
            <span className="badge-dot bg-secondary animate-pulse"></span>
            Renewable Energy
          </div>
          <h2 className="carousel-title">Fotowoltaika</h2>
          <p className="carousel-description">
            Harness the power of the sun. We design and install high-efficiency
            photovoltaic systems for residential and commercial properties,
            featuring advanced inverters and structural integrity for long-term
            energy independence.
          </p>
          <a className="carousel-link text-primary" href="#">
            Calculate Yield <ChevronRight size={18} />
          </a>
        </div>
        <div className="carousel-slide-image-wrapper">
          <img
            alt="Solar panels"
            className="carousel-slide-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlBjN-43_aBZ4NeATf08H67Dcx5JfK404kg2dmKtN5GVHqoe6-tfRztHIMfll6vgnTgLwOQvrRXUgYZ3xJ7fTU5CKaSUTcYbXSYmc1mC-_KCZGNpC2JbfD304OMqbNfg9z4DbsnCKS38pK1gM4fYvlFEorHPnQI5mvqzfRomqNigaOcoYVUjSPOPJHxFazsdY0HR9ApeHOE1pui34d3BmF1X8t31vF5hFMEBH0KP-Zf7q1_RWjcGAKhirvWQT8WDC2g0Z3agoZwDKi"
          />
        </div>
      </div>
    </section>
  );
}

export function SerwisElektryki() {
  return (
    <section className="carousel-slide-section">
      <div className="carousel-slide-container">
        <div className="carousel-slide-content">
          <h2 className="carousel-title">Serwis Elektryki</h2>
          <p className="carousel-description">
            Professional electrical engineering and maintenance. From
            troubleshooting complex industrial panels to upgrading residential
            wiring, our certified technicians ensure your electrical
            infrastructure is safe, efficient, and up to code.
          </p>
          <a className="carousel-link text-primary" href="#">
            Request Service <ChevronRight size={18} />
          </a>
        </div>
        <div className="carousel-slide-image-wrapper">
          <img
            alt="Electrician working"
            className="carousel-slide-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrq36fnhb8D-PRygBAH5YYyk7r6XNHkf55CMlVJyL0DBvtlYqC6xr1wsri5js94iouw3MyTJhv80uO7sRlJubaRwzSmdk4BErmdEXCPZ1k1geMBhh5f8TIb9SHR1UW_30sHFZZw0bLgiWnR2VU5EeLZ_0XzVMkhNn56Mp6vRxARmMM8eRD1mrVvjFEtATQITusSZYEtm4OluiEnrBd8-0BoS8eBqJ3aj7RgYSWDp-US4FxlgfD0EKdWitagQrqSgyU7mZViHikvkoJ"
          />
        </div>
      </div>
    </section>
  );
}

export function AutomatykaBram() {
  return (
    <section className="carousel-slide-section">
      <div className="carousel-slide-container">
        <div className="carousel-slide-content">
          <div className="carousel-badge text-secondary">
            <span className="badge-dot bg-secondary animate-pulse"></span>
            Smart Access
          </div>
          <h2 className="carousel-title">Automatyka Bram</h2>
          <p className="carousel-description">
            Seamless property access. We install robust, heavy-duty gate
            automation systems featuring remote control, smartphone integration,
            and advanced safety sensors for both residential driveways and
            industrial compounds.
          </p>
          <a className="carousel-link text-primary" href="#">
            View Mechanisms <ChevronRight size={18} />
          </a>
        </div>
        <div className="carousel-slide-image-wrapper">
          <img
            alt="Sliding metal driveway gate"
            className="carousel-slide-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDabPvlYRcnbS1PxVapAn32d7JlW6XyBhY6VLaDShcMfuYSJ4rvWGtkIOX9YpTvdlVsGCjZJB8jCZ1q60EVbZegFtvMLi_HaywwmWJPvU9a2GNvXcgGW799khbtPJtu3ItyDPVvBKdo9gokxGHrIIDISICbVVBVxJ2OXgSTQFurweipxXdKzcLVPVzmK1vXAI13l4hBKRNrq5gf1mYpx-aaINpxg8-MdlRivd9kZvNewU0K52R0qtd6zXgUQoXb3IIhBppDs7Ez6Umo"
          />
        </div>
      </div>
    </section>
  );
}

export function SystemyAlarmowe() {
  return (
    <section className="carousel-slide-section">
      <div className="carousel-slide-container">
        <div className="carousel-slide-content">
          <div className="carousel-badge text-primary">Security Systems</div>
          <h2 className="carousel-title">Systemy alarmowe</h2>
          <p className="carousel-description">
            Uncompromising protection for your premises. We deploy intelligent
            alarm systems with motion detectors, glass-break sensors, and direct
            dispatch integrations, all controllable via sleek wall-mounted
            keypads or mobile apps.
          </p>
          <a className="carousel-link text-primary" href="#">
            System Specs <ChevronRight size={18} />
          </a>
        </div>
        <div className="carousel-slide-image-wrapper">
          <img
            alt="Smart home security keypad"
            className="carousel-slide-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHTUddvcFmIfFGodWSSatFNFbMdE1MX5hcrvUJBVaUQgYRPO98krlvsYrcoMqsBcg5pMxxJNV-aWOdpoEjqu3NoxOxEoC3yPNFpGTTm6XaVI8KUGZWfMhZ3byXdtS3hSoYOL5XKQdzIUBdyc5NMx2Q8eOzimd-vPuKwQZvh4cRhLsmqHakQHRy2zZNlNZ40FM6-1AAYO7-A32UTIiUQE_Sp1WqFe9ifiVIP7uvU1YE-eXVM39hhq1wyn5rvsELrsDkxm0B5R6sBqBN"
          />
        </div>
      </div>
    </section>
  );
}

export function InteligentnyMonitoring() {
  return (
    <section className="carousel-slide-section">
      <div className="carousel-slide-container">
        <div className="carousel-slide-content">
          <div className="carousel-badge text-primary">Surveillance</div>
          <h2 className="carousel-title">Inteligentny monitoring</h2>
          <p className="carousel-description">
            Advanced visual oversight. We configure high-definition IP camera
            networks with AI-driven analytics, night vision, and centralized
            DVR/NVR storage, providing you with real-time monitoring
            capabilities from anywhere in the world.
          </p>
          <a className="carousel-link text-primary" href="#">
            Explore Cameras <ChevronRight size={18} />
          </a>
        </div>
        <div className="carousel-slide-image-wrapper">
          <img
            alt="Surveillance monitors"
            className="carousel-slide-image"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3NW4RwOdqGot555xHwEHwsyGDEcDoh-qSI1Q_k_TA3bcHviAoUd_-TT-kMV6a8rVXC-7vOWWKnJrsAvVCjFyxjOYNPewihg5r7FrRt1flxs9q21lD0JcY71bIGEtM6S1Jy32C1cjptEQC-JrUfdIQlfFJjn19f8Leyde7wKZYUlDJjlS-ZW5plxTdsDeM0ElYKx3aqJWA9zWvWAh6IShHc40DXpU1Hlax62yviwN4fKo6TgTGFinChpkY7ub7YSatwtrQPEH065hQ"
          />
        </div>
      </div>
    </section>
  );
}
