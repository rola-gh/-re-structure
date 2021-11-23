import { useTranslation } from "react-i18next";

import ContentLayout from "@app/gull/components/layout/ContentLayout/ContentLayout";

const HomeScreen = () => {
  const { t } = useTranslation();
  return (
    <ContentLayout header={{ title: t("home.title") }}>
      <p>{t("home.text")}</p>
    </ContentLayout>
  );
};

export default HomeScreen;
