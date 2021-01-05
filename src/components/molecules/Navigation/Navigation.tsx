import React, { memo } from "react";

import { Layout } from "antd";
import cx from "classnames";

import styles from "./Navigation.module.scss";

const { Header } = Layout;

type NavigationProps = {
  sticky?: boolean;
};

const Navigation = memo(({ sticky = false }: NavigationProps) => {
  return (
    <Header className={cx(styles.navbar, { [styles.sticky]: sticky })}>
      Ancotrans
    </Header>
  );
});

export default Navigation;
