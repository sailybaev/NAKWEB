import {MainLayout} from "../layouts/MainLayout";
import { Overview } from "../components/aboutus/Overview";
import { About } from "../components/aboutus/About";
import { Cards } from "../components/aboutus/Cards";
import { Features } from "../components/aboutus/Features";
import { Person } from "../components/aboutus/Person";
export function Aboutus() {
    return(
        <MainLayout>
            <Overview />
            <About />
            <Cards />
            <Features />
            <Person />
        </MainLayout>
    )
}