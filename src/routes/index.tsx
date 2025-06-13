import { Navigate, Route, Routes } from "react-router-dom";
import News from "../pages/news";
import Layout from "../pages/layout";
import NotFound from "../pages/NotFound";
import DetailNews from "../pages/news/detail";

export default function SetupRouter() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Redirect dari "/" ke "/news" */}
                <Route index element={<Navigate to="news" replace />} />
                <Route path="news">
                    <Route index element={<News />} />
                    <Route path=":id" element={<DetailNews />} />
                </Route>

                {/* Route untuk 404 */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}