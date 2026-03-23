import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/page-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PagePhotoDetail from "./pages/page-photo-detail";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutMain />}>
                    <Route index element={<PageHome />} />
                    <Route path="/componentes" element={<PageComponents />} />
                    <Route path="/fotos/:id" element={<PagePhotoDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
