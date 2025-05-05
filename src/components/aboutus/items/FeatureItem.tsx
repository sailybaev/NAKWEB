interface FeatureItemProps {
    icon: null;
    title: string;
    description: string;
    iconColor: string;
  }
  
  export function FeatureItem({ icon, title, description, iconColor }: FeatureItemProps) {
    return (
      <div className="flex items-start">
        <div className={iconColor}>
          {icon}
        </div>
        <div className="ml-5">
          <h3 className="text-xl font-semibold text-black">
            {title}
          </h3>
          <p className="mt-3 text-base text-gray-600">
            {description}
          </p>
        </div>
      </div>
    );
  }