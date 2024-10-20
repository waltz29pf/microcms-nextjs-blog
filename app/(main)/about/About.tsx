interface AboutProps {
  content: string;
}

const About = ({ content }: AboutProps) => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default About;
