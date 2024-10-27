import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";

interface SkillCardProps {
  skillName: string;
  skillImage: string;
}

const SkillCard = ({ skillName, skillImage }: SkillCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center gap-4 py-6">
        <div className="relative aspect-square w-16">
          <Image
            src={`/skills/${skillImage}.webp`}
            alt={skillName}
            fill
            className="object-contain" // または object-cover
            sizes="64px"
          />
        </div>
        <span>{skillName}</span>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
