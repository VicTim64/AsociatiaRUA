import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import CazuriSociale from "@/components/CazuriSociale";

const CazuriSocialePage = () => {
  return (
    <Layout pageName="Cazuri Sociale">
      <PageBanner
        pageName="Cazuri Sociale"
        imageURL="/img/hero/cazuri_background.png"
      />
      <CazuriSociale />
    </Layout>
  );
};

export default CazuriSocialePage;
