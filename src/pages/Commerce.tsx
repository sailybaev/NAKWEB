import { MainLayout } from "../layouts/MainLayout";
import {Hero} from "../components/commerce/Hero.tsx";
import {Portfolio} from "../components/commerce/Portfolio.tsx";
import {QuoteReuest} from "../components/commerce/QuoteReuest.tsx";

export function Commerce() {

    return (
        <MainLayout>
            <Hero />

            <Portfolio />

            <QuoteReuest/>
        </MainLayout>
    );
}