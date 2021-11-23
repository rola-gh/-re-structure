import { AUTH_ROUTES } from "@app/components/auth/auth";
import { HOME_ROUTES } from "@app/components/home/home";
import { SETTINGS_ROUTES } from "@app/components/features/settings/settings";

export const ROOT_ROUTE = "/";

export const PUBLIC_LIST = [...AUTH_ROUTES];
export const PRIVATE_LIST = [...HOME_ROUTES, ...SETTINGS_ROUTES];
