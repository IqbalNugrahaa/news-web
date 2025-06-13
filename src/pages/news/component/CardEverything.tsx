import { Card } from "antd";

type NewsEverythingProps = {
    imageUrl: string;
    title: string;
    timeAgo: string;
    source: string;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
};

export default function CardEverything({
    imageUrl,
    title,
    timeAgo,
    source,
    onClick,
}: NewsEverythingProps) {
    return (
        <Card
            hoverable
            style={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
            }}
            onClick={onClick}
            cover={
                <img
                    alt={imageUrl}
                    src={imageUrl}
                    style={{
                        height: 176,
                        width: "100%",
                        objectFit: "cover",
                    }}
                />
            }
        >
            <p className="h-[64px] text-black text-base md:text-lg lg:text-2xl font-bold overflow-hidden text-ellipsis line-clamp-2">
                {title}
            </p>

            <div className="mt-6 flex flex-col lg:flex-row gap-1 lg:gap-4">
                <p className="text-[8px] lg:text-xs text-[#949494] font-normal">
                    {timeAgo}
                </p>
                <p className="text-[8px] lg:text-xs text-[#949494] font-normal truncate max-w-[150px]">
                    {source}
                </p>
            </div>
        </Card>
    );
}