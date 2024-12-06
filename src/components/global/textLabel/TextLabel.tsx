import React from 'react';

type Props = {
  title: string;
  description: string;
  bgColor: string;
};

const TextLabel: React.FC<Props> = ({ title, description, bgColor }) => {
  return (
    <div className={`${bgColor} py-16`}>
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-blue-900">{title}</h2>
        <p className="text-xl text-blue-800">{description}</p>
      </div>
    </div>
  );
};

export default TextLabel;
