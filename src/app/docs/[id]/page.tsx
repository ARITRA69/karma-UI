"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { useParams } from "next/navigation";
import React from "react";

const UIComponent = () => {
  const params = useParams();
  return (
    <div>
      <Container
        title="Button"
        description="Tap the button for instant tech magic!"
      >
        <Section
          title="Primary"
          description="Primary actions should be obvious and solid. High contrast background colors work great here."
        >
          <div className="bg-black text-white p-3 rounded-lg dark:invert">
            component 1
          </div>
          <div className="bg-black text-white p-3 rounded-lg dark:invert">
            component 1
          </div>
        </Section>
        <Section
          title="Secondary"
          description="Secondary actions should be clear but not prominent. Outline styles or lower contrast background colors are great options."
        >
          Hello There
        </Section>
      </Container>
      <Container title="Component Name" description="Component Description">
        <Section title="Section Heading" description="Section Description Text">
          <div className="bg-violet-600/50 p-3 rounded-lg">component 1</div>
          <div className="bg-violet-600/50 p-3 rounded-lg">component 1</div>
        </Section>
        <Section title="Section Heading" description="Section Description Text">
          <div className="bg-violet-600/50 p-3 rounded-lg">component 1</div>
          <div className="bg-violet-600/50 p-3 rounded-lg">component 1</div>
        </Section>
      </Container>
    </div>
  );
};

export default UIComponent;
