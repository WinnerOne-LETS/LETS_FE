interface Props {
  title?: string;
  subTitle?: string;
  content: React.ReactNode;
}
const TermsTemplate = ({ title, subTitle, content }: Props) => {
  const titleClass = "mb-4 leading-5 text-black-4 text-sm font-bold";
  const subClass = "mt-4 mb-1 leading-5 text-black-6 text-xs font-bold ";
  const contentClass = "leading-5  text-black-7 text-xs";
  return (
    <div className="leading-5">
      <h2 className={titleClass}>{title}</h2>
      <h3 className={subClass}>{subTitle}</h3>
      <div className={contentClass}>{content}</div>
    </div>
  );
};

export default TermsTemplate;
