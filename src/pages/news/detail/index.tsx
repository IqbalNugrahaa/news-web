import { Button, Card, Image } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";

export default function DetailNews() {
    const location = useLocation();
    const navigate = useNavigate();
    const news = location.state;

    if (!news) {
        return (
            <div style={{ padding: "40px", textAlign: "center" }}>
                <Title level={4}>Berita tidak ditemukan.</Title>
                <Button onClick={() => navigate(-1)}>Kembali</Button>
            </div>
        );
    }

    return (
        <div className="w-full px-[35px] md:px-[60px] lg:px-[135px] py-[56px]">
            <Button onClick={() => navigate(-1)} style={{ marginBottom: 24 }}>
                ← Kembali
            </Button>

            <Card>
                <Image
                    src={news.urlToImage}
                    alt={news.title}
                    style={{ width: "100%", maxHeight: 400, objectFit: "cover", borderRadius: 8 }}
                />

                <div className="mt-6">
                    <Title level={2}>{news.title}</Title>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-[#949494] text-sm mt-2">
                        <p>{moment(news.publishedAt).format("DD MMM YYYY")}</p>
                        <p>{news.source?.name || "-"}</p>
                    </div>

                    <Paragraph className="mt-4 text-base text-[#444]">
                        {news.description || "Tidak ada deskripsi."}
                    </Paragraph>
                    <Paragraph>{news.content || "Konten tidak tersedia."}</Paragraph>
                </div>
            </Card>
        </div>
    );
}