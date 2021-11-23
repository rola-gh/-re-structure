import { AUTH_ROUTES } from "@app/app/auth/auth";
import { HOME_ROUTES } from "@app/app/views/home/home";
import { SETTINGS_ROUTES } from "@app/app/features/settings/settings";

export const ROOT_ROUTE = "/";

export const PUBLIC_LIST = [...AUTH_ROUTES];
export const PRIVATE_LIST = [...HOME_ROUTES, ...SETTINGS_ROUTES];
