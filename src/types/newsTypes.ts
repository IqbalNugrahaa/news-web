export declare namespace NewsResponseBody {
    interface NewsResponse {
        status: string;
        totalResults: number;
        articles: NewsData[];
    }

    interface NewsData {
        source: {
            id: string;
            name: string;
        };
        author: string;
        title: string;
        description: string;
        url: string;
        urlToImage: string;
        publishedAt: string;
        content: string;
    }
}