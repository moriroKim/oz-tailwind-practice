export default function Content({ content }) {
    return (
        <div className="flex flex-col items-start gap-[5px]">
            <img className="w-[300px] rounded-[10px] mb-[3px]" src={content.img} alt={content.title} />
            <span className="text-xs text-[#d7fa00] border border-solid border-[#d7fa00] py-1 px-[5px] rounded-[3px]">
                모집중
            </span>
            <div className="text-lg font-semibold text-white">{content.title}</div>
            <p className="text-xs text-gray-200">{content.subtitle}</p>
        </div>
    );
}
