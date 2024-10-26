import { Card, CardContent } from "@/app/components/ui/card";

interface SkillCardProps {
  skillName: string;
  skillImage: string;
}

const SkillCard = ({ skillName, skillImage }: SkillCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 flex items-center">{skillImage}</div>
        <span>{skillName}</span>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
