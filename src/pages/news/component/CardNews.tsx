import { Card, Typography } from "antd";

const { Text } = Typography;

type NewsCardProps = {
    imageUrl: string;
    title: string;
    timeAgo: string;
    source: string;
};

export default function NewsCard({
    imageUrl,
    title,
    timeAgo,
    source,
}: NewsCardProps) {
    return (
        <Card
            style={{
                borderRadius: 12,
                overflow: "hidden",
                padding: 0,
                width: "100%",
                maxWidth: 870,
                height: "auto",
                aspectRatio: "16/9", // bikin tetap proporsional
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
            }}
            styles={{
                body: {
                    padding: 24,
                    background: "rgba(0,0,0,0.35)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                },
            }}
        >
            <p
                className="text-sm md:text-2xl lg:text-3xl lg:max-w-[543px] mb-2 lg:mb-[32px] text-white"
            >
                {title}
            </p>

            <div style={{ display: "flex", gap: 12, fontSize: 12 }}>
                <Text style={{ color: "#fff" }}>{timeAgo}</Text>
                <Text style={{ color: "#fff" }}>{source}</Text>
            </div>
        </Card>

    );
}