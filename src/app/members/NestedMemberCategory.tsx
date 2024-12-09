import React from "react";
import { MemberCategory } from "./MemberCategory";
import { categoryColors } from "@/data/members";

interface NestedMemberCategoryProps {
  categoryName: string;
  categoryData: any;
}

export const NestedMemberCategory: React.FC<NestedMemberCategoryProps> = ({ 
  categoryName, 
  categoryData 
}) => {
  const isNested = categoryData && categoryData[0] && (categoryData[0] as any).category;

  if (isNested) {
    return (
      <div className="space-y-8">
        {(categoryData as any[]).map((subCategory) => (
          <MemberCategory 
            key={subCategory.category}
            category={subCategory.category}
            members={subCategory.members}
            borderColor={categoryColors[subCategory.category as keyof typeof categoryColors] || "#000000"}
          />
        ))}
      </div>
    );
  }
  
  return (
    <MemberCategory 
      category={categoryName}
      members={categoryData}
      borderColor={categoryColors[categoryName as keyof typeof categoryColors] || "#000000"}
    />
  );
};