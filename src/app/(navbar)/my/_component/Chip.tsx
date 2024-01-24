interface Props {
  chipData?: string[];
  name?: string;
  borderColor?: string;
  textColor?: string;
  gap?: string;
}

const Chip = ({
  chipData,
  name,
  borderColor = "border-grey-a",
  textColor = "text-black-4",
  gap = "gap-2",
}: Props) => {
  const chipClass = `text-[11px] text-black-4 border border-solid rounded-xl py-1 px-2 web:text-sm ${borderColor} ${textColor}`;
  return (
    <>
      {chipData && (
        <p className={`flex flex-row items-center justify-start ${gap} `}>
          {chipData.map((chip) => (
            <span key={chip} className={chipClass}>
              {chip}
            </span>
          ))}
        </p>
      )}
      {name && (
        <span className="border text-black-4 border-solid border-black-6 rounded-xl text-[11px] py-1 px-2 web:text-sm">
          {name}
        </span>
      )}
    </>
  );
};

export default Chip;
