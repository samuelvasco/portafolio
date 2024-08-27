import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-8">
      {props.children}
    </div>
  );
}
