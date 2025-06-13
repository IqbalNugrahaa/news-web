import { newsApi } from "../../redux/api/newsApi";
import { Variable } from "../../constant/variable";
import { Col, Row, Skeleton } from "antd";
import NewsCard from "./component/CardNews";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import moment from "moment";
import CardEverything from "./component/CardEverything";
import { useNavigate } from "react-router-dom";

export default function News() {
    const now = new Date();
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1); // Tanggal 1 bulan ini
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Hari terakhir bulan ini
    const navigate = useNavigate();

    // FETCH API
    const { data: response, isLoading } = newsApi.useGetNewsTopHeadlineQuery({
        page: 1,
        pageSize: 10,
    });

    const { data: responseEverything, isLoading: isLoadingEverything } = newsApi.useGetNewsEverythingQuery({
        page: 1,
        pageSize: 12,
        query: "bbc.com",
        startDate: moment(startDate).format("YYYY-MM-DD"),
        endDate: moment(endDate).format("YYYY-MM-DD"),
    });

    const data = response?.articles[0];
    const dataEverything = responseEverything?.articles;

    return (
        <div className="w-full h-full px-[35px] md:px-[60px] lg:px-[135px] pt-[56px] pb-[111px]">
            <Title level={1} style={{ fontWeight: "bold" }}>{Variable.headerNews}</Title>

            <Row gutter={[32, 32]} className="mt-6">
                <Col xs={24} lg={16}>
                    <NewsCard
                        imageUrl={data?.urlToImage || ""}
                        title={data?.title || "-"}
                        timeAgo={
                            data?.publishedAt
                                ? moment(data.publishedAt).format("DD MMM YYYY")
                                : "-"
                        }
                        source={data?.source?.name || "-"}
                    />
                </Col>

                <Col xs={0} lg={8}>
                    {isLoading ? (
                        <div>
                            <Skeleton active paragraph={{ rows: 4 }} />
                        </div>
                    ) : (
                        <Paragraph style={{ color: "#444", fontSize: "16px", textAlign: "start" }}>
                            {data?.description}
                        </Paragraph>
                    )}
                </Col>
            </Row>

            <Title level={1} style={{ fontWeight: "bold", marginTop: "56px" }}>{Variable.lastestNews}</Title>

            <Row
                className="mt-14"
                gutter={[
                    { xs: 20, md: 20, lg: 30 },
                    { xs: 32, md: 40, lg: 64 }
                ]}
            >
                {isLoadingEverything ? (
                    dataEverything?.map((_, index) => (
                        <Col key={index} xs={24} md={8} lg={6}>
                            <Skeleton.Image active style={{ width: "100%", height: 200, borderRadius: 8 }} />
                            <Skeleton active paragraph={{ rows: 2 }} title={false} />
                        </Col>
                    ))
                ) : (
                    dataEverything?.map((item, index) => (
                        <Col
                            key={index}
                            xs={24}
                            md={8}
                            lg={6}
                        >
                            <CardEverything
                                onClick={() => navigate(`/news/${index || "detail"}`, { state: item })}
                                imageUrl={item.urlToImage || ""}
                                title={item.title || "-"}
                                timeAgo={
                                    item.publishedAt
                                        ? moment(item.publishedAt).format("DD MMM YYYY")
                                        : "-"
                                }
                                source={item.source?.name || "-"}
                            />
                        </Col>
                    ))
                )}
            </Row>
        </div>
    );
}
